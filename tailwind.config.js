/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0d1b42', // RS Solar Dark Blue
                accent: '#e62e00', // RS Solar Red
                geonBlue: '#0d1b42', // Keep for compatibility but map to new blue
                rsBlue: '#0d1b42',
                rsRed: '#9c0404ff',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
