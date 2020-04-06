
## Setup repository

```
aws cloudformation deploy --capabilities CAPABILITY_IAM \
  --template-file repository.yml \
  --region ca-central-1 \
  --stack-name blog-website-repository \
  --parameter-overrides \
    RepositoryName=blog-website
```

## Deploy CI/CD pipeline DEV

```
aws cloudformation deploy --capabilities CAPABILITY_IAM \
  --template-file pipeline.yml \
  --region ca-central-1 \
  --stack-name blog-website-pipeline-dev \
  --parameter-overrides \
    RepositoryName=blog-website \
    RepositoryStack=blog-website-repository \
    StackName=blog-website-dev \
    BranchName=develop \
    DomainName=website-dev.blog.louisracicot.net \
    ApiUrl=api-dev.blog.louisracicot.net \
    HostedZoneId=Z2E6WEFRHH6156 \
    CertificateArn=arn:aws:acm:us-east-1:281217159305:certificate/834042a2-c706-4c3c-8e6b-04bcd698804a
```


## Deploy CI/CD pipeline PROD

```
aws cloudformation deploy --capabilities CAPABILITY_IAM \
  --template-file pipeline.yml \
  --region ca-central-1 \
  --stack-name blog-website-pipeline-prod \
  --parameter-overrides \
    RepositoryName=blog-website \
    RepositoryStack=blog-website-repository \
    StackName=blog-website-prod \
    BranchName=master \
    DomainName=louisracicot.com \
    ApiUrl=api.blog.louisracicot.net \
    HostedZoneId=Z00337802E66BSGWVKTG9 \
    CertificateArn=arn:aws:acm:us-east-1:281217159305:certificate/6dcaa44c-bffd-47c5-be9d-3a577cd37639
```
