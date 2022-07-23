// [ NEXT IN 100 SECONDS ]
// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage({ postData }) {//Destructuring & passing "postData" prop from "getStaticProps" above
	const router = useRouter()

	// Gets whatever is written in the URL parameter after "/projects/" // This will hold the concrete value in the URL for the dynamic segment of the page visited
	//const blogPost = router.query.blogPost
	const { blogPost } = router.query

	return (
		<>
			<Head>
				<title>{postData.title}</title>
				{/* To add meta-tags, etc. <Head/> builds lots of crap already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}
			</Head>

			<h1>[Blog Post] (Page) Component</h1>

			{/* "{blogPost}" prints out the URL parameter after "/blog/" (e.g. "/blog/blog-post-1") */}
			<h2>Hello {blogPost}</h2>

			<img src={postData.image} alt="" width="300"/>{/*300px*/}
		</>
	)
};



// [ OFFICIAL NEXT ]
// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage({ postData }) {
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



// [ GRAPHCMS DEV ED ]
// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage({ postData }) {
  return (
    <main>
      <img src={ postData.coverPhoto.url } alt=""/>

      <div>
        <div>
          <img src={ postData.author.avatar.url } alt=""/>

          <div>
            <h6>By { postData.author.name }</h6>
            <small>{ postData.datePublished }</small>
          </div>
        </div>

        <h2>{ postData.title }</h2>
      </div>

      <div dangerouslySetInnerHTML={{ __html: postData.content.html }}>
      </div>
    </main>
  )
};