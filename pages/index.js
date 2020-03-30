import Link from "next/link";
import React from "react";
import fetch from "isomorphic-unfetch";

import PropTypes from "prop-types";

import LatestPost from "../components/Post/LatestPost";
import withLayout from "../components/Layout";

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
    <LatestPost post={props.posts[0]} />
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
  const posts = await res.json();

  console.log(posts);

  return { posts };
};

Index.propTypes = {
  posts: PropTypes.array
};

export default withLayout(Index);
