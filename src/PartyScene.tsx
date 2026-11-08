// Cena de festa em pixel art, desenhada à mão em SVG (arte original).
// Viewbox 1080 x 549; o título do convite fica sobre o céu, no topo.

const INK = "#171717";

function Cloud({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill="#fff">
      <rect x="24" y="0" width="48" height="16" />
      <rect x="8" y="16" width="104" height="16" />
      <rect x="0" y="32" width="128" height="16" />
      <rect x="56" y="-8" width="32" height="8" />
    </g>
  );
}

function Block({ x, y, kind }: { x: number; y: number; kind: "brick" | "question" }) {
  if (kind === "brick") {
    return (
      <g transform={`translate(${x} ${y})`}>
        <rect width="48" height="48" fill="#c8642a" stroke={INK} strokeWidth="4" />
        <path d="M2 16h44M2 32h44M24 2v14M12 16v16M36 16v16M24 32v14" stroke="#7c3412" strokeWidth="3" />
      </g>
    );
  }
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="scene-block">
        <rect width="48" height="48" fill="#f2a71c" stroke={INK} strokeWidth="4" />
        <rect x="4" y="4" width="40" height="4" fill="#ffd662" />
        <rect x="4" y="40" width="40" height="4" fill="#b96312" />
        <path d="M18 14h12v4h4v8h-8v4h-4v-6h4v-6h-8z M22 34h4v4h-4z" fill="#fff" stroke={INK} strokeWidth="1.5" />
      </g>
    </g>
  );
}

function Coin({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="coin" style={{ animationDelay: `${delay}s` }}>
        <rect x="4" y="0" width="16" height="32" fill="#ffd21f" stroke={INK} strokeWidth="3" />
        <rect x="10" y="6" width="4" height="20" fill="#fff6a8" />
      </g>
    </g>
  );
}

function Balloon({ x, y, color, delay = 0 }: { x: number; y: number; color: string; delay?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="balloon" style={{ animationDelay: `${delay}s` }}>
        <path d="M24 72 q-6 40 6 80" fill="none" stroke={INK} strokeWidth="2" />
        <ellipse cx="24" cy="34" rx="24" ry="32" fill={color} stroke={INK} strokeWidth="4" />
        <rect x="12" y="14" width="6" height="12" fill="#fff" opacity=".6" />
        <path d="M18 66h12l-6 8z" fill={color} stroke={INK} strokeWidth="3" />
      </g>
    </g>
  );
}

function Hero() {
  // Criança de boné azul e chapéu de festa, pulando. Cada "pixel" tem 8px.
  return (
    <g transform="translate(300 330)">
      <g className="hero-character">
        <path d="M28 -30l14 30h-28z" fill="#ffe13c" stroke={INK} strokeWidth="3" />
        <circle cx="28" cy="-34" r="6" fill="#ed292d" stroke={INK} strokeWidth="2" />
        <rect x="8" y="0" width="48" height="16" fill="#2877c7" stroke={INK} strokeWidth="3" />
        <rect x="48" y="10" width="20" height="8" fill="#2877c7" stroke={INK} strokeWidth="3" />
        <rect x="8" y="16" width="48" height="32" fill="#f4c08f" stroke={INK} strokeWidth="3" />
        <rect x="40" y="24" width="6" height="8" fill={INK} />
        <rect x="28" y="38" width="16" height="4" fill="#b8562c" />
        <rect x="0" y="48" width="64" height="40" fill="#23a455" stroke={INK} strokeWidth="3" />
        <rect x="24" y="56" width="16" height="16" fill="#ffe13c" stroke={INK} strokeWidth="2" />
        <rect x="-12" y="40" width="12" height="24" fill="#f4c08f" stroke={INK} strokeWidth="3" />
        <rect x="64" y="52" width="12" height="24" fill="#f4c08f" stroke={INK} strokeWidth="3" />
        <rect x="6" y="88" width="22" height="28" fill="#2b4f8f" stroke={INK} strokeWidth="3" />
        <rect x="36" y="88" width="22" height="28" fill="#2b4f8f" stroke={INK} strokeWidth="3" />
        <rect x="0" y="114" width="30" height="12" fill="#5a2d14" stroke={INK} strokeWidth="3" />
        <rect x="34" y="114" width="30" height="12" fill="#5a2d14" stroke={INK} strokeWidth="3" />
      </g>
    </g>
  );
}

function Cake({ age }: { age: number }) {
  return (
    <g transform="translate(720 300)">
      <rect x="-30" y="150" width="200" height="12" fill="#e9e2cf" stroke={INK} strokeWidth="4" />
      <rect x="-10" y="80" width="160" height="72" fill="#f58cba" stroke={INK} strokeWidth="4" />
      <path d="M-8 96h156" stroke="#fff" strokeWidth="8" strokeDasharray="16 8" />
      <rect x="20" y="30" width="100" height="52" fill="#fff4dc" stroke={INK} strokeWidth="4" />
      <path d="M22 44h96" stroke="#f58cba" strokeWidth="6" strokeDasharray="10 8" />
      <text
        x="70"
        y="22"
        textAnchor="middle"
        fontFamily="'Press Start 2P', monospace"
        fontSize="34"
        fill="#ffe13c"
        stroke={INK}
        strokeWidth="3"
        paintOrder="stroke"
      >
        {age}
      </text>
      <g className="flame">
        <path d="M70 -36c10 10 8 18 0 22c-8-4-10-12 0-22z" fill="#ff8a1f" stroke={INK} strokeWidth="2" />
      </g>
    </g>
  );
}

const FLAGS = ["#ed292d", "#ffe13c", "#2877c7", "#23a455", "#f58cba"];

export default function PartyScene({ age }: { age: number }) {
  return (
    <svg
      className="game-scene"
      viewBox="0 0 1080 549"
      role="img"
      aria-label="Cena de festa em pixel art: uma criança de chapéu de festa pulando ao lado de um bolo com o número 2, balões, moedas e blocos de interrogação."
      shapeRendering="crispEdges"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5fb3f5" />
          <stop offset="1" stopColor="#bfe5fb" />
        </linearGradient>
      </defs>

      <rect width="1080" height="549" fill="url(#sky)" />

      <g opacity=".9">
        <Cloud x={40} y={150} scale={1.1} />
        <Cloud x={880} y={170} />
        <Cloud x={560} y={230} scale={0.6} />
      </g>

      {/* Bandeirinhas */}
      <path d="M0 18 Q540 70 1080 18" fill="none" stroke={INK} strokeWidth="3" />
      {Array.from({ length: 18 }, (_, i) => {
        const x = 15 + i * 60;
        const t = x / 1080;
        const y = 18 + 4 * 26 * t * (1 - t);
        return (
          <path
            key={x}
            d={`M${x - 14} ${y} h28 l-14 26 z`}
            fill={FLAGS[i % FLAGS.length]}
            stroke={INK}
            strokeWidth="3"
          />
        );
      })}

      {/* Morros ao fundo */}
      <ellipse cx="150" cy="470" rx="190" ry="150" fill="#4fae3e" stroke={INK} strokeWidth="5" />
      <ellipse cx="960" cy="470" rx="230" ry="130" fill="#62c04a" stroke={INK} strokeWidth="5" />
      <rect x="90" y="380" width="12" height="20" fill={INK} />
      <rect x="130" y="380" width="12" height="20" fill={INK} />
      <rect x="930" y="390" width="12" height="20" fill={INK} />
      <rect x="970" y="390" width="12" height="20" fill={INK} />

      {/* Blocos e moedas */}
      <Block x={424} y={262} kind="brick" />
      <Block x={472} y={262} kind="question" />
      <Block x={520} y={262} kind="brick" />
      <Block x={568} y={262} kind="question" />
      <Coin x={484} y={214} />
      <Coin x={580} y={214} delay={0.5} />
      <Coin x={650} y={300} delay={1} />

      <Balloon x={60} y={250} color="#ed292d" />
      <Balloon x={110} y={230} color="#2877c7" delay={0.7} />
      <Balloon x={160} y={260} color="#ffe13c" delay={1.4} />

      <Cake age={age} />
      <Hero />

      {/* Chão */}
      <rect x="0" y="462" width="1080" height="16" fill="#77c944" stroke={INK} strokeWidth="5" />
      <rect x="0" y="478" width="1080" height="75" fill="#c8742f" />
      {Array.from({ length: 23 }, (_, i) => (
        <g key={i} stroke="#7c3412" strokeWidth="4">
          <path d={`M${i * 48} 478v34M${i * 48 + 24} 512v40`} />
        </g>
      ))}
      <path d="M0 512h1080" stroke="#7c3412" strokeWidth="4" />

      {/* Confete */}
      {[
        [250, 120, "#ed292d"],
        [700, 110, "#23a455"],
        [820, 260, "#f58cba"],
        [380, 170, "#ffe13c"],
        [980, 120, "#2877c7"],
        [40, 120, "#ffe13c"],
      ].map(([x, y, color]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="10" height="10" fill={color as string} stroke={INK} strokeWidth="2" />
      ))}
    </svg>
  );
}
