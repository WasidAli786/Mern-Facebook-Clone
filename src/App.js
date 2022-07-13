import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { Theme } from "./Config/Theme";
import NavBar from "./Components/Header/NavBar";
import { Route, Routes } from "react-router-dom";
import AuthTabs from "./Container/Auth/AuthTabs";
import HomeSection from "./Container/Home/HomeSection";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <NavBar />
        <Box mt={8}>
          <Routes>
            <Route path="/login" element={<AuthTabs />} />
            <Route path="/" element={<HomeSection />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
