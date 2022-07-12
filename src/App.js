import React from "react";
import { ThemeProvider } from "@mui/material";
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
        <Routes>
          <Route path="/login" element={<AuthTabs />} />
          <Route path="/" element={<HomeSection />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
