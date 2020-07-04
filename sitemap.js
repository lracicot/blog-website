const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: process.env.WEBSITE_URL,
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "out/",
  nextConfigPath: __dirname + "/next.config.js"
});
