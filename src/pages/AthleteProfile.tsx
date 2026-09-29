import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle, Ruler, Weight } from "lucide-react";
import { getAthleteBySlug } from "../data/athletes";
import { buildWhatsAppLink } from "../data/siteConfig";
import { getYoutubeEmbedUrl } from "../lib/youtube";

export default function AthleteProfile() {
  const { slug } = useParams<{ slug: string }>();
  const athlete = slug ? getAthleteBySlug(slug) : undefined;

  if (!athlete) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-ink-100">
          Atleta não encontrado
        </h1>
        <p className="mt-3 text-ink-300">
          O perfil que você procura não existe ou foi removido.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-gold-400 font-semibold"
        >
          <ArrowLeft size={16} /> Voltar para a Home
        </Link>
      </div>
    );
  }

  const embedUrl = getYoutubeEmbedUrl(athlete.videoUrl);
  const whatsappLink = buildWhatsAppLink(
    athlete.whatsappAgente,
    `Olá! Gostaria de falar sobre o atleta ${athlete.nome}.`
  );

  return (
    <>
      <section className="relative">
        <div
          className="h-64 w-full bg-cover bg-center sm:h-80"
          style={{ backgroundImage: `url('${athlete.fotoBanner}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/10" />

        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="relative -mt-24 flex flex-col items-center gap-6 sm:flex-row sm:items-end">
            <img
              src={athlete.foto}
              alt={athlete.nome}
              className="h-40 w-40 rounded-2xl border-4 border-forest-950 object-cover shadow-xl sm:h-48 sm:w-48"
            />
            <div className="text-center sm:text-left">
              <span className="rounded-full bg-forest-900 px-3 py-1 text-xs font-bold text-gold-400">
                {athlete.categoria}
              </span>
              <h1 className="font-display mt-2 text-3xl font-extrabold text-ink-100 sm:text-4xl">
                {athlete.nome}
              </h1>
              <p className="mt-1 text-ink-300">
                {athlete.clube} • {athlete.posicao}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-ink-300 leading-relaxed">{athlete.resumo}</p>

            {embedUrl && (
              <div className="mt-8 overflow-hidden rounded-2xl card-border">
                <div className="aspect-video w-full">
                  <iframe
                    src={embedUrl}
                    title={`Vídeo de melhores momentos de ${athlete.nome}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </div>
            )}

            <div className="mt-10">
              <h2 className="font-display text-xl font-bold text-ink-100">
                Estatísticas Recentes
              </h2>
              <div className="mt-4 overflow-x-auto rounded-2xl card-border">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gold-400/15 bg-forest-900/60 text-gold-400">
                      <th className="px-4 py-3 font-semibold">Competição</th>
                      <th className="px-4 py-3 font-semibold">Jogos</th>
                      <th className="px-4 py-3 font-semibold">Gols</th>
                      <th className="px-4 py-3 font-semibold">Assistências</th>
                    </tr>
                  </thead>
                  <tbody>
                    {athlete.estatisticas.map((stat) => (
                      <tr
                        key={stat.competicao}
                        className="border-b border-gold-400/10 text-ink-300 last:border-0"
                      >
                        <td className="px-4 py-3">{stat.competicao}</td>
                        <td className="px-4 py-3">{stat.jogos}</td>
                        <td className="px-4 py-3">{stat.gols}</td>
                        <td className="px-4 py-3">{stat.assistencias}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <aside>
            <div className="card-border card-surface sticky top-24 rounded-2xl p-6">
              <h2 className="font-display text-lg font-bold text-ink-100">
                Ficha Biométrica
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <FichaItem label="Idade" valor={`${athlete.idade} anos`} />
                <FichaItem label="Pé Dominante" valor={athlete.peDominante} />
                <FichaItem
                  label="Altura"
                  valor={athlete.altura}
                  icon={<Ruler size={15} className="text-gold-400" />}
                />
                <FichaItem
                  label="Peso"
                  valor={athlete.peso}
                  icon={<Weight size={15} className="text-gold-400" />}
                />
                <FichaItem label="Clube Atual" valor={athlete.clube} />
                <FichaItem label="Categoria" valor={athlete.categoria} />
              </dl>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="gold-gradient-bg mt-6 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-forest-950 shadow-lg shadow-gold-500/20 transition hover:brightness-110"
              >
                <MessageCircle size={18} />
                Falar com o Agente
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function FichaItem({
  label,
  valor,
  icon,
}: {
  label: string;
  valor: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b border-gold-400/10 pb-2">
      <span className="flex items-center gap-1.5 text-ink-300">
        {icon}
        {label}
      </span>
      <span className="font-semibold text-ink-100">{valor}</span>
    </div>
  );
}
