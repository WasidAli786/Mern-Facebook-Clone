import React from "react";
import { Grid } from "@mui/material";
import PostCard from "./PostCard";
import UserSlider from "./UserSlider";
import {
  CenterStyled,
  HomeSectionStyled,
  RightBarStyled,
  LeftBarStyled,
} from "./styled";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const HomeSection = () => {
  return (
    <>
      <HomeSectionStyled>
        <LeftBarStyled>
          <LeftSideBar />
        </LeftBarStyled>
        <CenterStyled>
          <UserSlider />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </CenterStyled>
        <RightBarStyled>
          <RightSideBar />
        </RightBarStyled>
      </HomeSectionStyled>
      {/* <Grid container spacing={2} py={4}>
        <Grid item xs={3}>
          <LeftSideBar />
        </Grid>
        <HomeSectionStyled>
          <UserSlider />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </HomeSectionStyled>
        <Grid item xs={3}>
          <LeftSideBar />
        </Grid>
      </Grid> */}
    </>
  );
};

export default HomeSection;
