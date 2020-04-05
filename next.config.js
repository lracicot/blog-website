const fetch = require("isomorphic-unfetch");

module.exports = {
  exportTrailingSlash: true,
  env: {
    API_URL: process.env.API_URL
  },
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
    const res = await fetch(`https://${process.env.API_URL}/post/published`);
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
