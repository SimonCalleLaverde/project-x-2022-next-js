// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer.js";

// TEMPORARY
const blogPostsArray = ["blog-post-1", "blog-post-2", "blog-post-3"]//"http://localhost:3000/blog_posts.json"

// Blog (Page) Component
export default function BlogPage() {
	return (
		<>

			{/* Temporary */}
      <header className="display-flex justify-content-center align-items-center">{/*flex-direction-row*/}
        <div className="container">
          <h1 className="title">{/*{styles.title}*/}
            Blog (Page) Component
          </h1>
        </div>
      </header>

      {/* Temporary */}
      <main>
        <div className="container">
					<h1>Blog (Page) Component</h1>




					<strong>Articles List (Temporary)</strong>

					<ul>
						{/* List will be generated dynamically by maping an array of data (JSON files temporary, later GraphCMS) into JSX elements */}
						{blogPostsArray.map(item => (
							<li key={item}>
								<Link href="/blog/blog-post-dynamic">
									Blog Post Dynamic
								</Link>
							</li>
						))}
					</ul>




        </div>
      </main>

			{/* Temporary */}
      <Footer/>

		</>
	)
};