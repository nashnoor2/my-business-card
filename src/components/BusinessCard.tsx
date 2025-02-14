
import React from "react";
import { Mail, Phone, MapPin, Linkedin, MessageSquare, Sun, Moon, AccessibilityIcon, Eye, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

const BusinessCard = () => {
  const { theme, setTheme } = useTheme();

  const handleWhatsApp = () => {
    window.open("https://wa.me/60109636009", "_blank");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 relative">
      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>

      <div className="glass-card w-full max-w-2xl p-8 animate-fade-in">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <Avatar className="w-32 h-32 border-4 border-white/50 dark:border-white/10 shadow-lg">
            <AvatarImage src="/lovable-uploads/3ba47a9d-ada2-4926-b0e7-3fdaf4481b9a.png" alt="Muhammad Nasrul Mohamed Noor" />
            <AvatarFallback>MN</AvatarFallback>
          </Avatar>
        </div>

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-balance">
            Muhammad Nasrul Mohamed Noor
          </h1>
          <p className="text-primary font-medium">Future-Ready Social Scientist</p>
        </div>

        {/* Professional Summary */}
        <p className="text-foreground/80 text-center mb-8 max-w-xl mx-auto text-balance animate-fade-in-slow">
          "Transforming data into actionable insights and championing accessibility through innovative technology and social advocacy."
        </p>

        {/* Expertise */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="expertise-item">
            <AccessibilityIcon className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm">Disability Advocacy</span>
          </div>
          <div className="expertise-item">
            <Eye className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm">Accessibility Consultant</span>
          </div>
          <div className="expertise-item">
            <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm">Sustainable Event Planning</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a
            href="mailto:me@nasrulnoor.my"
            className="contact-link"
            aria-label="Email me@nasrulnoor.my"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm">me@nasrulnoor.my</span>
          </a>
          <a
            href="tel:+60109636009"
            className="contact-link"
            aria-label="Call +60109636009"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm">+60109636009</span>
          </a>
          <div className="contact-link">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm">Gombak, Kuala Lumpur</span>
          </div>
          <a
            href="https://www.linkedin.com/in/muhammad-nasrul-mohamed-noor/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Visit LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-primary" />
            <span className="text-sm">LinkedIn Profile</span>
          </a>
        </div>

        {/* WhatsApp CTA Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleWhatsApp}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <MessageSquare className="mr-2" />
            WhatsApp Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
