const AWS = require("aws-sdk");

const cloudfront = new AWS.CloudFront();

class CacheController {
  constructor(distributionId) {
    this.distributionId = distributionId;
  }

  invalidateUrl(urls) {
    console.log(urls);
    return new Promise((resolve, reject) => {
      cloudfront.createInvalidation(
        {
          DistributionId: this.distributionId,
          InvalidationBatch: {
            CallerReference: Date.now().toString(),
            Paths: {
              Quantity: urls.length,
              Items: urls
            }
          }
        },
        (err, data) => (err ? reject(err) : resolve(data))
      );
    });
  }
}

exports.handler = (cacheController => async event => {
  const newPostsUrl = event.Records.filter(
    record =>
      record.eventName === "INSERT" && record.eventSource === "aws:dynamodb"
  ).map(record => record.dynamodb.NewImage.slug.S);

  if (newPostsUrl.length) {
    await cacheController.invalidateUrl(["/", ...newPostsUrl]);
  }

  const updatedPostsUrl = event.Records.filter(
    record =>
      record.eventName === "MODIFY" && record.eventSource === "aws:dynamodb"
  ).map(record => record.dynamodb.NewImage.slug.S);

  if (updatedPostsUrl.length) {
    await cacheController.invalidateUrl([updatedPostsUrl]);
  }

  const removedPostsUrl = event.Records.filter(
    record =>
      record.eventName === "REMOVE" && record.eventSource === "aws:dynamodb"
  ).map(record => record.dynamodb.NewImage.slug.S);

  if (removedPostsUrl.length) {
    await cacheController.invalidateUrl(["/", ...removedPostsUrl]);
  }
})(new CacheController(process.env.CF_DISTRIBUTION_ID));
