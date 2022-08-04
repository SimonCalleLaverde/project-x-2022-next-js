// - - - - - - - G R A P H   C M S   D E V   E D   E X A M P L E   [slug].js - - - - - - - //

// Imports
import Head from "next/head";
//import styles from "../../styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";

// THIS PART BELOW IS BEING USED TO FETCH USING GRAPHCMS (THE REST IS THE SAME IN THE OTHER TWO NON-GRAPHCMS EXAMPLES)

// API Access Endpoint Token (Found at: "GraphCMS > Project > Project Settings > API Access > Content API")
const accessEndpoint = "https://api-us-east-1.graphcms.com/v2/cl495aqwz0vh801w8cxos12a7/master";
const graphCMSRequestAPI = new GraphQLClient(accessEndpoint);



// Querying With GraphQL (The Specific Post That The Slug Matches)
const graphCMSQuery = gql`
  query Post($slug: String!) {
    post(where: {slug: $slug}) {

      id
      coverPhoto {
        id
        url
      }
      title
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      datePublished
      slug

    }
  }
`;

// Getting All The Blog Post Slugs
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;



// IMPLEMENTING "STATIC SITE GENERATION" BELOW (WITH "getStaticPaths" & "getStaticProps")

// GET STATIC PATHS
export async function getStaticPaths() {
  const posts = await graphCMSRequestAPI.request(SLUGLIST)

  const paths = posts.map(post => { params: { slug: post.slug } })//id: post

  return {
    paths,//This is same than "paths: paths"
    fallback: false
  }
};

// GET STATIC PROPS
export async function getStaticProps({ params }) {
  const requestBlogPost = await graphCMSRequestAPI.request(graphCMSQuery, {params.slug});
  const postData = requestBlogPost.post;

  return {
    props: {
      postData
    }//,
    //revalidate: 10
  }
};

// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage({ postData }) {
  return (
    <>
      <Head>
        <title>{ postData.title }</title>
        {/* To add meta-tags, etc. <Head/> builds lots of crap already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}
      </Head>

      <main>
        <section>



          <img src={ postData.coverPhoto.url } alt=""/>

          <div>
            <img src={ postData.author.avatar.url } alt=""/>

            <div>
              <h6>By { postData.author.name }</h6>
              <small>{ postData.datePublished }</small>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: postData.content.html }}>
          </div>



        </section>
      </main>
    </>
  )
};