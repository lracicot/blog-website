import React from "react";
import { NextSeo } from "next-seo";

import withLayout from "../components/Layout";

const About = () => (
  <div>
    <NextSeo title="About me" />
    <p>This is the about page</p>
  </div>
);

export default withLayout(About);
