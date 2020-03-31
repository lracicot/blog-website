import { Grid } from "@material-ui/core";
import React from "react";

import Footer from "./Layout/Footer";
import Header from "./Header";

const withLayout = Page => {
  // const pageProps = Page.getInitialProps ? await Page.getInitialProps() : {};
  const layout = props => (
    <div>
      <Header />
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <Page {...props} />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
  layout.getInitialProps = ctx => {
    return Page.getInitialProps !== undefined ? Page.getInitialProps(ctx) : {};
  };

  return layout;
};

export default withLayout;
