import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from 'lucide-react';

interface AppointmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AppointmentDialog = ({ open, onOpenChange }: AppointmentDialogProps) => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    preferredDays: [] as string[],
    preferredTime: '',
    serviceType: '',
    otherService: '',
    symptoms: '',
    urgency: [5],
  });

  // 🔹 Ετικέτες ημερών ανάλογα με τη γλώσσα
  const days = language === 'el'
    ? ['Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ', 'Κυρ']
    : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // 🔹 Ετικέτες ώρας ανάλογα με τη γλώσσα
  const times = language === 'el'
    ? ['Πρωί', 'Απόγευμα']
    : ['Morning', 'Afternoon'];

  const handleToggleDay = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(day)
        ? prev.preferredDays.filter((d) => d !== day)
        : [...prev.preferredDays, day],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.phone.trim() || !formData.serviceType) {
      toast({
        title: language === 'el' ? 'Σφάλμα' : 'Error',
        description:
          language === 'el'
            ? 'Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία'
            : 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    if (formData.serviceType === 'other' && !formData.otherService.trim()) {
      toast({
        title: language === 'el' ? 'Σφάλμα' : 'Error',
        description:
          language === 'el'
            ? 'Παρακαλώ περιγράψτε την υπηρεσία που χρειάζεστε'
            : 'Please describe the service you need',
        variant: 'destructive',
      });
      return;
    }

    // Εμφάνιση επιβεβαίωσης
    setShowConfirm(true);
  };

  const handleConfirmSubmit = async () => {
    try {
      // 🔹 Αποστολή δεδομένων στο Formspree
      const response = await fetch("https://formspree.io/f/movyqwlv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          preferredDays: formData.preferredDays.join(', '),
          preferredTime: formData.preferredTime,
          serviceType:
            formData.serviceType === 'other'
              ? formData.otherService
              : formData.serviceType,
          symptoms: formData.symptoms,
          urgency: formData.urgency[0],
        }),
      });

      if (response.ok) {
        toast({
          title: t.booking.successTitle,
          description: t.booking.successMessage,
        });

        // Reset
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          preferredDays: [],
          preferredTime: '',
          serviceType: '',
          otherService: '',
          symptoms: '',
          urgency: [5],
        });

        setShowConfirm(false);
        onOpenChange(false);
      } else {
        throw new Error('Formspree error');
      }
    } catch (error) {
      toast({
        title: language === 'el' ? 'Σφάλμα' : 'Error',
        description:
          language === 'el'
            ? 'Παρουσιάστηκε πρόβλημα κατά την αποστολή. Προσπαθήστε ξανά.'
            : 'There was an issue submitting your form. Please try again.',
        variant: 'destructive',
      });
    }
  };

  // const handleConfirmSubmit = () => {
  //   toast({
  //     title: t.booking.successTitle,
  //     description: t.booking.successMessage,
  //   });

  //   setFormData({
  //     firstName: '',
  //     lastName: '',
  //     phone: '',
  //     email: '',
  //     address: '',
  //     preferredDays: [],
  //     preferredTime: '',
  //     serviceType: '',
  //     otherService: '',
  //     symptoms: '',
  //     urgency: [5],
  //   });

  //   setShowConfirm(false);
  //   onOpenChange(false);
  // };

  return (
    <>
      {/* 🔹 Confirmation after submit */}
      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.booking.confirmTitle}</AlertDialogTitle>
            <AlertDialogDescription>{t.booking.confirmMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowConfirm(false)}>
              {t.booking.cancelButton}
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmSubmit}>
              {t.booking.confirmButton}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* 🔹 Appointment Form */}
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent p-6 my-16"
        >
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {t.booking.formTitle}
            </DialogTitle>
            <DialogDescription>{t.booking.formDescription}</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 mt-4 pb-6">
            {/* Ονοματεπώνυμο */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t.booking.firstName} *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t.booking.lastName} *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            {/* Τηλέφωνο & Email */}
            <div className="space-y-2">
              <Label htmlFor="phone">{t.booking.phone} *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t.booking.email}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Διεύθυνση */}
            <div className="space-y-2">
              <Label htmlFor="address">{t.booking.address}</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            {/* 🔹 Επιλογή ημερών & ώρας */}
            <div className="space-y-3">
              <Label>{language === 'el' ? 'Προτιμώμενες ημέρες' : 'Preferred Days'}</Label>
              <div className="grid grid-cols-3 gap-2">
                {days.map((day) => (
                  <Button
                    key={day}
                    type="button"
                    variant={formData.preferredDays.includes(day) ? 'default' : 'outline'}
                    onClick={() => handleToggleDay(day)}
                    className="text-sm transition-all duration-200"
                  >
                    {day}
                  </Button>
                ))}
              </div>

              <Label>{language === 'el' ? 'Προτιμώμενη ώρα' : 'Preferred Time'}</Label>
              <div className="flex gap-3">
                {times.map((time) => (
                  <Button
                    key={time}
                    type="button"
                    variant={formData.preferredTime === time ? 'default' : 'outline'}
                    onClick={() => setFormData({ ...formData, preferredTime: time })}
                    className="w-1/2"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>

            {/* Είδος υπηρεσίας */}
            <div className="space-y-2">
              <Label htmlFor="serviceType">{t.booking.serviceType} *</Label>
              <Select
                value={formData.serviceType}
                onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
              >
                <SelectTrigger id="serviceType">
                  <SelectValue
                    placeholder={language === 'el' ? 'Επιλέξτε υπηρεσία' : 'Select service'}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cleaning">{t.booking.serviceCleaning}</SelectItem>
                  <SelectItem value="filling">{t.booking.serviceFilling}</SelectItem>
                  <SelectItem value="other">{t.booking.serviceOther}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.serviceType === 'other' && (
              <div className="space-y-2">
                <Label htmlFor="otherService">{t.booking.otherServiceLabel} *</Label>
                <Textarea
                  id="otherService"
                  value={formData.otherService}
                  onChange={(e) => setFormData({ ...formData, otherService: e.target.value })}
                  placeholder={
                    language === 'el' ? 'Περιγράψτε τι χρειάζεστε' : 'Describe what you need'
                  }
                />
              </div>
            )}

            {/* Συμπτώματα */}
            <div className="space-y-2">
              <Label htmlFor="symptoms">{t.booking.symptoms}</Label>
              <Textarea
                id="symptoms"
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                placeholder={
                  language === 'el' ? 'Περιγράψτε τα συμπτώματά σας' : 'Describe your symptoms'
                }
              />
            </div>

            {/* Επείγον */}
            <div className="space-y-2">
              <Label htmlFor="urgency">
                {t.booking.urgency}: {formData.urgency[0]}/10
              </Label>
              <Slider
                id="urgency"
                min={1}
                max={10}
                step={1}
                value={formData.urgency}
                onValueChange={(value) => setFormData({ ...formData, urgency: value })}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{language === 'el' ? 'Όχι επείγον' : 'Not urgent'}</span>
                <span>{language === 'el' ? 'Πολύ επείγον' : 'Very urgent'}</span>
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 mt-6">
              {t.booking.submit}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppointmentDialog;
