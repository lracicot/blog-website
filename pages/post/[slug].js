/** @jsx jsx */
import { Typography } from "@material-ui/core";
import { jsx, css } from "@emotion/core";
import fetch from "isomorphic-unfetch";
import moment from "moment";
import readingTime from "reading-time";
import { NextSeo } from "next-seo";

import PropTypes from "prop-types";

import PostEditor from "../../components/PostEditor/slate";
import withLayout from "../../components/Layout";

const Post = props => {
  return (
    <div
      css={css`
        padding: 5px;
      `}
    >
      <NextSeo
        title={props.post.title}
        description={props.post.description}
        openGraph={{
          url: `https://louisracicot.com/post/${props.post.slug}`,
          title: props.post.title,
          description: props.post.description,
          images: [{ url: `https://${props.post.header_image.public_url}` }]
        }}
      />
      <Typography variant="h1">{props.post.title}</Typography>
      <Typography variant="subtitle1">
        {moment(props.post.updated_at).format("MMMM DD, YYYY")}
      </Typography>
      <Typography variant="subtitle2">
        {readingTime(props.post.content).text}
      </Typography>
      <img
        src={`https://${props.post.header_image.public_url}`}
        alt={props.post.title}
        css={css`
          width: 100%;
        `}
      />
      <PostEditor value={JSON.parse(props.post.content)} />
    </div>
  );
};

Post.getInitialProps = async function(context) {
  const {
    query: { slug }
  } = context;
  const res = await fetch(
    `https://sam-blog.louisracicot.net/post/slug/${slug}`
  );

  return {
    post: await res.json()
  };
};

Post.propTypes = {
  post: PropTypes.object
};

export default withLayout(Post);
