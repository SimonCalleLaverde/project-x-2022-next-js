// GET STATIC PROPS (Next In 100 Seconds)
export async function getStaticProps({ params }) {
  // We need the URL parameter (or id) to know which post was requested (i.e. written-in-the-URL/searched) to fetch the JSON file with that parameter
  // Getting that info from the "params" argument in the function, which comes from "getStaticPaths"
  const requestBlogPost = await fetch(`http://localhost:3000/${params.blogPost}.json`)// Fetching the JSON for an individual post

  // Converting to JSON
  const postData = await requestBlogPost.json()

  // Returning an object that has a "props" property, where each "prop" can then be accessed by the component
  return {
    props: {
      postData
    }
  }
};



// GET STATIC PROPS (Official Next)
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)//Adding the "await" keyword to use remark library

  return {
    props: {
      postData
    }
  }
};



// GET STATIC PROPS (Dev Ed)
export async function getStaticProps({ params }) {
  const requestBlogPost = await graphCMSRequestAPI.request(graphCMSQuery, {params.slug});
  const postData = requestBlogPost.post;

  return {
    props: {
      postData
    }
  }
};