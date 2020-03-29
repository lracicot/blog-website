import React from "react";
import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const withLayout = async Page => {
  // const pageProps = Page.getInitialProps ? await Page.getInitialProps() : {};
  const layout = props => (
    <div style={layoutStyle}>
      <Header />
      <Page {...props} />
    </div>
  );
  layout.getInitialProps = ctx => {
    return Page.getInitialProps !== undefined ? Page.getInitialProps(ctx) : {};
  };

  return layout;
};

export default withLayout;
