import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, OutlinedInput } from "@mui/material";

const Search: React.FC = () => {
  return (
    <Box component="form" sx={{ width: "100%",position:"relative", mx: 2, height: "46px" }}>
      <OutlinedInput
        type="text"
        placeholder="Enter your text here..."
        color="secondary"
        sx={{
          bgcolor: "#f7f9fa",
          borderRadius: "30px",
          height: "46px",
          width: "100%",
          pl: 3,
          fontSize: 14,
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #1c1d1f !important",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          top: 0,
          left: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <SearchIcon sx={{ color: "#9e9e9e" }} />
      </Box>
    </Box>
  );
};

export default Search;
