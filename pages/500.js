// 500 (Page) (Custom) Component // Custom error page // File statically generated at build time
// Same exact was for "404 (Page) (Custom) Component", with 'return <h1>404 - Page Not Found :(</h1>' but I left Create Next App's 404 default for now
export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>
};

// Note: You can use getStaticProps inside this page if you need to fetch data at build time