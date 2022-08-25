// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer.js";

// About (Page) Component
export default function AboutPage() {
	return (
		<>

			{/* Temporary */}
      <header className="display-flex justify-content-center align-items-center">{/*flex-direction-row*/}
        <div className="container">
          <h1 className="headline">{/*{styles.title}*/}
            About (Page) Component
          </h1>
        </div>
      </header>

			{/* Temporary */}
      <main>
        <div className="container">
					<h1>About (Page) Component</h1>
        </div>
      </main>

			{/* Temporary */}
      <Footer/>

		</>
	)
};