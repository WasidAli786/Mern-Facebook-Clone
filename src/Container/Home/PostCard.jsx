import React from "react";
import { PostStyled } from "./styled";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Box } from "@mui/system";

const PostCard = () => {
  return (
    <>
      <PostStyled>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              src="/images/user.jpg"
              sx={{ border: "2px solid #0A6046" }}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="200"
          image="/images/bg1.jpg"
          alt="Not found!!"
        />
        <Box display="flex" justifyContent="space-between" p={1}>
          <Stack direction="row" alignItems="center">
            <IconButton aria-label="share">
              <ThumbUpOutlinedIcon />
            </IconButton>
            <Typography>Like</Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <IconButton aria-label="share">
              <ChatBubbleOutlineOutlinedIcon />
            </IconButton>
            <Typography>Comment</Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <IconButton aria-label="share">
              <ShareOutlinedIcon />
            </IconButton>
            <Typography>Share</Typography>
          </Stack>
        </Box>
      </PostStyled>
    </>
  );
};

export default PostCard;
