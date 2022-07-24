// - - - - - - - O F F I C I A L   N E X T   J S   E X A M P L E   [id].js - - - - - - - //

// Imports
import { getAllPostIds, getPostData } from "../../lib/posts";//This was useful for ".md" files in that example, I'll use graphCMS
import Head from "next/head";

// IMPLEMENTING "STATIC SITE GENERATION" BELOW (WITH "getStaticPaths" & "getStaticProps")

// GET STATIC PATHS
export async function getStaticPaths() {
  const paths = getAllPostIds()//This function makes the fetch, .map(), etc

  return {
    paths,//This is same than "paths: paths"
    fallback: false
  }
};

// GET STATIC PROPS
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)//Adding the "await" keyword to use remark library

  return {
    props: {
      postData
    }
  }
};





// BlogPost (Page) (Dynamic) Component
export default function BlogPost({ postData }) {
  return (
    <>
      <Head>
        <title>{ postData.title }</title>
      </Head>

      <article>
        <h1>{ postData.title }</h1>

        {/*{ postData.id }*/}

        {/*<Date dateString={ postData.date }/>*/}

        {/* Using 'remark' library: Rendering "contentHtml" (the 'content' part of the Blog Post) using "dangerouslySetInnerHTML" */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
      </article>
    </>
  )
};