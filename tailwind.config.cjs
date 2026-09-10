/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,svelte}"],
	theme: {
		extend: {
			colors: {
				primary: "#9c4028",
				secondary: "#ebe1dc",
				tertiary: "#f9f7f1",
			},
			fontFamily: {
				sans: ["Google Sans Flex", "Inter", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
};
