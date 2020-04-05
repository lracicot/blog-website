import Link from "next/link";
import React from "react";
import fetch from "isomorphic-unfetch";
import moment from "moment";

import PropTypes from "prop-types";

import LatestPost from "../components/Post/LatestPost";
import PostListing from "../components/Post/PostListing";
import withLayout from "../components/Layout";

const PostLink = props => (
  <Link href={`/post/[slug]`} as={`/post/${props.slug}`}>
    {props.children}
  </Link>
);

PostLink.propTypes = {
  slug: PropTypes.string,
  children: PropTypes.node
};

const Index = props => {
  const { posts } = props;

  if (posts.length) {
    return (
      <div>
        <LatestPost key={posts[0].uuid} post={posts[0]} />
        {posts.slice(1, posts.length).map(post => (
          <PostListing post={post} key={post.uuid} />
        ))}
      </div>
    );
  }

  return <p>No posts yet. Come back soon!</p>;
};

Index.getInitialProps = async function() {
  const res = await fetch(`https://${process.env.API_URL}/post/published`);
  const posts = await res.json();

  return {
    posts: posts.sort((post1, post2) => {
      if (moment(post1.created_at).isAfter(post2.created_at)) return -1;
      else return 1;
    })
  };
};

Index.propTypes = {
  posts: PropTypes.array
};

export default withLayout(Index);
