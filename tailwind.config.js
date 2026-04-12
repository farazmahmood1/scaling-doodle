/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy:   "#0A192F",
        coral:  "#e44946",
        sky:    "#D0EAF5",
        "navy-light": "#112240",
        "navy-mid":   "#0D2137",
        "coral-dark": "#c83c38",
        "coral-light":"#ef6c68",
        "sky-dark":   "#A8D4EC",
      },
      fontFamily: {
        sans:  ["Inter", "ui-sans-serif", "system-ui"],
        mono:  ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0A192F 0%, #0D2137 50%, #112240 100%)",
        "coral-gradient":
          "linear-gradient(135deg, #e44946 0%, #ef6c68 100%)",
        "sky-gradient":
          "linear-gradient(135deg, #D0EAF5 0%, #A8D4EC 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        glass:  "0 8px 32px rgba(0,0,0,0.3)",
        coral:  "0 8px 32px rgba(228,73,70,0.3)",
        glow:   "0 0 40px rgba(228,73,70,0.15)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.4)",
      },
      animation: {
        "float":        "float 6s ease-in-out infinite",
        "pulse-slow":   "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow":    "spin 20s linear infinite",
        "gradient-x":  "gradient-x 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":       { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
