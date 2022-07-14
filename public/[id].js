// - - - - - - - O F F I C I A L   N E X T   E X A M P L E   [id].js - - - - - - - //

// Imports
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";



// Using "getStaticProps" Function To Fetch
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)//Adding the "await" keyword (to use 'remark' library)

  return {
    props: {
      postData
    }
  }
};



// "getStaticPaths" returns an array of possible values for "id"
// Importing & using the "getAllPostIds" function inside getStaticPaths
export async function getStaticPaths() {
  // Returns a list of 'possible values' for id
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
};



// A React component to render the page
// Using 'remark' library: Rendering "contentHtml" (the 'content' part of the Blog Post) using "dangerouslySetInnerHTML"
export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{ postData.title }</title>
      </Head>

      <article>
        <h1>{ postData.title }</h1>

        {/*{ postData.id }*/}

        {/*<Date dateString={ postData.date }/>*/}

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
      </article>
    </>
  )
};