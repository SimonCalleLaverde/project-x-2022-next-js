// THIS IS THE "NextJS Blog GraphCMS" EXAMPLE RENDERING THE POSTS ON THE HOMEPAGE (AT "pages/index.js") TO REVISE

// Imports
import Head from "next/head";
//import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
//import BlogCard from "../components/BlogCard";

// THIS PART BELOW IS BEING USED TO FETCH USING GRAPHCMS (THE REST IS THE SAME IN THE OTHER TWO NON-GRAPHCMS EXAMPLES)

// API Access Endpoint Token (Found at: "GraphCMS > Project > Project Settings > API Access > Content API")
const accessEndpoint = "https://api-us-east-1.hygraph.com/v2/cl5ketcvx2wnm01ta90nhcdmy/master";
const graphCMSRequestAPI = new GraphQLClient(accessEndpoint);

// Querying With GraphQL
const graphCMSQuery = gql`
  {
    projects {

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
// Making The API Call/Request (Using "getStaticProps" Function)
export async function getStaticProps() {
  const { projects } = await graphCMSRequestAPI.request(graphCMSQuery);

  return {
    props: {
      allProjects: projects//,
    }//,
    //revalidate: 10,
  }
};

// Home (Page) Component
// Passing "allProjects" As Props // Passing Down Data In "BlogCard"
export default function HomePage({ allProjects }) {
  return (
    <div>
      <Head>
        <title>NextJS Blog GraphCMS</title>
        <meta name="description" content="NextJS Blog with GraphCMS example."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      {/* Mapping through "allProjects" and displaying each "post", in a "BlogCard" component */}
      <main>
        {allProjects.map(post => (
          // <BlogCard
          //   key={post.id}
          //   coverPhoto={post.coverPhoto}
          //   title={post.title}
          //   content={post.content}
          //   author={post.author}
          //   datePublished={post.datePublished}
          //   slug={post.slug}
          // />
          <h1>Hey there, fixed!</h1>
        ))}
      </main>
    </div>
  )
};