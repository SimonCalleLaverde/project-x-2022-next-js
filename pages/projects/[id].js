// Project (Page)
// export default function ProjectPage() {
// 	return <h1>Project Page</h1>
// };

// our-domain.com/projects/[project]

// our-domain.com/projects/lambo
// our-domain.com/projects/tesla
// our-domain.com/projects/ford

// Imports
import { useRouter } from "next/router"
import Head from "next/head"

// WILL BE THE "PROJECT PAGE" (Project (Page) Component)
// Car Page (Dynamic) Component
// Destructuring car 'prop' to use in car component
export default function Car({ car }) {
	const router = useRouter()
	const { id } = router.query

	return (<>
		<Head>
			<title>{car.color} {car.id}</title>
		</Head>

		<h1>Hello {id}</h1>

		<img src={car.image} alt="" width="300px"/>
	</>)
}

// Fetching Data // On "Build"
export async function getStaticProps({ params }) {
	// Fetching the Json for an individual car // Getting the 'id' from the URL
	const req = await fetch(`http://localhost:3000/${params.id}.json`)

	// Converting to Json
	const data = await req.json()

	// Returning an object that has a 'props' property
	// where each 'prop' can then be accessed by the component
	return {
		props: { car: data },
	}
}

// Tells Next which dynamic pages to render
export async function getStaticPaths({ params }) {
	// Can also request data from API or Data-Base
	const req = await fetch("http://localhost:3000/cars.json")

	// Converting to Json
	const data = await req.json()

	// Returns paths object that contains an array with every route for this dynamic URL
	const paths = data.map(car => {
		return { params: { id: car }}
	})

	// Returning routes (tesla, ford, lambo) mapped to an array of objects
	// Along with 'fallback: false' behavior (for 404 pages)
	return {
		paths,
		fallback: false
	}
}

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
// }