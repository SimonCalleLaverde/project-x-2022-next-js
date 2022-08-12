// - - - - - - - N E X T   J S   I N   1 0 0   S E C O N D S   F I R E S H I P   (F I R E S H I P . I O   E X A M P L E)   "pages/cars/[id].js" - - - - - - - //

// Dynamic Route Result: "/blog/[blogPost]" (E.g: "/blog/blog-post-1", "/blog/blog-post-2", "/blog/blog-post-3")

// Imports
import { useRouter } from "next/router";//import { GraphQLClient, gql } from "graphql-request";
import Head from "next/head";

// IMPLEMENTING "STATIC SITE GENERATION" BELOW (WITH "getStaticPaths" & "getStaticProps")

// GET STATIC PATHS
// Because Site Is Generated On The Server, We Don't Have Access To The URLs Beforehand, We Have To Define The Paths Here In Advance To Tell NextJS Which Dynamic Pages Or Paths To Render
export async function getStaticPaths() {
	// Can also request data from an API or Data-Base
	const requestPathsAPI = await fetch("http://localhost:3000/blog_posts.json")//["blog-post-1", "blog-post-2", "blog-post-3"]

	// Converting to JSON
	const dataPathsJSON = await requestPathsAPI.json()

	// Returns a "paths" object that contains an array with every route (URL parameter)
	// We map our route values (e.g. "blog-post-1, blog-post-2, blog-post-3") to an array of objects
	const paths = dataPathsJSON.map(post => { params: { blogPost: post } })//id: post

	// Then return them from the function, along with additional options like the fallback behavior
	return {
		paths,//This is same than "paths: paths"
		fallback: false//Ensures a URL that doesn't exist in the paths, redirects to a "404" page
	}
};

// GET STATIC PROPS
// Fetches Data (On "Build" Time) & Sends The Result As "Props" To The Page Component (Below)
export async function getStaticProps({ params }) {
	// We need the URL parameter (or id) to know which post was requested (i.e. written-in-the-URL/searched) to fetch the JSON file with that parameter
	// Getting that info from the "params" argument in the function, which comes from "getStaticPaths"
	const requestBlogPost = await fetch(`http://localhost:3000/${params.blogPost}.json`)//Fetching the JSON for an individual post

	// Converting to JSON
	const dataPropsJSON = await requestBlogPost.json()//postData

	// Returning an object that has a "props" property, where each "prop" can then be accessed by the component
	return {
		props: {
			postData: dataPropsJSON//postData
		}
	}
};

// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage({ postData }) {//Destructuring & passing "postData" prop from "getStaticProps" above
	//const router = useRouter()

	// Gets whatever is written in the URL parameter after "/projects/" // This will hold the concrete value in the URL for the dynamic segment of the page visited
	//const { blogPost } = router.query//const blogPost = router.query.blogPost

	return (
		<>
			<Head>
				<title>{ postData.title }</title>
				{/* To add meta-tags, etc. <Head/> builds lots of crap already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}
			</Head>

			<main>
        <section>



      		{/* Here "{ blogPost }" prints out the URL parameter after "/blog/" (e.g. "/blog/blog-post-1") */}
					<h1>Hello { blogPost }</h1>

					<img src={ postData.image } alt="" width="300"/>{/*300px*/}



				</section>
      </main>
    </>
  )
};