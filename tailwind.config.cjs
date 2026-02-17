/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,svelte}"],
	theme: {
		extend: {
			colors: {
				night: "#040B1A",
				midnight: "#0A1930",
				electric: "#b4caef",
			},
			fontFamily: {
				sans: [
					"Inter",
					"Helvetica Neue",
					"Helvetica",
					"Arial",
					"sans-serif",
				],
			},
			boxShadow: {
				glow: "0 0 35px rgba(30, 215, 96, 0.25)",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-8px)" },
				},
			},
			animation: {
				float: "float 6s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
