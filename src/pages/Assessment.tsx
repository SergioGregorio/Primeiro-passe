import { type FormEvent, useState } from "react";
import { ClipboardCheck, Send } from "lucide-react";
import { buildWhatsAppLink, siteConfig } from "../data/siteConfig";
import type { Posicao } from "../data/athletes";

const posicoes: Posicao[] = ["Goleiro", "Defensor", "Meia", "Atacante"];

export default function Assessment() {
  const [form, setForm] = useState({
    responsavel: "",
    whatsapp: "",
    atleta: "",
    idade: "",
    posicao: "" as Posicao | "",
    clube: "",
  });

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const mensagem = [
      "Olá! Gostaria de solicitar uma avaliação para um atleta.",
      "",
      `*Responsável Legal:* ${form.responsavel}`,
      `*WhatsApp de Contato:* ${form.whatsapp}`,
      `*Nome do Atleta:* ${form.atleta}`,
      `*Idade do Atleta:* ${form.idade}`,
      `*Posição:* ${form.posicao}`,
      `*Clube/Escolinha Atual:* ${form.clube}`,
    ].join("\n");

    const link = buildWhatsAppLink(siteConfig.whatsappPrincipal, mensagem);
    window.open(link, "_blank");
  }

  return (
    <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <div className="text-center">
        <ClipboardCheck size={40} className="mx-auto text-gold-400" />
        <h1 className="font-display mt-4 text-3xl font-extrabold text-ink-100 sm:text-4xl">
          Avaliação & <span className="gold-gradient-text">Orçamento</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-300">
          Preencha os dados abaixo e falaremos com você diretamente pelo
          WhatsApp para dar os próximos passos.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="card-border card-surface mt-10 space-y-5 rounded-2xl p-6 sm:p-8"
      >
        <Campo
          label="Nome do Responsável Legal"
          required
          value={form.responsavel}
          onChange={(v) => handleChange("responsavel", v)}
          placeholder="Ex: Maria da Silva"
        />

        <Campo
          label="WhatsApp de Contato"
          required
          type="tel"
          value={form.whatsapp}
          onChange={(v) => handleChange("whatsapp", v)}
          placeholder="Ex: (11) 99999-9999"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Campo
            label="Nome do Atleta"
            required
            value={form.atleta}
            onChange={(v) => handleChange("atleta", v)}
            placeholder="Ex: João Pedro"
          />
          <Campo
            label="Idade do Atleta"
            required
            type="number"
            value={form.idade}
            onChange={(v) => handleChange("idade", v)}
            placeholder="Ex: 15"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink-100">
            Posição <span className="text-gold-400">*</span>
          </label>
          <select
            required
            value={form.posicao}
            onChange={(e) => handleChange("posicao", e.target.value)}
            className="w-full rounded-xl border border-gold-400/20 bg-forest-950 px-4 py-3 text-sm text-ink-100 outline-none focus:border-gold-400/60"
          >
            <option value="" disabled>
              Selecione a posição
            </option>
            {posicoes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <Campo
          label="Clube/Escolinha Atual"
          value={form.clube}
          onChange={(v) => handleChange("clube", v)}
          placeholder="Ex: EC São Bernardo"
        />

        <button
          type="submit"
          className="gold-gradient-bg flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-forest-950 shadow-lg shadow-gold-500/20 transition hover:brightness-110"
        >
          <Send size={18} />
          Enviar pelo WhatsApp
        </button>
      </form>
    </section>
  );
}

function Campo({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink-100">
        {label} {required && <span className="text-gold-400">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gold-400/20 bg-forest-950 px-4 py-3 text-sm text-ink-100 outline-none placeholder:text-ink-300/50 focus:border-gold-400/60"
      />
    </div>
  );
}
