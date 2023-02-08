import React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { MobileHeader } from "./Mobile";
import { DesktopHeader } from "./Desktop";

const Navbar: React.FC = () => {
  const { width } = useWindowSize();

  return width > 815 ? <DesktopHeader /> : <MobileHeader />;
};

export default Navbar;
