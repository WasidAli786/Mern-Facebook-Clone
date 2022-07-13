import React from "react";
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
    </>
  );
};

export default HomeSection;
