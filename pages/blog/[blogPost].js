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

// Getting All The Project Slugs




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
  const projects = await graphCMSRequestAPI.request(SLUGLIST)

  const paths = projects.map(project => { params: { slug: project.slug } })

  return {
    paths,//This is same than "paths: paths"
    fallback: false
  }
};

// GET STATIC PROPS
export async function getStaticProps({ params }) {
  const slug = params.slug
  const requestBlogPost = await graphCMSRequestAPI.request(graphCMSQuery, { slug });
  const postData = requestBlogPost.project;

  return {
    props: {
      postData
    }//,
    //revalidate: 10
  }
};




//----------------------------------THIS PART ABOVE IS FETCHING CONTENT USING GRAPHCMS [END]----------------------------------//

// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage() {
  return (
    <>
      {/* <Head></Head> Will Go Here */}

      <Header/>

      <main>
        <section className="blogpostpage-articles-section">
          <div className="container">




            <h1>BlogPost (Page) (Dynamic) Component</h1>




          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
};