import { useState } from "react";

// Dados fictícios para a versão pública do portfólio
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-23.550520,-46.633308";

const WAZE_URL =
  "https://www.waze.com/ul?ll=-23.550520%2C-46.633308&navigate=yes";

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/EXEMPLO-LINK-GRUPO";

const WHATSAPP_CONTACT_NUMBER = "5511999999999";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function AnimatedPartyScene() {
  return (
    <img
      className="game-scene animated-party-scene"
      src="/super-mario-world.jpg"
      alt="Mario voando por uma fase de Super Mario World"
    />
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

  const openPrivateConfirmation = () => {
    const message = [
      "Olá! Confirmo minha presença no aniversário de 2 anos do Caleb! 🎉",
      "",
      `👨 Adultos: ${adults}`,
      `👧 Crianças: ${children}`,
      "",
      "Estamos animados para comemorar com vocês! 💙",
    ].join("\n");

    const privateMessageUrl =
      `https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;

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

          <span className="level-label">FASE 02</span>
        </header>

        <section className="scene-wrap">
          <AnimatedPartyScene />

          <div className="birthday-title">
            <span>Caleb faz</span>
            <strong>
              <i>2</i> anos!
            </strong>
          </div>
        </section>

        <section className="invite-content">
          <div className="intro-copy">
            <span className="question-block" aria-hidden="true">
              ?
            </span>

            <div>
              <p className="mission-kicker">
                MISSÃO ESPECIAL DESBLOQUEADA
              </p>

              <h1>
                Venha comemorar
                <br />
                com a gente!
              </h1>

              <p className="lead">
                Um dia cheio de aventura, alegria e diversão para celebrar os{" "}
                <strong>2 aninhos do Caleb.</strong>
              </p>
            </div>
          </div>

          <div
            className="event-schedule"
            aria-label="Data e horário da festa"
          >
            <div className="schedule-item">
              <span>DATA DA FESTA</span>
              <strong>24/10</strong>
            </div>

            <div className="schedule-item">
              <span>HORÁRIO</span>
              <strong>19:30</strong>
            </div>
          </div>

          <div className="party-info">
            <div className="fire-flower" aria-hidden="true">
              <span className="flower-head">●</span>
              <span className="flower-stem" />
            </div>

            <div>
              <span className="info-kicker">
                CHURRASCO NO ESTILO SACOLINHA
              </span>

              <h2>Traga sua carne e bebida preferidas!</h2>

              <p>
                Vamos curtir juntos esse momento especial com muita conversa
                boa, diversão e comida gostosa.
              </p>
            </div>
          </div>

          <section className="rsvp-box">
            <div className="rsvp-heading">
              <span className="pixel-heart" aria-hidden="true">
                ♥
              </span>

              <div>
                <span>CONFIRME SUA PRESENÇA</span>
                <h2>Quantos jogadores vêm?</h2>
              </div>
            </div>

            <div className="counters">
              <Counter
                label="Adultos"
                value={adults}
                setValue={setAdults}
              />

              <Counter
                label="Crianças"
                value={children}
                setValue={setChildren}
              />
            </div>
          </section>

          <div className="main-actions">
            <button
              className="game-button whatsapp-button"
              onClick={openPrivateConfirmation}
            >
              <span className="button-icon">
                <WhatsAppIcon />
              </span>

              <span>
                <small>ENVIAR NO PRIVADO</small>
                Confirmar presença
              </span>

              <b>›</b>
            </button>

            <a
              className="game-button group-button"
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span className="button-icon">
                <GroupIcon />
              </span>

              <span>
                <small>ENTRAR E PARTICIPAR</small>
                Grupo do aniversário
              </span>

              <b>›</b>
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

              <b>{showMapOptions ? "−" : "›"}</b>
            </button>

            {showMapOptions && (
              <div className="map-options" id="map-options">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Google Maps</strong>
                  <span>Abrir rota</span>
                </a>

                <a
                  href={WAZE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Waze</strong>
                  <span>Iniciar navegação</span>
                </a>
              </div>
            )}
          </div>
        </section>

        <footer className="card-footer">
          <span className="pixel-star">★</span>

          <p>Esperamos vocês para essa aventura!</p>

          <span className="pixel-star">★</span>
        </footer>
      </article>

      <p className="page-note">
        Prepare-se para uma fase inesquecível.
      </p>
    </main>
  );
}

function Counter({
  label,
  value,
  setValue,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
}) {
  return (
    <div className="counter">
      <span>{label}</span>

      <div>
        <button
          onClick={() => setValue(Math.max(0, value - 1))}
          aria-label={`Diminuir ${label}`}
        >
          −
        </button>

        <strong>{value}</strong>

        <button
          onClick={() => setValue(Math.min(20, value + 1))}
          aria-label={`Aumentar ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}