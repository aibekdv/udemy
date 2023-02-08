import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Typography, IconButton, Divider, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Link } from "react-router-dom";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileDrawer = ({ open, setOpen }: Props) => {
  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={() => setOpen(false)}
      sx={(theme) => ({
        "& .MuiPaper-root": {
          [theme.breakpoints.up("xs")]: {
            width: "70%",
          },
          [theme.breakpoints.up("sm")]: {
            width: "280px",
          },
        },
      })}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          pr: 1,
          py: 1,
        }}
      >
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ px: 2, display: "flex", flexDirection: "column" }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: 16,
            color: "#5624d0",
            "&:hover": {
              color: "secondary.main",
            },
          }}
          component={Link}
          to="/login"
        >
          Login
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: 16,
            color: "#5624d0",
            "&:hover": {
              color: "secondary.main",
            },
          }}
          component={Link}
          to="/signup"
        >
          Signup
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />

      <Box sx={{ display: "flex", flexDirection: "column", px: 2 }}>
        <Typography
          sx={{ fontWeight: 600, fontSize: 14, color: "#6a6f73", pt: 1 }}
        >
          Most popular
        </Typography>
        <Box
          sx={{
            "&:hover": { color: "secondary.main" },
            pt: 0.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pr: 2,
          }}
          component={Link}
          to="/development"
        >
          <Typography variant="subtitle1">Development</Typography>
          <NavigateNextIcon sx={{ width: 18, height: 18 }} />
        </Box>
        <Box
          sx={{
            "&:hover": { color: "secondary.main" },
            pt: 0.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pr: 2,
          }}
          component={Link}
          to="/bussines"
        >
          <Typography variant="subtitle1">Bussines</Typography>
          <NavigateNextIcon sx={{ width: 18, height: 18 }} />
        </Box>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box sx={{ display: "flex", flexDirection: "column", px: 2 }}>
        <Typography
          sx={{ fontWeight: 600, fontSize: 14, color: "#6a6f73", pt: 1 }}
        >
          More from Udemy
        </Typography>
        <Box
          sx={{ "&:hover": { color: "secondary.main" }, pt: 0.5 }}
          component={Link}
          to="/teaching-info"
        >
          <Typography variant="subtitle1">Udemy on Teach</Typography>
        </Box>
        <Box
          sx={{ "&:hover": { color: "secondary.main" }, pt: 0.5 }}
          component={Link}
          to="/help"
        >
          <Typography variant="subtitle1">Help</Typography>
        </Box>
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            colo: "black",
            borderColor: "black",
            borderRadius: 0,
            px: 1,
            mt: 2,
          }}
        >
          <LanguageOutlinedIcon color="inherit" sx={{ color: "black" }} />
          <Typography sx={{ ml: 1 }}>English</Typography>
        </Button>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
