const fetch = require("isomorphic-unfetch");

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
    const res = await fetch("https://sam-blog.louisracicot.net/post/published");
    const posts = await res.json();

    posts.forEach(post => {
      paths[`/post/${post.slug}`] = {
        page: "/post/[slug]",
        query: { slug: post.slug }
      };
    });

    return paths;
  }
};
