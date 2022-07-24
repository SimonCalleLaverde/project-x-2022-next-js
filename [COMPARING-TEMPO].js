// [ NEXT IN 100 SECONDS "[blogPost].js" ]
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



    			<img src={ postData.image } alt="" width="300"/>{/*300px*/}



        </section>
      </main>
    </>
  )
};



// [ OFFICIAL NEXT "[id].js" ]
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



          {/*{ postData.id }*/}

          {/*{ postData.date }*/}

          {/* Using 'remark' library: Rendering "contentHtml" (the 'content' part of the Blog Post) using "dangerouslySetInnerHTML" */}
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>



        </section>
      </main>
    </>
  )
};



// [ GRAPHCMS DEV ED "[slug].js" ]
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