import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

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
      <CardHeader
        title={post.title}
        subheader={moment(post.updated_at).format("MMMM DD, YYYY")}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

PostListing.propTypes = {
  post: PropTypes.any
};

export default PostListing;
