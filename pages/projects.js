// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/projects/Header.js";
import Footer from "../components/Footer.js";




// Projects (Page) Component
export default function ProjectsPage() {
	return (
		<>

			{/* Temporary */}
      <Header/>

      {/* Temporary */}
      <main>
        <div className="container">
					<h1>Projects (Page) Component</h1>




					<strong>Cars List (Temporary) 🚗 🚙</strong>

					{/* List will be generated dynamically by maping an array of data (JSON files temporary, later GraphCMS) into JSX elements */}
					<ul>
						<li>
							<Link href="/projects/tesla">
								Tesla Car
							</Link>
						</li>

						<li>
							<Link href="/projects/ford">
								Ford Car
							</Link>
						</li>

						<li>
							<Link href="/projects/lambo">
								Lambo Car
							</Link>
						</li>
					</ul>




        </div>
      </main>

			{/* Temporary */}
      <Footer/>

		</>
	)
};