import React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { MobileHeader } from "./Mobile";
import { DesktopHeader } from "./Desktop";
import { useAppDispatch } from "@/store";
import { checkAuth } from "@/store/user/slice";

const Navbar: React.FC = () => {
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const refresh = localStorage.getItem("refresh");
    if (refresh !== null) {
      console.log(refresh);
      dispatch(checkAuth({ refresh: refresh }));
    }
  }, []);

  return (
    <div style={{ position: "relative", zIndex: 9999 }}>
      {width > 815 ? <DesktopHeader /> : <MobileHeader />}
    </div>
  );
};

export default Navbar;
