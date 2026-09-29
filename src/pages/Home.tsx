import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  MessageCircle,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { athletes, type Categoria, type Posicao } from "../data/athletes";
import { buildWhatsAppLink, siteConfig } from "../data/siteConfig";
import AthleteCard from "../components/AthleteCard";

const posicoes: Posicao[] = ["Goleiro", "Defensor", "Meia", "Atacante"];
const categorias: Categoria[] = [
  "Sub-13",
  "Sub-14",
  "Sub-15",
  "Sub-16",
  "Sub-17",
  "Sub-18",
  "Sub-20",
];

const servicos = [
  {
    icon: Camera,
    titulo: "Produção de Vídeos de Highlights",
    descricao:
      "Vídeos profissionais dos melhores momentos do atleta, prontos para chamar a atenção de olheiros e clubes.",
  },
  {
    icon: Sparkles,
    titulo: "Gestão de Redes Sociais",
    descricao:
      "Construção de uma marca pessoal forte e profissional para o atleta nas principais redes sociais.",
  },
  {
    icon: Users,
    titulo: "Conexão com Clubes",
    descricao:
      "Rede ativa de contatos com clubes e olheiros para abrir portas e oportunidades reais de teste.",
  },
  {
    icon: Scale,
    titulo: "Assessoria aos Pais",
    descricao:
      "Orientação jurídica e de carreira para as famílias, com total transparência em cada etapa do processo.",
  },
];

export default function Home() {
  const [filtroPosicao, setFiltroPosicao] = useState<Posicao | "Todas">("Todas");
  const [filtroCategoria, setFiltroCategoria] = useState<Categoria | "Todas">("Todas");

  const atletasFiltrados = useMemo(() => {
    return athletes.filter((a) => {
      const okPosicao = filtroPosicao === "Todas" || a.posicao === filtroPosicao;
      const okCategoria = filtroCategoria === "Todas" || a.categoria === filtroCategoria;
      return okPosicao && okCategoria;
    });
  }, [filtroPosicao, filtroCategoria]);

  const whatsappHero = buildWhatsAppLink(
    siteConfig.whatsappPrincipal,
    "Olá! Quero saber mais sobre como agenciar um atleta com a Primeiro Passe."
  );

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1800&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/70 via-forest-950/90 to-forest-950" />

        <div className="mx-auto max-w-7xl px-5 py-24 text-center lg:px-8 lg:py-36">
          <span className="card-border card-surface inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-gold-400">
            <ShieldCheck size={14} /> Agência especializada em futebol de base
          </span>

          <h1 className="font-display mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-ink-100 sm:text-5xl lg:text-6xl">
            Transformando Jovens Talentos em{" "}
            <span className="gold-gradient-text">Craques Profissionais</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Damos visibilidade para olheiros, produzimos vídeos profissionais
            e oferecemos assessoria completa de carreira para atletas de
            Sub-13 a Sub-20.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappHero}
              target="_blank"
              rel="noreferrer"
              className="gold-gradient-bg inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-forest-950 shadow-lg shadow-gold-500/20 transition hover:brightness-110"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
            <Link
              to="/orcamento"
              className="card-border card-surface inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-ink-100 transition hover:border-gold-400/50"
            >
              Solicitar Avaliação
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {siteConfig.estatisticas.map((stat) => (
              <div key={stat.label}>
                <p className="font-display gold-gradient-text text-3xl font-extrabold sm:text-4xl">
                  {stat.valor}
                </p>
                <p className="mt-1 text-xs text-ink-300 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VITRINE DE ATLETAS */}
      <section id="atletas" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-ink-100 sm:text-4xl">
            Nossos <span className="gold-gradient-text">Atletas</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink-300">
            Conheça os talentos que estamos revelando para o futebol
            profissional.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            <FiltroBotao
              ativo={filtroPosicao === "Todas"}
              onClick={() => setFiltroPosicao("Todas")}
              label="Todas as Posições"
            />
            {posicoes.map((p) => (
              <FiltroBotao
                key={p}
                ativo={filtroPosicao === p}
                onClick={() => setFiltroPosicao(p)}
                label={p}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <FiltroBotao
              ativo={filtroCategoria === "Todas"}
              onClick={() => setFiltroCategoria("Todas")}
              label="Todas as Categorias"
              variant="outline"
            />
            {categorias.map((c) => (
              <FiltroBotao
                key={c}
                ativo={filtroCategoria === c}
                onClick={() => setFiltroCategoria(c)}
                label={c}
                variant="outline"
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {atletasFiltrados.map((athlete) => (
            <AthleteCard key={athlete.id} athlete={athlete} />
          ))}
        </div>

        {atletasFiltrados.length === 0 && (
          <p className="mt-12 text-center text-ink-300">
            Nenhum atleta encontrado com esses filtros.
          </p>
        )}
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="border-t border-gold-400/10 bg-forest-900/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink-100 sm:text-4xl">
              Nossos <span className="gold-gradient-text">Serviços</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-ink-300">
              Um ecossistema completo para desenvolver a carreira do atleta
              dentro e fora de campo.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicos.map(({ icon: Icon, titulo, descricao }) => (
              <div
                key={titulo}
                className="card-border card-surface rounded-2xl p-6 transition hover:-translate-y-1 hover:border-gold-400/40"
              >
                <div className="gold-gradient-bg inline-flex rounded-xl p-3">
                  <Icon size={22} className="text-forest-950" />
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-ink-100">
                  {titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LGPD / TRANSPARÊNCIA */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
        <div className="card-border card-surface rounded-2xl p-8 sm:p-12">
          <ShieldCheck size={40} className="mx-auto text-gold-400" />
          <h2 className="font-display mt-4 text-2xl font-extrabold text-ink-100 sm:text-3xl">
            Transparência & Proteção ao Menor
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-ink-300 sm:text-base">
            Todos os atletas menores de idade divulgados neste site contam
            com autorização expressa e por escrito de seus responsáveis
            legais, em total conformidade com a Lei Geral de Proteção de
            Dados (LGPD) e com respeito absoluto à imagem e integridade de
            cada jovem talento. Nosso compromisso é com a ética, a segurança
            jurídica e o bem-estar dos atletas em todas as etapas do
            processo.
          </p>
        </div>
      </section>
    </>
  );
}

function FiltroBotao({
  ativo,
  onClick,
  label,
  variant = "solid",
}: {
  ativo: boolean;
  onClick: () => void;
  label: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm";
  if (ativo) {
    return (
      <button onClick={onClick} className={`${base} gold-gradient-bg text-forest-950`}>
        {label}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${base} card-border card-surface text-ink-300 hover:border-gold-400/50 hover:text-gold-400 ${
        variant === "outline" ? "" : ""
      }`}
    >
      {label}
    </button>
  );
}
