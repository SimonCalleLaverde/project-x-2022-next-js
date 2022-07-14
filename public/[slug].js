// - - - - - - - G R A P H   C M S   D E V   E D   E X A M P L E   [slug].js - - - - - - - //

// Imports
import { GraphQLClient, gql } from "graphql-request";
import Head from "next/head";



// API Access Endpoint Token (GraphCMS > Project > Project Settings > API Access > Content API)
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



// Using "getStaticProps" Function To Fetch
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphCMSRequestAPI.request(graphCMSQuery, {slug});
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  }
};



// Using "getStaticPaths" Function // Request In The Backend And Will Find The Params That Are Available & Pass Them To "getStaticProps" Below
// Cause Is Generated On The Server & We Don't Have Access To The URLs, We Have To Define The Paths Here In The Backend
export async function getStaticPaths() {
  // Defining/Telling Next.js Which Are The Paths That Need To Be Generated (Example)
  // paths: ["macdonalds", "jamstack-with-next"]

  const {posts} = await graphCMSRequestAPI.request(SLUGLIST);

  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  }
};



// BlogPost Page Component // Passing "post" From "getStaticProps" Above
export default function BlogPost({ post }) {
  return (
    <main>
      <img src={ post.coverPhoto.url } alt=""/>

      <div>
        <div>
          <img src={ post.author.avatar.url } alt=""/>

          <div>
            <h6>By { post.author.name }</h6>
            <small>{ post.datePublished }</small>
          </div>
        </div>

        <h2>{ post.title }</h2>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content.html }}>
      </div>
    </main>
  )
};