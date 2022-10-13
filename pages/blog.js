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
        <section className="OLD-section">
          <div className="container">




						{["1", "2", "3"].map(item => (
							<div key={item}>
								<Link href="/blog/blog-post-dynamic">
									Blog Post Dynamic
								</Link>
							</div>
						))}




          </div>
        </section>

        <section className="blogpage-articles-section">
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
      </main>

      <Footer/>
    </>
  )
};