
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
    ApiUrl=api-dev.louisracicot.net \
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
    BranchName=develop \
    DomainName=louisracicot.com \
    ApiUrl=api.louisracicot.net \
    CertificateArn=arn:aws:acm:us-east-1:281217159305:certificate/769aface-75aa-482a-92e8-b47f764fd5b3
```
