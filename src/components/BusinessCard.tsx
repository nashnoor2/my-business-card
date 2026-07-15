
import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, MessageSquare, Sun, Moon, GraduationCap, Briefcase, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import data from "@/data.json";

const BusinessCard = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Wait until component is mounted to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${data.contact.phone.replace(/\D/g, '')}`, "_blank");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${data.contact.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${data.contact.phone}`;
  };

  // Don't render theme toggle until mounted to prevent hydration mismatch
  if (!mounted) return null;

  const heroData = data.hero;
  const contactData = data.contact;
  const expertiseData = data.expertise.slice(0, 3);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 relative" style={{ '--theme-color': data.site.themeColor, '--accent-color': data.site.accentColor } as any}>
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
            <AvatarImage src="/lovable-uploads/3ba47a9d-ada2-4926-b0e7-3fdaf4481b9a.png" alt={heroData.fullName} />
            <AvatarFallback>MN</AvatarFallback>
          </Avatar>
        </div>

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-balance">
            {heroData.fullName}
          </h1>
          <p className="text-foreground font-medium text-lg">{heroData.primaryTitle.en}</p>
          <p className="text-sm text-foreground/70 mt-1">{heroData.organisation.name} - {heroData.organisation.position.en}</p>
        </div>

        {/* Professional Summary */}
        <p className="text-foreground/80 text-center mb-8 max-w-xl mx-auto text-balance animate-fade-in-slow text-sm">
          {heroData.biography.en}
        </p>

        {/* Expertise */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {expertiseData.map((item, index) => (
            <div key={index} className="expertise-item">
              <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">{item.title.en}</span>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <button
            onClick={handleEmailClick}
            className="contact-link"
            aria-label={`Email ${contactData.email}`}
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm truncate">{contactData.email}</span>
          </button>
          <button
            onClick={handlePhoneClick}
            className="contact-link"
            aria-label={`Call ${contactData.phone}`}
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm">{contactData.phone}</span>
          </button>
          <div className="contact-link">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm">{contactData.location.en}</span>
          </div>
          <a
            href={data.profiles.find(p => p.id === 'linkedin')?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Visit LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-primary" />
            <span className="text-sm">LinkedIn Profile</span>
          </a>
        </div>

        {/* Additional Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {data.profiles.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs py-2 px-3 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors text-center text-foreground"
              aria-label={`Visit ${profile.name}`}
            >
              {profile.name}
            </a>
          ))}
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

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-foreground/10">
          <p className="text-xs text-foreground/60">{data.footer.tagline.en}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
