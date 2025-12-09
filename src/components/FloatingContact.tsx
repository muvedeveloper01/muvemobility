import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact Options */}
      <div
        className={cn(
          "flex flex-col gap-3 transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <a
          href="https://wa.me/94817798555"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+94817798555"
          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-200"
          aria-label="Call"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105",
          isOpen && "rotate-180"
        )}
        aria-label="Contact options"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
