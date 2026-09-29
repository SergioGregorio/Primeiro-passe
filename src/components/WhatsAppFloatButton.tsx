import { MessageCircle } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "../data/siteConfig";

export default function WhatsAppFloatButton() {
  const link = buildWhatsAppLink(
    siteConfig.whatsappPrincipal,
    "Olá! Gostaria de saber mais sobre a Primeiro Passe."
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-110"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  );
}
