import { Box, Card, Paper, styled } from "@mui/material";

const HomeSectionStyled = styled(Box)(({ theme }) => ({
  border: "1px solid red",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 0",
}));

const LeftBarStyled = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "0 0 0 15px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
const LeftBarPaperStyled = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.rounded,
}));

const CenterStyled = styled("div")(({ theme }) => ({
  margin: "0 15px",
  [theme.breakpoints.up("xl")]: {
    maxWidth: "600px",
  },
  [theme.breakpoints.down("xl")]: {
    maxWidth: "450px",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const RightBarStyled = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "0 15px 0 0",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const RightBarPaperStyled = styled(Paper)(({ theme }) => ({
  width: "100%",
  borderRadius: theme.shape.rounded,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const UserSliderStyled = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.rounded,
  ".mySwiper": {
    marginTop: "10px",
    ".swiper-slide": {
      height: "250px",
      width: "100%",
      position: "relative",
      ".slider__bg": {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderRadius: theme.shape.rounded,
      },
    },
  },
}));

const UserImageBoxStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  background: "rgba(0, 0, 0, 0.3)",
  borderRadius: theme.shape.rounded,
  zIndex: 999,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px 0",
  "&>img": {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid white",
    marginLeft: "20px",
  },
}));

const PostStyled = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.rounded,
  marginTop: "20px",
}));

export {
  HomeSectionStyled,
  LeftBarStyled,
  CenterStyled,
  RightBarStyled,
  UserSliderStyled,
  UserImageBoxStyled,
  PostStyled,
  LeftBarPaperStyled,
  RightBarPaperStyled,
};
