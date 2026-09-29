import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "../data/siteConfig";

const anchorLinks = [
  { label: "Atletas", href: "/#atletas" },
  { label: "Serviços", href: "/#servicos" },
];

const routeLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/orcamento" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsappPrincipal,
    "Olá! Gostaria de saber mais sobre a Primeiro Passe."
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gold-400/20 bg-forest-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
          <span className="gold-gradient-text">Primeiro</span>{" "}
          <span className="text-ink-100">Passe</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {anchorLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink-300 transition hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          {routeLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className="text-sm font-medium text-ink-300 transition hover:text-gold-400"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="gold-gradient-bg inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-forest-950 shadow-lg shadow-gold-500/20 transition hover:brightness-110"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>

        <button
          className="text-ink-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold-400/20 bg-forest-950 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {anchorLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-300 hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
            {routeLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-300 hover:text-gold-400"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="gold-gradient-bg mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-forest-950"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
