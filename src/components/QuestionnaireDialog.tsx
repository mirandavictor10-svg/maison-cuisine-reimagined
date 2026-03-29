import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import Magnetic from "./Magnetic";

interface QuestionnaireDialogProps {
  children: React.ReactNode;
}

const QuestionnaireDialog = ({ children }: QuestionnaireDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    venue: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventDate: "",
      guestCount: "",
      venue: "",
      eventType: "",
      message: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border/40">
        <DialogHeader className="text-center pb-8">
          <DialogTitle className="heading-section text-foreground mb-4">
            Begin Your <br /> <span className="italic">Journey</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground body-elegant">
            Share your vision with us and let's create something extraordinary together.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label htmlFor="firstName" className="text-[10px] tracking-[0.2em] uppercase">First Name *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-transparent border-0 border-b border-border/40 rounded-none focus:border-primary px-0 h-10 transition-all duration-500"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="lastName" className="text-[10px] tracking-[0.2em] uppercase">Last Name *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-transparent border-0 border-b border-border/40 rounded-none focus:border-primary px-0 h-10 transition-all duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-0 border-b border-border/40 rounded-none focus:border-primary px-0 h-10 transition-all duration-500"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-transparent border-0 border-b border-border/40 rounded-none focus:border-primary px-0 h-10 transition-all duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label htmlFor="eventDate" className="text-[10px] tracking-[0.2em] uppercase">Preferred Event Date</Label>
              <Input
                id="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="bg-transparent border-0 border-b border-border/40 rounded-none focus:border-primary px-0 h-10 transition-all duration-500"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="guestCount" className="text-[10px] tracking-[0.2em] uppercase">Estimated Guest Count</Label>
              <Select
                value={formData.guestCount}
                onValueChange={(value) => setFormData({ ...formData, guestCount: value })}
              >
                <SelectTrigger className="bg-transparent border-0 border-b border-border/40 rounded-none focus:ring-0 px-0 h-10 transition-all duration-500">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border/40">
                  <SelectItem value="under-50">Under 50</SelectItem>
                  <SelectItem value="50-100">50 - 100</SelectItem>
                  <SelectItem value="100-200">100 - 200</SelectItem>
                  <SelectItem value="200-300">200 - 300</SelectItem>
                  <SelectItem value="300+">300+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label htmlFor="eventType" className="text-[10px] tracking-[0.2em] uppercase">Event Type</Label>
              <Select
                value={formData.eventType}
                onValueChange={(value) => setFormData({ ...formData, eventType: value })}
              >
                <SelectTrigger className="bg-transparent border-0 border-b border-border/40 rounded-none focus:ring-0 px-0 h-10 transition-all duration-500">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border/40">
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="rehearsal-dinner">Rehearsal Dinner</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="private">Private Celebration</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label htmlFor="venue" className="text-[10px] tracking-[0.2em] uppercase">Venue (if known)</Label>
              <Input
                id="venue"
                value={formData.venue}
                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                placeholder="Venue name or location"
                className="bg-transparent border-0 border-b border-border/40 rounded-none focus:border-primary px-0 h-10 transition-all duration-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase">Tell us about your vision</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Share details about your dream event..."
              className="min-h-[100px] bg-transparent border-0 border-b border-border/40 rounded-none focus:border-primary px-0 h-12 transition-all duration-500 resize-none pt-4"
            />
          </div>

          <div className="pt-8 flex justify-center">
            <Magnetic>
              <button
                type="submit"
                className="btn-elegant min-w-[300px]"
              >
                Submit Questionnaire
              </button>
            </Magnetic>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionnaireDialog;
