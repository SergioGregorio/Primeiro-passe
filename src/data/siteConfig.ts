// ============================================================================
// CONFIGURAÇÃO GERAL DO SITE — "PRIMEIRO PASSE"
// ----------------------------------------------------------------------------
// Este é o único arquivo que você precisa editar para atualizar as
// informações gerais da agência (WhatsApp, endereço, redes sociais, etc).
// Basta trocar o texto entre aspas (" ") pelo valor correto.
// ============================================================================

export const siteConfig = {
  nomeAgencia: "Primeiro Passe",
  slogan: "Transformando Jovens Talentos em Craques Profissionais",

  // Número de WhatsApp principal da agência (com código do país e DDD, só números).
  // Exemplo: 55 (Brasil) + 11 (DDD) + número = 5511999999999
  whatsappPrincipal: "5511999999999",

  email: "contato@primeiropasse.com.br",

  endereco: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",

  redesSociais: {
    instagram: "https://instagram.com/primeiropasse",
    youtube: "https://youtube.com/@primeiropasse",
    tiktok: "https://tiktok.com/@primeiropasse",
  },

  // Estatísticas exibidas na página inicial (prova social).
  estatisticas: [
    { valor: "120+", label: "Atletas Agenciados" },
    { valor: "35", label: "Parceiros em Clubes" },
    { valor: "100%", label: "Segurança Jurídica" },
    { valor: "8", label: "Anos de Experiência" },
  ],
};

// Monta uma URL do WhatsApp com mensagem pré-formatada.
export function buildWhatsAppLink(numero: string, mensagem: string): string {
  const numeroLimpo = numero.replace(/\D/g, "");
  return `https://wa.me/${numeroLimpo}?text=${encodeURIComponent(mensagem)}`;
}
