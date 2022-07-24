// [ NEXT IN 100 SECONDS "[blogPost].js" ]
// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage({ postData }) {
  return (
    <>
      <main>
        <Head>
          <title>{ postData.title }</title>
          {/* To add meta-tags, etc. <Head/> builds lots of crap already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}
        </Head>

        <article>



    			<h1>[Blog Post] (Page) Component</h1>

    			<img src={ postData.image } alt="" width="300"/>{/*300px*/}



        </article>
      </main>
    </>
  )
};



// [ OFFICIAL NEXT "[id].js" ]
// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage({ postData }) {
  return (
    <>
      <main>
        <Head>
          <title>{ postData.title }</title>
          {/* To add meta-tags, etc. <Head/> builds lots of crap already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}
        </Head>

        <article>



          <h1>{ postData.title }</h1>

          {/*{ postData.id }*/}

          {/*<Date dateString={ postData.date }/>*/}

          {/* Using 'remark' library: Rendering "contentHtml" (the 'content' part of the Blog Post) using "dangerouslySetInnerHTML" */}
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>



        </article>
      </main>
    </>
  )
};



// [ GRAPHCMS DEV ED "[slug].js" ]
// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage({ postData }) {
  return (
    <>
      <main>
        <Head>
          <title>{ postData.title }</title>
          {/* To add meta-tags, etc. <Head/> builds lots of crap already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}
        </Head>

        <article>



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



        </article>
      </main>
    </>
  )
};