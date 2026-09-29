import { Compass, Eye, HeartHandshake } from "lucide-react";

const pilares = [
  {
    icon: Compass,
    titulo: "Missão",
    texto:
      "Revelar e projetar jovens talentos do futebol de base, oferecendo estrutura profissional, visibilidade real perante clubes e olheiros, e suporte completo às famílias durante toda a jornada.",
  },
  {
    icon: Eye,
    titulo: "Visão",
    texto:
      "Ser reconhecida como a agência mais confiável e ética do país na formação de carreiras esportivas, unindo performance, tecnologia e cuidado humano.",
  },
  {
    icon: HeartHandshake,
    titulo: "Compromisso Ético",
    texto:
      "Atuamos com total transparência jurídica, respeito à imagem dos menores de idade e responsabilidade em cada etapa da carreira dos nossos atletas.",
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
      <div className="text-center">
        <h1 className="font-display text-3xl font-extrabold text-ink-100 sm:text-4xl">
          Sobre a <span className="gold-gradient-text">Primeiro Passe</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink-300">
          Somos uma agência esportiva e de marketing digital dedicada
          exclusivamente a jovens atletas de futebol de base, das categorias
          Sub-13 a Sub-20.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {pilares.map(({ icon: Icon, titulo, texto }) => (
          <div
            key={titulo}
            className="card-border card-surface rounded-2xl p-7 transition hover:-translate-y-1 hover:border-gold-400/40"
          >
            <div className="gold-gradient-bg inline-flex rounded-xl p-3">
              <Icon size={22} className="text-forest-950" />
            </div>
            <h2 className="font-display mt-4 text-lg font-bold text-ink-100">
              {titulo}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              {texto}
            </p>
          </div>
        ))}
      </div>

      <div className="card-border card-surface mt-14 rounded-2xl p-8 sm:p-12">
        <h2 className="font-display text-2xl font-bold text-ink-100">
          Nossa História
        </h2>
        <p className="mt-4 leading-relaxed text-ink-300">
          A Primeiro Passe nasceu da paixão por revelar talentos que muitas
          vezes não têm acesso às oportunidades certas. Combinamos produção
          de conteúdo profissional, uma rede ativa de contatos com clubes e
          assessoria jurídica especializada para dar aos atletas — e às suas
          famílias — segurança e direção em cada etapa da carreira. Cada
          "primeiro passe" é o início de uma jornada rumo ao futebol
          profissional.
        </p>
      </div>
    </section>
  );
}
