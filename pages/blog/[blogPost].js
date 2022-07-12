// Dynamic Route Result: "/blog/[blogPost]" (E.g: "/blog/blog-post-1", "/blog/blog-post-2", "/blog/blog-post-3")

// Imports
import { useRouter } from "next/router";
import Head from "next/head";

// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage() {
	const router = useRouter()

	// Gets whatever is written in the URL parameter after "/projects/"
	const { blogPost } = router.query
	// This will hold the concrete value in the URL for the dynamic segment of the page visited
	//const blogPost = router.query.blogPost



	// We could send a request to the backend API to fetch the news item with "blogPost"
	return (
		<>
			<h1>BlogPost (Page) Component</h1>
		</>
	)



};