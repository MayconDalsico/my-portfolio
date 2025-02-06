import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: "#090D00"
      },
      secondary: {
        main: "#EF6018"
      },
      text: {
        primary: "#404439"
      },
    },
    typography:{
        fontFamily: "Helvetica"
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;