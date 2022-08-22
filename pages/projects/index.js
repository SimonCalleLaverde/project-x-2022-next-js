// Imports
import Head from "next/head";
import Link from "next/link";

// Projects (Page) Component
export default function ProjectsPage() {
	return (
		<>
			<h1>Projects (Page) Component</h1>
			
			<strong>Cars List Temporary 🚗 🚙</strong>

			<ul>



				{/* List will be generated dynamically by maping an array of data (JSON files temporary, later GraphCMS) into JSX elements */}
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
		</>
	)
};