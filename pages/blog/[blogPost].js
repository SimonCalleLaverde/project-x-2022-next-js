// Dynamic Route Result: "/blog/[blogPost]" (E.g: "/blog/blog-post-1", "/blog/blog-post-2", "/blog/blog-post-3")

// Imports
import { useRouter } from "next/router";
import Head from "next/head";

// IMPLEMENTING "STATIC SITE GENERATION" BELOW (WITH "getStaticProps" & "getStaticPaths")

// Fetches Data (On "Build" Time) & Sends The Result As "Props" To The Page Component (Below)
export async function getStaticProps({ params }) {
	// We need the "id" (parameter) from the URL to know which post was requested (written-in-the-URL/searched) to fetch the JSON file with that "id"
	// Getting that info from the "params" argument in the function, which comes from "getStaticPaths"
	const requestBlogPost = await fetch(`http://localhost:3000/${params.blogPost}.json`)// Fetching the JSON for an individual post

	// Converting to JSON
	const dataJSON1 = await requestBlogPost.json()

	// Returning an object that has a "props" property, where each "prop" can then be accessed by the component
	return {
		props: { post: dataJSON1 },
	}
};

// Tells NextJS Which Dynamic Pages To Render
export async function getStaticPaths() {
	// Can also request data from an API or Data-Base
	const requestAPI = await fetch("http://localhost:3000/blog_posts.json")

	// Converting to JSON
	const dataJSON2 = await requestAPI.json()

	// Returns a "paths" object, that contains an array with every route for this dynamic URL
	const paths = dataJSON2.map(post => {
		return {
			params: { blogPost: post }//id: post
		}
	})

	// We map our route values (blog-post-1, blog-post-2, blog-post-3) to an array of objects (above), then return them from the function, along with additional options like the fallback behavior
	return {
		paths,
		fallback: false//Ensures a URL that doesn't exist in the paths, redirects to a "404" page
	}
};

// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage({ post }) {//Destructuring "post" prop
	const router = useRouter()

	// Gets whatever is written in the URL parameter after "/projects/" // This will hold the concrete value in the URL for the dynamic segment of the page visited
	//const blogPost = router.query.blogPost
	const { blogPost } = router.query

	return (
		<>
			<Head>
				<title>{post.title}</title>
				{/* To add meta-tags, etc. <Head/> builds lots of crap already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}
			</Head>

			<h1>[Blog Post] (Page) Component</h1>

			{/* "{blogPost}" prints out the URL parameter after "/blog/" (e.g. "/blog/blog-post-1") */}
			<h2>Hello {blogPost}</h2>

			<img src={post.image} alt="" width="300"/>{/*300px*/}
		</>
	)
};