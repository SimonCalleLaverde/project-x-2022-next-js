// THIS IS MY "NextJS Blog GraphCMS" EXAMPLE RENDERING THE POSTS ON THE HOMEPAGE (AT "pages/index.js") TO REVISE

// Imports
import Head from "next/head";
//import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import ProjectCard from "../components/ProjectCard";

// THIS PART BELOW IS BEING USED TO FETCH USING GRAPHCMS

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

// Home (Page) Component
// Passing "allProjects" As Props
// Passing Down Data Into "ProjectCard"
export default function HomePage({ allProjects }) {
  return (
    <>
      <Head>
        <title>Portfolio V3 2022 NextJS</title>
        <meta name="description" content="Portfolio V3 2022 NextJS using GraphCMS."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        {/* Mapping through "allProjects" and displaying each "project", in a "ProjectCard" component */}
        {allProjects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            slug={project.slug}
            nameForThumbnail={project.nameForThumbnail}
            client={project.client}
            thumbnailImage={project.thumbnailImage}
            headerImage={project.headerImage}
            platforms={project.platforms}
            year={project.year}
            roles={project.roles}
            webLaunchUrl={project.webLaunchUrl}
            webImages={project.webImages}
            type={project.type}
            category={project.category}
            tags={project.tags}
            content={project.content}
          />
        ))}
      </main>
    </>
  )
};