// Imports
//import { Fragment } from "react";//Don't think we need this import
import Link from "next/link";

// Blog (Page) Component
export default function BlogPage() {
	// "<React.Fragment></React.Fragment>" could have keys, only difference with "<></>" which can't. Not sure "<Fragment></Fragment>". But is irrelevant I think, as I would map using a <li></li>, <tr></tr>, or so
	return (
		<>
			<h1>Blog (Page) Component</h1>

			<strong>Blog Post Articles</strong>

			{/* List will be generated dynamically by maping an array of data into JSX elements */}
			<ul>



				<li>
					<Link href="/blog/article-that-loads-the-proper-way-1">
						Article that loads the proper "NextJS" way (No page load) 1
					</Link>
				</li>

				<li>
					<Link href="/blog/article-that-loads-the-proper-way-2">
						Article that loads the proper "NextJS" way (No page load) 2
					</Link>
				</li>



			</ul>
		</>
	)
};