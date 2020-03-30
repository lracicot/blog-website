import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

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

  return (
    <Card className={classes.root}>
      <CardHeader
        title={post.title}
        subheader={moment(post.updated_at).format("MMMM DD, YYYY")}
      />
      <CardMedia
        className={classes.media}
        image={`https://${post.header_image.public_url}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

LatestPost.propTypes = {
  post: PropTypes.any
};

export default LatestPost;
