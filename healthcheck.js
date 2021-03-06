const https = require("https");
const xml2js = require("xml2js");
const parser = new xml2js.Parser();

exports.handler = () => {
  let data = "";
  https.get(`https://${process.env.WEBSITE_URL}/sitemap.xml`, res => {
    if (res.statusCode >= 200 && res.statusCode < 400) {
      res.on("data", data_ => {
        data += data_.toString();
      });
      res.on("end", () => {
        parser.parseString(data, (err, result) => {
          if (err) {
            console.error(result);
          } else {
            for (const page of result.urlset.url) {
              https.get(page.loc[0], res => {
                if (res.statusCode < 200 || res.statusCode >= 400) {
                  console.error(
                    `FAILED ${page.loc[0]} with status code: ${res.statusCode}`
                  );
                } else {
                  console.log(`SUCCESS ${page.loc[0]}`);
                }
              });
            }
          }
        });
      });
    }
  });
};
