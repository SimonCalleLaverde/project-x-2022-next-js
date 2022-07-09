// Dynamic Route Result: "/projects/[project]" (E.g: "/projects/lambo", "/projects/tesla", "/projects/ford")

// Imports
import { useRouter } from "next/router";//Access query parameters from the URL
import Head from "next/head";

// Project (Page) (Dynamic) Component
export default function ProjectPage({ car }) {//Destructuring "car" prop to use here in "ProjectPage" component
	const router = useRouter()
	const { project } = router.query//Gets whatever is written in the URL parameter after "/projects/"

	return (
		<>
			<Head>
				<title>{car.color} {car.id}</title>
				{/* To add meta-tags, etc */}
			</Head>

			{/* "{project}" prints out the URL parameter after "/projects/" (e.g. "/projects/tesla") */}
			<h1>Hello {project}</h1>

			<img src={car.image} alt="" width="500"/>{/*300px*/}
		</>
	)
};

// Fetching Data (On "Build") // Tells Next To Pre-Render Page
// Sends The Result As Props To The Component Itself
export async function getStaticProps({ params }) {
	// Fetching the JSON for an individual car // We need the "id" from the URL to know which car was requested
	// Getting that info from the "params" argument in the function // Requesting the JSON file with that "id"
	const req = await fetch(`http://localhost:3000/${params.project}.json`)

	// Converting to JSON
	const data = await req.json()

	// Returning an object that has a "props" property, where each "prop" can then be accessed by the component
	return {
		props: { car: data },
	}
};

// Tells NextJS Which Dynamic Pages To Render
export async function getStaticPaths() {//{ params }
	// Can also request data from an API or Data-Base
	const req = await fetch("http://localhost:3000/cars.json")

	// Converting to JSON
	const data = await req.json()

	// Returns a "paths" object, that contains an array with every route for this dynamic URL
	const paths = data.map(car => {
		return { params: { project: car } }//id: car
	})

	// We map our route values (tesla, ford, lambo) to an array of objects (above), then return them from the function, along with additional options like the fallback behavior
	return {
		paths,
		fallback: false//Ensures a URL that doesn't exist in the paths, redirects to a "404" page
	}
};



// // Fetching Data // At "Request Time" // (On Every Request)
// // Content is generated on a server when requested by the user
// export async function getServerSideProps({ params }) {
// 	// Fetching the Json for an individual car // Getting the 'id' from the URL
// 	const req = await fetch(`http://localhost:3000/${params.id}.json`)

// 	// Converting to Json
// 	const data = await req.json()

// 	// Returning an object that has a 'props' property
// 	// where each 'prop' can then be accessed by the component
// 	return {
// 		props: { car: data },
// 	}
// };