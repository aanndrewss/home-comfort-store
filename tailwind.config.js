const primaryColor = '#417A82'
const lightPrimaryColor = '#E3F6F5'
const primaryBtnColor = '#B84C74'
const outlineColor = '#052E4C'
const footerColor = '#262626'
const hoverSecondary = '#d9d9d9'
const hoverPrimary = '#933c5c'

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: primaryColor,
				lightPrimary: lightPrimaryColor,
				primaryBtn: primaryBtnColor,
				outlineColor,
				footerColor,
				hoverSecondary,
				hoverPrimary
			}
		}
	},
	plugins: []
}
