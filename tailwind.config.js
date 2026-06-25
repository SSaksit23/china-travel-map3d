/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans Thai'", "Inter", "system-ui", "Tahoma", "sans-serif"],
        thai: ["'Noto Sans Thai'", "Inter", "Tahoma", "sans-serif"],
      },
      colors: {
        // Neutral palette matching the sales cards
        paper: "#eef1f5",
        ink: "#1f2937",
        muted: "#6b7280",
        line: "#e5e7eb",
        // Region colours mirror the program cards
        region: {
          north: "#1565c0",
          south: "#c0392b",
          gansu: "#0e7c7b",
          tibet: "#6a3d9a",
        },
        // Difficulty / altitude badges
        diff: {
          easy: "#2e7d32",
          moderate: "#bf8f00",
          high: "#c0392b",
        },
      },
      boxShadow: {
        panel: "0 6px 22px rgba(20, 30, 50, 0.12)",
        card: "0 8px 30px rgba(20, 30, 50, 0.18)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(16px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 0.22s ease-out",
        fadeIn: "fadeIn 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
