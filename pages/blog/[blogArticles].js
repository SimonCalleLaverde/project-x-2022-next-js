// TO REVISE // Will be similar to "[project].js"

// EXAMPLE // our-domain.com/blog/[blog-articles]

// Imports
import { useRouter } from "next/router";

// WILL BE THE "ARTICLE PAGE"
// Article Page (Dynamic) Component
export default function ArticlePage() {
	const routerObject = useRouter();

	// This Will Hold The Concrete Value In The URL For The Dynamic Segment Of The Page Visited
	const blogArticles = routerObject.query.blogArticles;
	// We Could Send A Request To The Backend API To Fetch The News Item With "blogArticles"

	return <h1>Article (Page) Component</h1>
};