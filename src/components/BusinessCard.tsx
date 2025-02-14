
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const BusinessCard = () => {
  const handleContact = () => {
    window.location.href = "mailto:me@nasrulnoor.my";
  };

  const handlePortfolio = () => {
    window.open("https://bolehspace.com", "_blank");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8">
      <div className="glass-card w-full max-w-2xl p-8 animate-fade-in">
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleContact}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Contact Me
          </Button>
          <Button
            onClick={handlePortfolio}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
