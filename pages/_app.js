// Imports
// Adding "globals.scss" (Global Or General) CSS (Can Only Within This '_app.js') // Will Change For "main.scss" & The Below
import "../styles/globals.scss"//import "../styles/main.scss"
//import "../styles/mixins.scss"
//import "../styles/fonts.scss"
//import "../styles/theme.scss"
//import "../styles/tablet_and_desktop.scss"

// Main Entry Point Into The App (Every Individual Page Will Start From This Template)
export default function ProjectX2022NextJS({ Component, pageProps }) {
  return <Component {...pageProps}/>
};