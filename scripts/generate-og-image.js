/* Generates public/og-image.png — 1200x630 social card. Run: node scripts/generate-og-image.js */
const sharp = require("sharp");
const path = require("path");

const W = 1200;
const H = 630;
const NAVY = "#0A192F";
const CORAL = "#e44946";
const CORAL_LIGHT = "#ef6c68";

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0A192F"/>
      <stop offset="60%" stop-color="#0F2444"/>
      <stop offset="100%" stop-color="#0A192F"/>
    </linearGradient>
    <radialGradient id="orbCoral" cx="0.85" cy="0.15" r="0.55">
      <stop offset="0%" stop-color="${CORAL}" stop-opacity="0.45"/>
      <stop offset="60%" stop-color="${CORAL}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${CORAL}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orbBlue" cx="0.1" cy="0.95" r="0.55">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#3B82F6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="textGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${CORAL}"/>
      <stop offset="100%" stop-color="${CORAL_LIGHT}"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#orbCoral)"/>
  <rect width="${W}" height="${H}" fill="url(#orbBlue)"/>

  <!-- Tag pill -->
  <g transform="translate(80, 110)">
    <rect x="0" y="0" rx="20" ry="20" width="270" height="40"
      fill="${CORAL}" fill-opacity="0.12" stroke="${CORAL}" stroke-opacity="0.35" stroke-width="1"/>
    <text x="135" y="26" text-anchor="middle"
      font-family="Inter, Arial, Helvetica, sans-serif" font-size="14"
      font-weight="700" letter-spacing="2" fill="${CORAL}">
      AI-POWERED SOLUTIONS
    </text>
  </g>

  <!-- Headline -->
  <text x="80" y="245"
    font-family="Inter, Arial, Helvetica, sans-serif" font-size="72"
    font-weight="900" fill="white" letter-spacing="-1.5">
    We Build
  </text>
  <text x="80" y="335"
    font-family="Inter, Arial, Helvetica, sans-serif" font-size="72"
    font-weight="900" fill="url(#textGrad)" letter-spacing="-1.5">
    AI Automations
  </text>
  <text x="80" y="425"
    font-family="Inter, Arial, Helvetica, sans-serif" font-size="72"
    font-weight="900" fill="white" letter-spacing="-1.5">
    That Scale Business.
  </text>

  <!-- Subline -->
  <text x="80" y="490"
    font-family="Inter, Arial, Helvetica, sans-serif" font-size="26"
    font-weight="400" fill="rgba(255,255,255,0.6)">
    Automation · Conversational AI · Custom AI &amp; SaaS · Predictive Analytics
  </text>

  <!-- Brand lockup -->
  <g transform="translate(80, 555)">
    <circle cx="22" cy="22" r="22" fill="${CORAL}"/>
    <text x="22" y="30" text-anchor="middle"
      font-family="Inter, Arial, Helvetica, sans-serif" font-size="22"
      font-weight="900" fill="white">C</text>
    <text x="60" y="30"
      font-family="Inter, Arial, Helvetica, sans-serif" font-size="28"
      font-weight="800" fill="white" letter-spacing="-0.5">
      Codilated
    </text>
    <text x="60" y="55"
      font-family="Inter, Arial, Helvetica, sans-serif" font-size="14"
      font-weight="500" fill="rgba(255,255,255,0.45)" letter-spacing="1">
      codilated.com
    </text>
  </g>

  <!-- Decorative corner mark -->
  <g transform="translate(${W - 280}, ${H - 280})" opacity="0.85">
    <circle cx="140" cy="140" r="135" fill="none" stroke="${CORAL}" stroke-opacity="0.18" stroke-width="2"/>
    <circle cx="140" cy="140" r="100" fill="none" stroke="${CORAL}" stroke-opacity="0.28" stroke-width="2"/>
    <circle cx="140" cy="140" r="65" fill="none" stroke="${CORAL}" stroke-opacity="0.45" stroke-width="2"/>
    <circle cx="140" cy="140" r="14" fill="${CORAL}"/>
  </g>
</svg>
`;

const outPath = path.resolve(__dirname, "..", "public", "og-image.png");

sharp(Buffer.from(svg))
  .png({ quality: 92, compressionLevel: 9 })
  .toFile(outPath)
  .then((info) => {
    console.log(`Wrote ${outPath} (${info.width}x${info.height}, ${info.size} bytes)`);
  })
  .catch((err) => {
    console.error("Failed to generate OG image:", err);
    process.exit(1);
  });
