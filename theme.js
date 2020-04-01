import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontFamily: '"Georgia", "Helvetica", "Arial", sans-serif'
    },
    h2: {
      marginTop: 30,
      fontSize: "2rem",
      marginBottom: 20
    }
  }
});

export default theme;
