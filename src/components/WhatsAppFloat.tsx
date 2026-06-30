import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=Hi%20Paul%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3"
      aria-label="WhatsApp me now"
    >
      <span className="hidden group-hover:inline-flex rounded-full bg-foreground text-background px-3 py-2 text-xs font-medium shadow-card">
        Usually replies within 1 hour
      </span>
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant pulse-ring">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
