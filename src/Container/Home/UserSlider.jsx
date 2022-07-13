import React from "react";
import { Box, Typography } from "@mui/material";
import { UserImageBoxStyled, UserSliderStyled } from "./styled";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const UserSlider = () => {
  return (
    <>
      <UserSliderStyled elevation={8}>
        <Box px={4} py={2}>
          <Typography variant="h6">Stories</Typography>
          <Swiper
            // navigation={true}
            // modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              450: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/images/bg1.jpg" className="slider__bg" alt="" />
              <UserImageBoxStyled>
                <img src="/images/user.jpg" alt="" />
                <Typography variant="h6" textAlign="center" color="white">
                  Wasid ali
                </Typography>
              </UserImageBoxStyled>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bg2.jpg" className="slider__bg" alt="" />
              <UserImageBoxStyled>
                <img src="/images/user.jpg" alt="" />
                <Typography variant="h6" textAlign="center" color="white">
                  Wasid ali
                </Typography>
              </UserImageBoxStyled>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bg3.jpg" className="slider__bg" alt="" />
              <UserImageBoxStyled>
                <img src="/images/user.jpg" alt="" />
                <Typography variant="h6" textAlign="center" color="white">
                  Wasid ali
                </Typography>
              </UserImageBoxStyled>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bg4.jpg" className="slider__bg" alt="" />
              <UserImageBoxStyled>
                <img src="/images/user.jpg" alt="" />
                <Typography variant="h6" textAlign="center" color="white">
                  Wasid ali
                </Typography>
              </UserImageBoxStyled>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bg5.jpg" className="slider__bg" alt="" />
              <UserImageBoxStyled>
                <img src="/images/user.jpg" alt="" />
                <Typography variant="h6" textAlign="center" color="white">
                  Wasid ali
                </Typography>
              </UserImageBoxStyled>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bg1.jpg" className="slider__bg" alt="" />
              <UserImageBoxStyled>
                <img src="/images/user.jpg" alt="" />
                <Typography variant="h6" textAlign="center" color="white">
                  Wasid ali
                </Typography>
              </UserImageBoxStyled>
            </SwiperSlide>
          </Swiper>
        </Box>
      </UserSliderStyled>
    </>
  );
};

export default UserSlider;
