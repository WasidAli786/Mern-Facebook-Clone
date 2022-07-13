import { Box, styled } from "@mui/material";

const NavbarBoxStyled = styled(Box)(({ theme }) => ({
  background: "white",
  width: "100%",
  position: "fixed",
  top: 0,
  zIndex: 999,
  "& a>img": {
    maxWidth: "140px",
    height: "50px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "200px",
    },
  },
}));
export { NavbarBoxStyled };
