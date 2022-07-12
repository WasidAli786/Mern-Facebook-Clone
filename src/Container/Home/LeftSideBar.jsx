import React from "react";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CollectionsIcon from "@mui/icons-material/Collections";
import { LeftBarPaperStyled } from "./styled";
import { Scrollbars } from "react-custom-scrollbars";

const LeftSideBar = () => {
  return (
    <>
      <LeftBarPaperStyled elevation={4}>
        <Scrollbars autoHeight autoHide autoHeightMin={"86vh"}>
          <List>
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src="/images/user.jpg" />
                </ListItemIcon>
                <ListItemText primary="Wasid Ali" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src="/images/user.jpg" />
                </ListItemIcon>
                <ListItemText primary="Ahmad Ali" />
              </ListItemButton>
            </ListItem>
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src="/images/user.jpg" />
                </ListItemIcon>
                <ListItemText primary="Ammir Ali" />
              </ListItemButton>
            </ListItem>
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src="/images/user.jpg" />
                </ListItemIcon>
                <ListItemText primary="Umer Ali" />
              </ListItemButton>
            </ListItem>
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src="/images/user.jpg" />
                </ListItemIcon>
                <ListItemText primary="Anwar Ali" />
              </ListItemButton>
            </ListItem>
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src="/images/user.jpg" />
                </ListItemIcon>
                <ListItemText primary="Asif Ali" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem key={2} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem key={3} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem key={4} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CollectionsIcon />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
              </ListItemButton>
            </ListItem>
            <ListItem key={4} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CollectionsIcon />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
              </ListItemButton>
            </ListItem>
            <ListItem key={4} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CollectionsIcon />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
              </ListItemButton>
            </ListItem>
            <ListItem key={4} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CollectionsIcon />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
              </ListItemButton>
            </ListItem>
            <ListItem key={4} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CollectionsIcon />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
              </ListItemButton>
            </ListItem>
            <ListItem key={4} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CollectionsIcon />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
              </ListItemButton>
            </ListItem>
            <ListItem key={4} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CollectionsIcon />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
              </ListItemButton>
            </ListItem>
          </List>
        </Scrollbars>
      </LeftBarPaperStyled>
    </>
  );
};

export default LeftSideBar;
