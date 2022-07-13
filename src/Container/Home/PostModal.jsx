import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PostModalStyled } from "./styled";
import TextField from "@mui/material/TextField";
import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ImagePreviewModal from "./ImagePreviewModal";

const PostModal = ({ isModalOpen, setIsModalOpen }) => {
  const [isImagePreviewModalOpen, setIsImagePreviewModalOpen] = useState(false);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PostModalStyled pb={2}>
          <Typography variant="h6" textAlign="center" py={2}>
            Create Post
          </Typography>
          <Divider />
          <Box px={2} mt={2}>
            <Stack direction="row" alignItems="center" mb={2}>
              <Avatar
                alt="Remy Sharp"
                src="/images/user.jpg"
                sx={{ height: 30, width: 30 }}
              />
              <Typography variant="subtitle1" ml={2}>
                John Doe
              </Typography>
            </Stack>
            <TextField
              placeholder="What's on your mind?"
              variant="standard"
              fullWidth
              multiline
              rows={4}
            />
            <Stack spacing={2} mt={2}>
              <Button
                startIcon={<CloudUploadIcon />}
                variant="outlined"
                fullWidth
                onClick={() => setIsImagePreviewModalOpen(true)}
              >
                Upload Photo
              </Button>
              <Button variant="contained" fullWidth>
                Post
              </Button>
            </Stack>
          </Box>
        </PostModalStyled>
      </Modal>
      <ImagePreviewModal
        isImagePreviewModalOpen={isImagePreviewModalOpen}
        setIsImagePreviewModalOpen={setIsImagePreviewModalOpen}
      />
    </>
  );
};

export default PostModal;
