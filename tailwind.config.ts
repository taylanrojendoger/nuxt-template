/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      purple: colors.purple
    }
  },
  plugins: [],
}

