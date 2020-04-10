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
  const { post } = props;
  const imageUrl = post.header_image
    ? `https://${post.header_image.public_url}`
    : null;

  return (
    <div
      css={css`
        padding: 5px;
      `}
    >
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          url: `https://louisracicot.com/post/${post.slug}`,
          title: post.title,
          description: post.description,
          images: [{ url: imageUrl }],
          keywords: (post.tags || []).join(",")
        }}
      />
      <Typography variant="h1">{post.title}</Typography>
      <Typography variant="subtitle1">
        {moment(post.updated_at).format("MMMM DD, YYYY")}
      </Typography>
      <Typography variant="subtitle2">
        {readingTime(post.content).text}
      </Typography>
      {post.abstract ? (
        <Typography
          variant="subtitle1"
          css={css`
            color: #888;
            font-style: italic;
            font-size: 21px;
          `}
        >
          {post.abstract}
        </Typography>
      ) : (
        ""
      )}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={post.title}
          css={css`
            width: 100%;
          `}
        />
      ) : (
        ""
      )}
      <PostEditor value={JSON.parse(post.content)} />
    </div>
  );
};

Post.getInitialProps = async function(context) {
  const {
    query: { slug }
  } = context;
  const res = await fetch(`https://${process.env.API_URL}/post/slug/${slug}`);

  return {
    post: await res.json()
  };
};

Post.propTypes = {
  post: PropTypes.object
};

export default withLayout(Post);
