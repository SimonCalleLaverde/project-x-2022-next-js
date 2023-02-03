// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/homepage/Header.js";
import Footer from "../components/Footer.js";
import { GraphQLClient, gql } from "graphql-request";
import ProjectCard from "../components/homepage/ProjectCard.js";

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

// Home (Page) Component
export default function HomePage({ allProjects }) {
  return (
    <>
      {/* To Later Revise <Head/> As I Was Doing In My "portfolio-V3-2022-next-js" In GitHub */}
      {/* To Revise Styles And Add To Document Instead, As Per Warning/Docs */}
      {/* To add meta-tags, etc. <Head/> builds lots of stuff already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}
      <Head>
        <title>Portfolio V3 2023 NextJS</title>
        <meta name="description" content="Portfolio V3 2023 NextJS using GraphCMS."/>
        <link rel="icon" href="/favicon.ico"/>

        {/* TERMINAL's WARNING/STEPS-TO-FOLLOW */}
        {/* Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="https://db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular"). Use Document instead. 
        See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component */}

        {/* Fonts */}
        {/*Option 2: "Old+Standard+TT"*/}
        <link href="https://db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular" rel="stylesheet" type="text/css"/>
      </Head>

      <Header/>

      <main>
        <section className="homepage-example-1-section">
        </section>

        <section className="homepage-projects-section">
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
        </section>

        <section className="homepage-example-3-section">
        </section>

        <section className="homepage-example-4-section">
        </section>
      </main>

      <Footer/>
    </>
  )
};