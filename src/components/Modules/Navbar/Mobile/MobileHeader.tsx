import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { SearchMobile as Search } from "../../Search";
import MobileDrawer from "./MobileDrawer";

const MobileHeader: React.FC = () => {
  const [openSearch, setOpenSearch] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setOpenMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Box
              component="img"
              src={logo}
              sx={{ maxWidth: 80, width: "100%" }}
            />
          </Link>
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              aria-label="search"
              onClick={() => setOpenSearch(true)}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
            >
              <ShoppingCartOutlined />
            </IconButton>
          </Box>
          {openSearch && <Search open={openSearch} setOpen={setOpenSearch} />}
        </Toolbar>
      </AppBar>
      <MobileDrawer open={openMenu} setOpen={setOpenMenu} />
    </Box>
  );
};

export default MobileHeader;
