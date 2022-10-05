// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/blog/Header.js";
import Footer from "../components/Footer.js";
import { GraphQLClient, gql } from "graphql-request";
import ProjectCard from "../components/homepage/ProjectCard.js";//Temporary (To Be "../components/blog/BlogPostCard.js")

//----------------------------------THIS PART BELOW IS FETCHING CONTENT USING GRAPHCMS [START]----------------------------------//

// API Access Endpoint Token (Found at: "GraphCMS > Project > Project Settings > API Access > Content API")
const accessEndpoint = "https://api-us-east-1.hygraph.com/v2/cl5ketcvx2wnm01ta90nhcdmy/master";
const graphCMSRequestAPI = new GraphQLClient(accessEndpoint);

// Querying With GraphQL
const graphCMSQuery = gql`
  {
    projects {

      id
      title
      slug
      nameForThumbnail
      client
      thumbnailImage {
        url
      }
      headerImage {
        url
      }
      platforms
      year
      roles
      webLaunchUrl
      webImages {
        url
      }
      type
      category
      tags
      content {
        text
      }

    }
  }
`;

// GET STATIC PROPS
export async function getStaticProps() {
  // Making The API Call/Request
  const { projects } = await graphCMSRequestAPI.request(graphCMSQuery);

  return {
    props: {
      allProjects: projects//,
    }//,
    //revalidate: 10,
  }
};

//----------------------------------THIS PART ABOVE IS FETCHING CONTENT USING GRAPHCMS [END]----------------------------------//

// Blog (Page) Component
export default function BlogPage({ allProjects }) {
	return (
		<>
      {/* <Head></Head> Will Go Here */}

      <Header/>

      <main>
        <section className="blog-articles-section">
          <div className="container">




  					<strong>Articles List (Temporary)</strong>

  					{/* List will be generated dynamically by maping an array of data (JSON files temporary, later GraphCMS) into JSX elements */}
  					<ul>
  						{["blog-post-1", "blog-post-2", "blog-post-3"].map(item => (
  							<li key={item}>
  								<Link href="/blog/blog-post-dynamic">
  									Blog Post Dynamic
  								</Link>
  							</li>
  						))}
  					</ul>




          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
};