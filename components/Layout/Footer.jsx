import { Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  footer: {
    marginTop: 50
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6}>
        <Divider />
        <footer className={classes.footer}>
          <p>&copy; {1900 + new Date().getYear()} Louis Racicot</p>
        </footer>
      </Grid>
    </Grid>
  );
};

export default Footer;
