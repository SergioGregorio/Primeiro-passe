import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "../data/siteConfig";
import { InstagramIcon, YoutubeIcon } from "./BrandIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsappPrincipal,
    "Olá! Gostaria de saber mais sobre a Primeiro Passe."
  );

  return (
    <footer className="border-t border-gold-400/20 bg-forest-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-xl font-extrabold">
            <span className="gold-gradient-text">Primeiro</span> Passe
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">
            Agência esportiva e de marketing digital dedicada a revelar e
            projetar jovens talentos do futebol de base.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-300">
            <li><Link to="/" className="hover:text-gold-400">Home</Link></li>
            <li><Link to="/sobre" className="hover:text-gold-400">Sobre Nós</Link></li>
            <li><Link to="/orcamento" className="hover:text-gold-400">Avaliação / Orçamento</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
              {siteConfig.endereco}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-gold-400" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-gold-400" />
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-gold-400">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
            Redes Sociais
          </h3>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.redesSociais.instagram}
              target="_blank"
              rel="noreferrer"
              className="card-border card-surface rounded-full p-2.5 transition hover:border-gold-400/50"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} className="text-gold-400" />
            </a>
            <a
              href={siteConfig.redesSociais.youtube}
              target="_blank"
              rel="noreferrer"
              className="card-border card-surface rounded-full p-2.5 transition hover:border-gold-400/50"
              aria-label="YouTube"
            >
              <YoutubeIcon size={18} className="text-gold-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-400/10 px-5 py-6 text-center text-xs text-ink-300 lg:px-8">
        © {year} {siteConfig.nomeAgencia}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
