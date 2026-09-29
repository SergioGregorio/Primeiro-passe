// ============================================================================
// CADASTRO DE ATLETAS — "PRIMEIRO PASSE"
// ----------------------------------------------------------------------------
// COMO CADASTRAR UM NOVO ATLETA (sem programar):
//   1. Copie um bloco inteiro, de "{" até "}," de um atleta já existente.
//   2. Cole no final da lista, antes do "];" que fecha o arquivo.
//   3. Troque os textos e números pelos dados do novo atleta.
//   4. Troque "slug" por um nome único, sem espaços ou acentos (ex: "joao-silva").
//   5. Salve o arquivo. Pronto! O novo atleta já aparece no site.
//
// DICA - FOTOS E VÍDEOS:
//   - "foto": cole o link direto de uma imagem (você pode hospedar fotos
//     gratuitamente em serviços como https://imgur.com ou usar as fotos
//     dentro da pasta "public/atletas/" do projeto, referenciando como
//     "/atletas/nome-da-foto.jpg").
//   - "videoUrl": cole o link normal de um vídeo do YouTube
//     (ex: https://www.youtube.com/watch?v=XXXXXXXXXXX).
// ============================================================================

export type Posicao = "Goleiro" | "Defensor" | "Meia" | "Atacante";

export type Categoria =
  | "Sub-13"
  | "Sub-14"
  | "Sub-15"
  | "Sub-16"
  | "Sub-17"
  | "Sub-18"
  | "Sub-20";

export interface EstatisticaTemporada {
  competicao: string;
  jogos: number;
  gols: number;
  assistencias: number;
}

export interface Athlete {
  id: string;
  slug: string;
  nome: string;
  foto: string;
  fotoBanner: string;
  clube: string;
  posicao: Posicao;
  categoria: Categoria;
  idade: number;
  peDominante: "Direito" | "Esquerdo" | "Ambidestro";
  altura: string;
  peso: string;
  videoUrl: string;
  whatsappAgente: string;
  destaque?: boolean;
  resumo: string;
  estatisticas: EstatisticaTemporada[];
}

export const athletes: Athlete[] = [
  {
    id: "1",
    slug: "gabriel-santos",
    nome: "Gabriel Santos",
    foto: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop",
    fotoBanner: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop",
    clube: "EC São Bernardo",
    posicao: "Atacante",
    categoria: "Sub-17",
    idade: 16,
    peDominante: "Direito",
    altura: "1,78m",
    peso: "68kg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    whatsappAgente: "5511999999999",
    destaque: true,
    resumo:
      "Atacante veloz e decisivo, artilheiro do campeonato estadual Sub-17 com grande capacidade de finalização.",
    estatisticas: [
      { competicao: "Campeonato Paulista Sub-17", jogos: 18, gols: 14, assistencias: 5 },
      { competicao: "Copa São Paulo (Base)", jogos: 6, gols: 3, assistencias: 2 },
    ],
  },
  {
    id: "2",
    slug: "lucas-oliveira",
    nome: "Lucas Oliveira",
    foto: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop",
    fotoBanner: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1600&auto=format&fit=crop",
    clube: "Guarani FC",
    posicao: "Meia",
    categoria: "Sub-18",
    idade: 17,
    peDominante: "Esquerdo",
    altura: "1,72m",
    peso: "65kg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    whatsappAgente: "5511999999999",
    destaque: true,
    resumo:
      "Meio-campista criativo, com excelente visão de jogo e média de 1 assistência por partida na última temporada.",
    estatisticas: [
      { competicao: "Campeonato Paulista Sub-18", jogos: 20, gols: 6, assistencias: 12 },
    ],
  },
  {
    id: "3",
    slug: "rafael-costa",
    nome: "Rafael Costa",
    foto: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop",
    fotoBanner: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop",
    clube: "Palmeirinhas FC",
    posicao: "Defensor",
    categoria: "Sub-16",
    idade: 15,
    peDominante: "Direito",
    altura: "1,80m",
    peso: "70kg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    whatsappAgente: "5511999999999",
    destaque: true,
    resumo:
      "Zagueiro forte na marcação e no jogo aéreo, considerado uma das maiores promessas defensivas da categoria.",
    estatisticas: [
      { competicao: "Campeonato Paulista Sub-16", jogos: 16, gols: 2, assistencias: 1 },
    ],
  },
  {
    id: "4",
    slug: "matheus-almeida",
    nome: "Matheus Almeida",
    foto: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=800&auto=format&fit=crop",
    fotoBanner: "https://images.unsplash.com/photo-1522778034537-20a2486be803?q=80&w=1600&auto=format&fit=crop",
    clube: "Atlético Jardim",
    posicao: "Goleiro",
    categoria: "Sub-15",
    idade: 14,
    peDominante: "Direito",
    altura: "1,76m",
    peso: "62kg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    whatsappAgente: "5511999999999",
    destaque: false,
    resumo:
      "Goleiro com ótima colocação e reflexos, referência de segurança para a defesa da equipe.",
    estatisticas: [
      { competicao: "Campeonato Paulista Sub-15", jogos: 15, gols: 0, assistencias: 0 },
    ],
  },
  {
    id: "5",
    slug: "pedro-henrique",
    nome: "Pedro Henrique",
    foto: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=800&auto=format&fit=crop",
    fotoBanner: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?q=80&w=1600&auto=format&fit=crop",
    clube: "Real Norte FC",
    posicao: "Atacante",
    categoria: "Sub-20",
    idade: 19,
    peDominante: "Ambidestro",
    altura: "1,82m",
    peso: "75kg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    whatsappAgente: "5511999999999",
    destaque: false,
    resumo:
      "Centroavante de referência, forte no jogo aéreo e com ótima finalização com as duas pernas.",
    estatisticas: [
      { competicao: "Campeonato Brasileiro Sub-20", jogos: 22, gols: 17, assistencias: 4 },
    ],
  },
  {
    id: "6",
    slug: "bruno-ferreira",
    nome: "Bruno Ferreira",
    foto: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=800&auto=format&fit=crop",
    fotoBanner: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
    clube: "Vila Esperança EC",
    posicao: "Meia",
    categoria: "Sub-13",
    idade: 12,
    peDominante: "Direito",
    altura: "1,55m",
    peso: "45kg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    whatsappAgente: "5511999999999",
    destaque: false,
    resumo:
      "Volante com excelente marcação e capacidade de distribuição de jogo para a categoria de base.",
    estatisticas: [
      { competicao: "Copa de Base Regional Sub-13", jogos: 10, gols: 1, assistencias: 3 },
    ],
  },
];

export function getAthleteBySlug(slug: string): Athlete | undefined {
  return athletes.find((a) => a.slug === slug);
}
