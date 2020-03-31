const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://louisracicot.com",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "out/",
  nextConfigPath: __dirname + "/next.config.js"
});
