// Imports
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
					<Link href="/blog/blog-post-1">
						Blog Post 1: Article that loads the proper "NextJS" way (No page load)
					</Link>
				</li>

				<li>
					<Link href="/blog/blog-post-2">
						Blog Post 2: Article that loads the proper "NextJS" way (No page load)
					</Link>
				</li>

				<li>
					<Link href="/blog/blog-post-3">
						Blog Post 3: Article that loads the proper "NextJS" way (No page load)
					</Link>
				</li>



			</ul>
		</>
	)
};