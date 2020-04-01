/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Divider, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";

import withLayout from "../components/Layout";

const About = () => (
  <div>
    <NextSeo title="About me" />
    <Typography variant="h1">About me</Typography>
    <p
      css={css`
        font-size: 18px;
      `}
    >
      Hello dear visitor! My name is Louis Racicot
      <ul>
        <li
          css={css`
            margin-top: 32px;
          `}
        >
          I&apos;ve been working as a <strong>developer</strong> and an{" "}
          <strong>operator</strong>, sometimes both at the same time, since
          2008.
        </li>
        <li
          css={css`
            margin-top: 32px;
          `}
        >
          I also have a degree in <strong>software engineering</strong> and
          I&apos;ve written some research papers on{" "}
          <strong>software quality</strong> and{" "}
          <strong>Infrastructure as Code (IaC)</strong>.
        </li>
        <li
          css={css`
            margin-top: 32px;
          `}
        >
          The technical stuff I like the most is to <strong>setup CI/CD</strong>{" "}
          for applications and infrastructure, and I&apos;ve recently started to
          develop <strong>cloud native</strong> applications.
        </li>
        <li
          css={css`
            margin-top: 32px;
          `}
        >
          My favorite operating system for desktops is{" "}
          <strong>Arch Linux</strong>, and <strong>macOS</strong> for laptops.
        </li>
      </ul>
    </p>
    <p
      css={css`
        margin-top: 30px;
        margin-bottom: 30px;
      `}
    >
      &nbsp;
    </p>
    <Divider />
    <p
      css={css`
        margin-top: 30px;
        margin-bottom: 30px;
      `}
    >
      &nbsp;
    </p>
    <Typography variant="h2">Projects worth mentionning</Typography>
  </div>
);

export default withLayout(About);
