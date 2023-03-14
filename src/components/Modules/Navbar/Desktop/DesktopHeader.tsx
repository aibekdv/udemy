import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { Typography, Button, IconButton, Badge, Tooltip } from "@mui/material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Menu } from "./Menu";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Search } from "../../Search";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/user/selector";

const DesktopHeader: React.FC = () => {
  const { isAuth } = useSelector(selectUser);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar
          sx={{
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <Box component="img" src={logo} sx={{ width: 91 }} />
            </Link>
            <Menu />
          </Box>
          <Search />
          <Box
            sx={{ display: "flex", whiteSpace: "nowrap", alignItems: "center" }}
          >
            {/* Teach link to reg */}
            <Tooltip title="Teaching">
              <Typography
                variant="subtitle2"
                color="black"
                component={Link}
                to="/teaching-info"
                sx={(theme) => ({
                  ml: 1.5,
                  cursor: "pointer",
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                  "&:hover": {
                    color: "secondary.main",
                  },
                })}
              >
                Teach on Udemy
              </Typography>
            </Tooltip>
            {/* Cart icon */}
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              sx={{
                mx: 1,
                color: "black",
                "&:hover": {
                  color: "secondary.main",
                  bgcolor: "transparent",
                },
              }}
            >
              <Link to="/cart">
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </IconButton>
            {/* Auth buttons //login and signup */}
            {!isAuth && (
              <>
                <Link to="/login">
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      color: "black",
                      borderColor: "black",
                      borderRadius: 0,
                      textTransform: "inherit",
                      fontWeight: 600,
                    }}
                  >
                    Log in
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{
                      bgcolor: "black",
                      boxShadow: "none",
                      borderRadius: 0,
                      textTransform: "inherit",
                      fontWeight: 600,
                      ml: 1,
                      opacity: 0.93,
                      "&:hover": {
                        boxShadow: "none",
                        bgcolor: "black",
                        opacity: 1,
                      },
                    }}
                  >
                    Sign up
                  </Button>
                </Link>
              </>
            )}
            {/* Choose language */}
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                colo: "black",
                borderColor: "black",
                minWidth: 0,
                borderRadius: 0,
                px: 1,
                ml: 1,
              }}
            >
              <LanguageOutlinedIcon color="inherit" sx={{ color: "black" }} />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DesktopHeader;
