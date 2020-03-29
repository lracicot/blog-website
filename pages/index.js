import React from "react";
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
import withLayout from "../components/Layout";

import Link from "next/link";

const PostLink = props => (
  <Link href={`/post/[slug]`} as={`/post/${props.slug}`}>
    <a>{props.title}</a>
  </Link>
);

PostLink.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string
};

const Index = props => (
  <div>
    <p>This is the home page</p>
    <ul>
      {props.posts.map(post => (
        <li key={post.uuid}>
          <PostLink title={post.title} slug={post.slug} />
        </li>
      ))}
    </ul>
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://sam-blog.louisracicot.net/post/published");

  return {
    posts: await res.json()
  };
};

Index.propTypes = {
  posts: PropTypes.array
};

export default withLayout(Index);
