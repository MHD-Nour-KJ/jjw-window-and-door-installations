/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0284c7',        // Ocean Blue (headings, logos, top bar accent)
          blueDark: '#0369a1',    // Darker blue
          blueTop: '#0071ba',     // Top utility bar blue matching reference
          blueLight: '#f0f9ff',   // Sky tint for expanded accordion items
          blueBorder: '#bae6fd',  // Sky border
          coral: '#f26a36',       // Vibrant coral orange for CTA buttons & checks
          coralHover: '#ea580c',  // Deep coral hover
          footerBg: '#d8ebf9',    // Soft ice blue footer background
          amber: '#f59e0b',       // Star ratings
        },
        ink: {
          DEFAULT: '#1e293b',     // Deep slate text
          muted: '#64748b',       // Subtitle and body text
          light: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'whisper': '0 4px 20px -2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
