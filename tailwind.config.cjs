/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,svelte}"],
	theme: {
		extend: {
			colors: {
				// Design tokens
				primary: "#b4caef", // accent (links, buttons)
				secondary: "#0A1930", // mid background
				tertiary: "#040B1A", // base background
			},
			fontFamily: {
				sans: ["Helvetica Neue", "Helvetica"],
			},
			boxShadow: {
				glow: "0 0 35px rgba(30, 185, 235, 0.25)",
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
