import React, { useState } from "react";
import { Paper, Tab, Tabs } from "@mui/material";
import { AuthStyled } from "./styled";
import Login from "./Login";
import Register from "./Register";

const AuthTabs = () => {
  const [value, setValue] = useState(0);

  const handleTabsChange = (_, val) => {
    setValue(val);
  };
  return (
    <>
      <AuthStyled py={8}>
        <Paper elevation={8}>
          <Tabs
            value={value}
            onChange={handleTabsChange}
            variant="fullWidth"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Register />
          </TabPanel>
        </Paper>
      </AuthStyled>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

export default AuthTabs;
