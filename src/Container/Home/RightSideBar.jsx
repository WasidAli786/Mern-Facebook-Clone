import React from "react";
import { RightBarPaperStyled } from "./styled";
import { Scrollbars } from "react-custom-scrollbars";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const RightSideBar = () => {
  return (
    <>
      <RightBarPaperStyled elevation={4}>
        <Scrollbars
          autoHeight
          autoHide
          autoHeightMin={"86vh"}
          // style={{ padding: "0 0 20px 0" }}
        >
          <Typography variant="h6" ml={2} my={2}>
            Related Posts
          </Typography>
          <Divider />
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src="/images/user.jpg"
                sx={{ border: "2px solid #0A6046" }}
              />
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="200"
            image="/images/bg1.jpg"
            alt="Not found!!"
          />
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src="/images/user.jpg"
                sx={{ border: "2px solid #0A6046" }}
              />
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="200"
            image="/images/bg1.jpg"
            alt="Not found!!"
          />
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src="/images/user.jpg"
                sx={{ border: "2px solid #0A6046" }}
              />
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="200"
            image="/images/bg1.jpg"
            alt="Not found!!"
          />
        </Scrollbars>
      </RightBarPaperStyled>
    </>
  );
};

export default RightSideBar;
