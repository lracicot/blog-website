/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(() => ({
  footer: {
    marginTop: 50,
    marginBottom: 50
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
          <a
            href="https://www.linkedin.com/in/louis-racicot-b15a8a27/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              css={css`
                font-size: 32px;
                color: black;
              `}
            />
          </a>
        </footer>
      </Grid>
    </Grid>
  );
};

export default Footer;
