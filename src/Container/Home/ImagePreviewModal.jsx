import React from "react";
import { Modal } from "@mui/material";
import { ImagePreviewModalStyled } from "./styled";

const ImagePreviewModal = ({
  isImagePreviewModalOpen,
  setIsImagePreviewModalOpen,
}) => {
  const handleClose = () => setIsImagePreviewModalOpen(false);

  return (
    <>
      <Modal
        open={isImagePreviewModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ImagePreviewModalStyled>
          <img src="/images/bg1.jpg" alt="" />
        </ImagePreviewModalStyled>
      </Modal>
    </>
  );
};

export default ImagePreviewModal;
