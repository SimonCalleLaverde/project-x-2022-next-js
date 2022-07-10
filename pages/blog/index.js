// Imports
import { Fragment } from "react";
import Link from "next/link";

// Blog (Page) Component
export default function BlogPage() {
	return (
		<Fragment>
			<h1>Blog (Page) Component</h1>

			{/* List could normally be generated dynamically by maping some array of data into JSX elements */}
			<ul>
				<li>
					<Link href="/blog/article-that-loads-the-proper-way">
						Article that loads the proper "NextJS" way (No page load)
					</Link>
				</li>
				
				<li>
					<a href="/blog/article-that-loads-the-wrong-way">
						Article that loads the "old & wrong" way (Page load)
					</a>
				</li>
			</ul>
		</Fragment>
	)
};