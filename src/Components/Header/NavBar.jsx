import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import NavbarDrawer from "./Drawer";
import { Link } from "react-router-dom";
import { NavbarBoxStyled } from "./styled";
import { Fab, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "./UserMenu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CreateIcon from "@mui/icons-material/Create";
import PostModal from "../../Container/Home/PostModal";
import AddIcon from "@mui/icons-material/Add";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <NavbarBoxStyled sx={{ flexGrow: 1 }}>
        <AppBar position="relative" color="transparent">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/">
                <Fab color="primary" aria-label="add" size="small">
                  <Typography variant="h6">f</Typography>
                </Fab>
              </Link>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Button
                  variant="contained"
                  onClick={() => setIsModalOpen(true)}
                >
                  <CreateIcon /> create a post
                </Button>
                <Stack direction="row" alignItems="center">
                  <Fab
                    color="primary"
                    aria-label="add"
                    size="small"
                    onClick={handleClick}
                  >
                    <AccountCircle />
                  </Fab>
                  <Typography ml={1}>Wasid ali</Typography>
                </Stack>
              </Stack>
            </Box>
            <IconButton color="inherit" onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon sx={{ display: { xs: "block", md: "none" } }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </NavbarBoxStyled>
      <UserMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
      <NavbarDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <PostModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: 20,
          display: { xs: "block", md: "none" },
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default NavBar;
