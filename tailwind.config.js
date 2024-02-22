/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              fontWeight: "400",
            },
            h1: {
              fontWeight: "700",
              marginBottom: "0.2em",
            },
            h2: {
              fontWeight: "700",
              marginTop: "0",
              marginBottom: "0.2em",
            },
            blockquote: {
              marginBottom: "0.2em",
            },
            pre: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
