/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: '#1d3557',   // Dark Blue for background
				second: '#5fa8d3',       // Dark Gray for secondary sections
				third: '#62b6cb',        // Dark Brown/Plum for cards or other elements
				fourth: '#bee9e8',       // Soft Blue/Gray for accents
				fifth: '#cae9ff	',        // Near white for text or highlights
			},
		},
	},
	plugins: [],
}

