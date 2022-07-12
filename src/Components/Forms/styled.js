import { styled } from "@mui/material";
import { InputBase } from "@mui/material";

const BaseInputWrapped = styled("div")({
  display: "flex",
  alignItems: "center",
  position: "relative",
  ".search__icon": {
    position: "absolute",
    color: "white",
    left: "10px",
  },
});
const BaseInputStyled = styled(InputBase)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.15)",
  padding: "5px 10px 5px 40px",
  color: "white",
  borderRadius: theme.shape.borderRadius,
}));

export { BaseInputStyled, BaseInputWrapped };
