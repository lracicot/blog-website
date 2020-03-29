import React from "react";
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
import PostEditor from "../../components/PostEditor/slate";
import withLayout from "../../components/Layout";

const Post = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
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
