// - - - - - - - B A S E D   I N   G R A P H   C M S   D E V   E D ' S   E X A M P L E   "stuff/[[SLUG]].js" - - - - - - - //
// - - - - - - - &   N O W   I N   "pages/blog.js"   T O O - - - - - - - //

// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/blogpost/Header.js";
import Footer from "../../components/Footer.js";
import { GraphQLClient, gql } from "graphql-request";

//----------------------------------THIS PART BELOW IS FETCHING CONTENT USING GRAPHCMS [START]----------------------------------//

// API Access Endpoint Token (Found at: "GraphCMS > Project > Project Settings > API Access > Content API")
const accessEndpoint = "https://api-us-east-1.hygraph.com/v2/cl5ketcvx2wnm01ta90nhcdmy/master";
const graphCMSRequestAPI = new GraphQLClient(accessEndpoint);

// Querying With GraphQL (The Specific Project That The Slug Matches)
const graphCMSQuery = gql`
  query Project($slug: String!) {
    project(where: {slug: $slug}) {

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

// Getting All The Projects' Slugs
const SLUGLIST = gql`
  {
    projects {
      slug
    }
  }
`;

// IMPLEMENTING "STATIC SITE GENERATION" BELOW (WITH "getStaticPaths" & "getStaticProps")

// GET STATIC PATHS
export async function getStaticPaths() {
  const { projects } = await graphCMSRequestAPI.request(SLUGLIST);

  return {
    paths: projects.map(project => ({ params: { slug: project.slug } })),
    fallback: false
  }
};

// GET STATIC PROPS
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const requestBlogPost = await graphCMSRequestAPI.request(graphCMSQuery, { slug });
  const projectData = requestBlogPost.project;

  return {
    props: {
      projectData
    }//,
    //revalidate: 10
  }
};

//----------------------------------THIS PART ABOVE IS FETCHING CONTENT USING GRAPHCMS [END]----------------------------------//

// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage({ projectData }) {
  return (
    <>
      {/* <Head></Head> Will Go Here */}
      <Head>
        <title>{ projectData.title }</title>
      </Head>

      <Header/>

      <main>
        <section className="blogpostpage-articles-section">
          <div className="container">




            {/* AS PER MY "NextJS Blog GraphCMS" EXAMPLE */}
            <h1>{ projectData.title }</h1>

            <div dangerouslySetInnerHTML={{ __html: projectData.content.text }}>
            </div>




            {/* AS PER HOMEPAGE */}
            <h1>Title: { projectData.title }</h1>

            {/*<Image src={headerImage.url} alt={`${title} Project's Header Image`} layout="fill"/>*/}{/* Must use "width" & "height" properties or "layout='fill'" property */}
            <img src={projectData.headerImage.url} alt={`${projectData.title} Project's Header Image`}/>

            <div className="project-caption">
              <h4>Client: {projectData.client}</h4>
              <br/>

              <Image src={projectData.thumbnailImage.url} alt={`${projectData.title} Project's Thumbnail Image`} width="120" height="90"/>
              <h4>Name For Thumbnail: {projectData.nameForThumbnail}</h4>
              <br/>

              <h4>Year: {projectData.year}</h4>
              <h4>Type: {projectData.type}</h4>
              <h4>Category: {projectData.category}</h4>
              <h4>Slug: {projectData.slug}</h4>
              <h4>Web Launch URL: {projectData.webLaunchUrl}</h4>
              <br/>

              <p>Content: {projectData.content.text}</p>
              <br/>

              <h6 className="mb-0" style={{color: "green"}}>Multiple Values:</h6>
              <h5 className="mt-0">
                {/*Web Image [Index "0"]:<br/>{webImages[0].url}*/}
                WEB IMAGES:
                {projectData.webImages.map(image => (
                  <div key={image.url}>
                    {image.url}
                  </div>
                ))}
              </h5>
              <br/>

              <h6 className="mb-0" style={{color: "green"}}>Multiple Values:</h6>
              <h5 className="mt-0">
                PLATFORMS:
                {projectData.platforms.map(platform => (
                  <div key={platform}>
                    {platform}
                  </div>
                ))}
              </h5>
              <br/>

              <h6 className="mb-0" style={{color: "green"}}>Multiple Values:</h6>
              <h5 className="mt-0">
                ROLES:
                {projectData.roles.map(role => (
                  <div key={role}>
                    {role}
                  </div>
                ))}
              </h5>
              <br/>

              <h6 className="mb-0" style={{color: "green"}}>Multiple Values:</h6>
              <h5 className="mt-0">
                TAGS:
                {projectData.tags.map(tag => (
                  <div key={tag}>
                    {tag}
                  </div>
                ))}
              </h5>
            </div>




          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
};