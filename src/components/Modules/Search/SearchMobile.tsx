import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchMobile: React.FC<Props> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <AppBar sx={{ position: "relative", bgcolor: "white", boxShadow: 0 }}>
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <SearchIcon sx={{ color: "#1c1d1f" }} />
          <Box
            component="form"
            sx={{ width: "100%", position: "relative", mr: 2, height: "46px" }}
          >
            <TextField
              type="text"
              placeholder="Enter your text here..."
              color="secondary"
              autoFocus
              sx={{
                border: 0,
                width: "100%",
                "& .MuiInputBase-root": {
                  height: "46px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none !important",
                },
              }}
            />
          </Box>
          <IconButton edge="start" onClick={handleClose} aria-label="close">
            <CloseIcon sx={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Phone ringtone" secondary="Titania" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default SearchMobile;
