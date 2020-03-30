import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import moment from "moment";
import Link from "next/link";

import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 30
  }
}));

const PostListing = props => {
  const classes = useStyles();
  const { post } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea component="div">
        <Link href={`/post/[slug]`} as={`/post/${post.slug}`}>
          <div>
            <CardHeader
              title={post.title}
              subheader={moment(post.updated_at).format("MMMM DD, YYYY")}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.description}
              </Typography>
            </CardContent>
          </div>
        </Link>
      </CardActionArea>
    </Card>
  );
};

PostListing.propTypes = {
  post: PropTypes.any
};

export default PostListing;
