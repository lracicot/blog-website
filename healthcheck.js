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
        console.log("data", data);
        parser.parseString(data, (err, result) => {
          if (err) {
            console.error(result);
          } else {
            console.log(result);
          }
        });
      });
    }
  });
};
