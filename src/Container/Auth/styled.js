import { Box, styled } from "@mui/material";

const AuthStyled = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));
export { AuthStyled };
