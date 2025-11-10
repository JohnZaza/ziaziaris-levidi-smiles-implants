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
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    preferredDates: ''
  });

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setShowConfirm(true);
    } else {
      setShowConfirm(false);
      setShowForm(false);
      onOpenChange(false);
    }
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    setShowForm(true);
    onOpenChange(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.phone.trim()) {
      toast({
        title: language === 'el' ? 'Σφάλμα' : 'Error',
        description: language === 'el' 
          ? 'Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία' 
          : 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    // Show success message
    toast({
      title: t.booking.successTitle,
      description: t.booking.successMessage,
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      preferredDates: ''
    });
    
    setShowForm(false);
    onOpenChange(false);
  };

  return (
    <>
      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.booking.confirmTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.booking.confirmMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => handleOpenChange(false)}>
              {t.booking.cancelButton}
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm}>
              {t.booking.confirmButton}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={showForm} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {t.booking.formTitle}
            </DialogTitle>
            <DialogDescription>
              {t.booking.formDescription}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t.booking.firstName} *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t.booking.lastName} *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">{t.booking.phone} *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
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

            <div className="space-y-2">
              <Label htmlFor="address">{t.booking.address}</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredDates">{t.booking.preferredDates}</Label>
              <Textarea
                id="preferredDates"
                value={formData.preferredDates}
                onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                placeholder={language === 'el' 
                  ? 'π.χ. Δευτέρα-Τετάρτη, πρωινές ώρες' 
                  : 'e.g., Monday-Wednesday, morning hours'}
                rows={3}
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              {t.booking.submit}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppointmentDialog;
