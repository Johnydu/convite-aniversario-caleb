import { useState } from "react";
import PartyScene from "./PartyScene";
import { formatDate, party, weekday } from "./config";

const MAX_GUESTS = 20;

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
      <path d="M8.1 7.4c.3-.6.5-.6.9-.6h.5c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.7 2.6.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.5-.8 2-.6.5-1.4.8-2.4.5-1-.3-2.2-.7-3.8-2.1-1.3-1.2-2.2-2.7-2.5-3.5-.3-.8-.1-2.5.6-3.3Z" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3.5 19c.4-4 2.3-6 5.5-6s5.1 2 5.5 6M14 14c3.7-.7 5.8 1 6.5 4.5" />
    </svg>
  );
}

export default function App() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showMapOptions, setShowMapOptions] = useState(false);

  const ageLabel = party.age === 1 ? "ano" : "anos";
  const ageDiminutive = party.age === 1 ? "aninho" : "aninhos";

  const openPrivateConfirmation = () => {
    const message = [
      `Olá! Confirmo minha presença no aniversário de ${party.age} ${ageLabel} do ${party.childName}! 🎉`,
      "",
      `👨 Adultos: ${adults}`,
      `👧 Crianças: ${children}`,
      "",
      "Estamos animados para comemorar com vocês! 💙",
    ].join("\n");

    const privateMessageUrl = `https://wa.me/${party.whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(privateMessageUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="party-page">
      <div className="sky-pattern" aria-hidden="true">
        <span className="pixel-cloud cloud-one" />
        <span className="pixel-cloud cloud-two" />
      </div>

      <article className="invite-card">
        <header className="game-header">
          <div className="game-label">
            <span className="mini-mushroom" aria-hidden="true" />
            <span>SUPER FESTA</span>
          </div>

          <span className="level-label">
            FASE {String(party.age).padStart(2, "0")}
          </span>
        </header>

        <section className="scene-wrap">
          <PartyScene age={party.age} />

          <h1 className="birthday-title">
            <span>{party.childName} faz</span>
            <strong>
              <i>{party.age}</i> {ageLabel}!
            </strong>
          </h1>
        </section>

        <section className="invite-content">
          <div className="intro-copy">
            <span className="question-block" aria-hidden="true">
              ?
            </span>

            <div>
              <p className="mission-kicker">MISSÃO ESPECIAL DESBLOQUEADA</p>

              <h2 className="intro-title">
                Venha comemorar
                <br />
                com a gente!
              </h2>

              <p className="lead">
                Um dia cheio de aventura, alegria e diversão para celebrar os{" "}
                <strong>
                  {party.age} {ageDiminutive} do {party.childName}.
                </strong>
              </p>
            </div>
          </div>

          <div className="event-schedule" aria-label="Data e horário da festa">
            <div className="schedule-item">
              <span>
                DATA DA FESTA
                <small>{weekday(party.date)}</small>
              </span>
              <strong>
                <time dateTime={party.date}>{formatDate(party.date)}</time>
              </strong>
            </div>

            <div className="schedule-item">
              <span>HORÁRIO</span>
              <strong>
                <time dateTime={party.time}>{party.time}</time>
              </strong>
            </div>
          </div>

          <div className="party-info">
            <div className="fire-flower" aria-hidden="true">
              <span className="flower-head">●</span>
              <span className="flower-stem" />
            </div>

            <div>
              <span className="info-kicker">CHURRASCO NO ESTILO SACOLINHA</span>

              <h2>Traga sua carne e bebida preferidas!</h2>

              <p>
                Vamos curtir juntos esse momento especial com muita conversa
                boa, diversão e comida gostosa.
              </p>
            </div>
          </div>

          <section className="rsvp-box" aria-labelledby="rsvp-title">
            <div className="rsvp-heading">
              <span className="pixel-heart" aria-hidden="true">
                ♥
              </span>

              <div>
                <span>CONFIRME SUA PRESENÇA</span>
                <h2 id="rsvp-title">Quantos jogadores vêm?</h2>
              </div>
            </div>

            <div className="counters">
              <Counter label="Adultos" value={adults} min={1} setValue={setAdults} />
              <Counter label="Crianças" value={children} min={0} setValue={setChildren} />
            </div>
          </section>

          <div className="main-actions">
            <button
              className="game-button whatsapp-button"
              type="button"
              onClick={openPrivateConfirmation}
            >
              <span className="button-icon">
                <WhatsAppIcon />
              </span>

              <span>
                <small>ENVIAR NO PRIVADO</small>
                Confirmar presença
              </span>

              <b aria-hidden="true">›</b>
            </button>

            <a
              className="game-button group-button"
              href={party.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="button-icon">
                <GroupIcon />
              </span>

              <span>
                <small>ENTRAR E PARTICIPAR</small>
                Grupo do aniversário
              </span>

              <b aria-hidden="true">›</b>
            </a>

            <button
              className="game-button location-button"
              type="button"
              aria-expanded={showMapOptions}
              aria-controls="map-options"
              onClick={() => setShowMapOptions((visible) => !visible)}
            >
              <span className="button-icon">
                <PinIcon />
              </span>

              <span>
                <small>COMO CHEGAR</small>
                Abrir localização
              </span>

              <b aria-hidden="true">{showMapOptions ? "−" : "›"}</b>
            </button>

            <div className="map-options" id="map-options" hidden={!showMapOptions}>
              <a href={party.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <strong>Google Maps</strong>
                <span>Abrir rota</span>
              </a>

              <a href={party.wazeUrl} target="_blank" rel="noopener noreferrer">
                <strong>Waze</strong>
                <span>Iniciar navegação</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="card-footer">
          <span className="pixel-star" aria-hidden="true">
            ★
          </span>

          <p>Esperamos vocês para essa aventura!</p>

          <span className="pixel-star" aria-hidden="true">
            ★
          </span>
        </footer>
      </article>

      <p className="page-note">Prepare-se para uma fase inesquecível.</p>
    </main>
  );
}

function Counter({
  label,
  value,
  min,
  setValue,
}: {
  label: string;
  value: number;
  min: number;
  setValue: (value: number) => void;
}) {
  return (
    <div className="counter" role="group" aria-label={label}>
      <span>{label}</span>

      <div>
        <button
          type="button"
          onClick={() => setValue(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Diminuir ${label}`}
        >
          −
        </button>

        <strong aria-live="polite">{value}</strong>

        <button
          type="button"
          onClick={() => setValue(Math.min(MAX_GUESTS, value + 1))}
          disabled={value >= MAX_GUESTS}
          aria-label={`Aumentar ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
