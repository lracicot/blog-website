
## Deploy CI/CD pipeline

```
aws cloudformation deploy --capabilities CAPABILITY_IAM \
  --template-file pipeline.yml \
  --region ca-central-1 \
  --stack-name blog-website-pipeline \
  --parameter-overrides \
    RepositoryName=blog-website \
    StackName=blog-website \
    DomainName=website.blog.louisracicot.net \
    CertificateArn=
```
