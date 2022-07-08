// Dynamic Route Result: "/projects/[project]" (E.g: "/projects/lambo", "/projects/tesla", "/projects/ford")

// Imports
import { useRouter } from "next/router";//Access query parameters from the URL
import Head from "next/head";//......

// Project (Page) (Dynamic) Component
// (WILL BE THE DYNAMIC "ProjectPage" SOON)
export default function CarPage({ car }) {//Destructuring "car" prop to use in "CarPage" component
	const router = useRouter()
	const { project } = router.query//Gets whatever is written in the URL parameter after "/projects/"

	return <h1>Hello {project}</h1>//"{project}" prints out the URL parameter after "/projects/" (e.g. "/projects/{project}")



	// return (
	// 	<>
	// 		<Head>
	// 			<title>{car.color} {car.id}</title>
	// 		</Head>

	// 		<h1>Hello {project}</h1>

	// 		<img src={car.image} alt="" width="300px"/>
	// 	</>
	// )
};



// // Fetching Data // On "Build"
// export async function getStaticProps({ params }) {
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

// // Tells Next which dynamic pages to render
// export async function getStaticPaths({ params }) {
// 	// Can also request data from API or Data-Base
// 	const req = await fetch("http://localhost:3000/cars.json")

// 	// Converting to Json
// 	const data = await req.json()

// 	// Returns paths object that contains an array with every route for this dynamic URL
// 	const paths = data.map(car => {
// 		return { params: { id: car }}
// 	})

// 	// Returning routes (tesla, ford, lambo) mapped to an array of objects
// 	// Along with 'fallback: false' behavior (for 404 pages)
// 	return {
// 		paths,
// 		fallback: false
// 	}
// };



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