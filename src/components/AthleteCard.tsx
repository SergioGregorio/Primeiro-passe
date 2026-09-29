import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Athlete } from "../data/athletes";

export default function AthleteCard({ athlete }: { athlete: Athlete }) {
  return (
    <div className="card-border card-surface group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-xl hover:shadow-gold-500/10">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={athlete.foto}
          alt={athlete.nome}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full bg-forest-950/80 px-3 py-1 text-xs font-bold text-gold-400 backdrop-blur">
          {athlete.categoria}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-ink-100">{athlete.nome}</h3>
        <p className="mt-1 text-sm text-ink-300">{athlete.clube}</p>
        <p className="mt-1 text-sm font-semibold text-gold-400">{athlete.posicao}</p>

        <Link
          to={`/atleta/${athlete.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold-400 transition group-hover:gap-2.5"
        >
          Ver Perfil Completo
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
