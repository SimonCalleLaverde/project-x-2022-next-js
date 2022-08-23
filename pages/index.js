// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/HomePage.module.scss";//I'm Modifying
import { GraphQLClient, gql } from "graphql-request";
import ProjectCard from "../components/ProjectCard";

// THIS PART BELOW IS FETCHING CONTENT USING GRAPHCMS [START]

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

// THIS PART ABOVE IS FETCHING CONTENT USING GRAPHCMS [END]

// Home (Page) Component
export default function HomePage({ allProjects }) {
  return (
    <>{/*className={ styles.container }*/}

      {/* Temporary */}
      <Head>
        <title>Portfolio V3 2022 NextJS</title>
        <meta name="description" content="Portfolio V3 2022 NextJS using GraphCMS."/>
        <link rel="icon" href="/favicon.ico"/>

        {/* Fonts */}
        {/*<link href="https://db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular" rel="stylesheet" type="text/css"/>*/}{/*Option 2: "Old+Standard+TT"*/}
      </Head>

      {/* Temporary */}
      <header className="display-flex justify-content-center align-items-center">{/*flex-direction-row*/}
        <div className="container">
          {/* Image Component Example Temporary */}
          {/*<span className={ styles.logo }>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>*/}

          {/* Temporary */}
          <h1 className="title">{/*{styles.title}*/}
            Portfolio V3 2022 Next.js
          </h1>
        </div>
      </header>

      {/* Temporary */}
      <main>{/*{ styles.main }*/}
        <div className="container">
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
        </div>
      </main>

      {/* Temporary */}
      <footer className="display-flex justify-content-center align-items-center">{/*{styles.footer}*/}
        <div className="container">
          <span>
            Designed & Developed by{" "}
          </span>

          <a href="https://simoncallelaverde.github.io/" target="_blank">
            Simón Calle Laverde
          </a>
        </div>
      </footer>

    </>
  )
};