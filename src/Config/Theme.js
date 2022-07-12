import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#0A6046",
    },
  },
  shape: {
    // borderRadius: "10",
    rounded: "10px",
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});
