// Dados da festa. Os valores padrão são fictícios (versão pública do
// portfólio). Para usar o convite de verdade, crie um arquivo .env.local
// com as variáveis VITE_* do .env.example — ele não vai para o git.

const env = import.meta.env;

const latitude = env.VITE_PARTY_LATITUDE || "-23.550520";
const longitude = env.VITE_PARTY_LONGITUDE || "-46.633308";

export const party = {
  childName: env.VITE_CHILD_NAME || "Caleb",
  age: Number(env.VITE_CHILD_AGE || 2),
  /** Data no formato AAAA-MM-DD. */
  date: env.VITE_PARTY_DATE || "2026-10-24",
  /** Horário no formato HH:MM. */
  time: env.VITE_PARTY_TIME || "19:30",
  whatsappNumber: env.VITE_WHATSAPP_NUMBER || "5511999999999",
  whatsappGroupUrl:
    env.VITE_WHATSAPP_GROUP_URL || "https://chat.whatsapp.com/EXEMPLO-LINK-GRUPO",
  googleMapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
  wazeUrl: `https://www.waze.com/ul?ll=${latitude}%2C${longitude}&navigate=yes`,
};

/** "24/10/2026" a partir de "2026-10-24", sem depender do fuso horário. */
export function formatDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}

/** "sábado" a partir de "2026-10-24". */
export function weekday(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("pt-BR", {
    weekday: "long",
  });
}
