import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import moment from "moment";

import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

const LatestPost = props => {
  const classes = useStyles();
  const { post } = props;
  const imageUrl = post.header_image
    ? `https://${post.header_image.public_url}`
    : null;

  return (
    <Card className={classes.root}>
      <CardActionArea component="div">
        <Link href={`/post/[slug]`} as={`/post/${post.slug}`}>
          <div>
            <CardHeader
              title={post.title}
              subheader={moment(post.updated_at).format("MMMM DD, YYYY")}
            />
            {imageUrl ? (
              <CardMedia className={classes.media} image={imageUrl} />
            ) : (
              ""
            )}
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

LatestPost.propTypes = {
  post: PropTypes.any
};

export default LatestPost;
