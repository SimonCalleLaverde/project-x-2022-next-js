// Imports
import Link from "next/link";

// Blog (Page) Component
export default function BlogPage() {
	// "<React.Fragment></React.Fragment>" could have keys, only difference with "<></>" which can't. Not sure "<Fragment></Fragment>". But is irrelevant I think, as I would map using a <li></li>, <tr></tr>, or so



	// TEMPORARY
	const blogPostsArray = ["blog-post-1", "blog-post-2", "blog-post-3"]//"http://localhost:3000/blog_posts.json"



	return (
		<>
			<h1>Blog (Page) Component</h1>

			<strong>Blog Post Articles</strong>

			{/* List will be generated dynamically by maping an array of data (JSON files temporary, later GraphCMS) into JSX elements */}
			<ul>



				{blogPostsArray.map(item => (
					<li key={item}>
						<Link href="/blog/blog-post-dynamic">
							Blog Post Dynamic
						</Link>
					</li>
				))}



			</ul>
		</>
	)
};