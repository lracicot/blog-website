import { AppBar, Grid, Toolbar } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const linkStyle = {
  marginRight: 15,
  color: "#333"
};

const websiteTitle = {
  textDecoration: "none",
  color: "black",
  fontSize: "2em",
  marginRight: 15,
  fontWeight: "bold",
  verticalAlign: "center"
};

const logoStyle = {
  border: "1px solid black",
  verticalAlign: "middle"
};

const titleStyle = {
  verticalAlign: "middle"
};

const Header = () => (
  <AppBar position="static">
    <Grid container justify="center">
      <Grid item xs={12} md={7}>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Link href="/">
              <a style={websiteTitle}>
                <img src="/logo.png" style={logoStyle} />
                <span style={titleStyle}> DevOps Blog</span>
              </a>
            </Link>
          </div>
          <Link href="/about">
            <a style={linkStyle}>About me</a>
          </Link>
        </Toolbar>
      </Grid>
    </Grid>
  </AppBar>
);

export default Header;
