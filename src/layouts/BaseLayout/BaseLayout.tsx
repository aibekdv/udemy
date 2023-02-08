import React, { FC } from "react";
import { Navbar } from "@/components/Modules/Navbar";
import { Footer } from "@/components/Modules/Footer";
import { Box } from "@mui/material";

interface IBaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: FC<IBaseLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Box component="main" sx={{minHeight:"calc(100vh - 100px)"}}>{children}</Box>
      <Footer />
    </React.Fragment>
  );
};

export default BaseLayout;
