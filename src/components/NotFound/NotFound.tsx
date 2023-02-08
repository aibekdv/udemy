import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import error from "@/assets/error.jpg";

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 3,
      }}
    >
      <Box
        sx={{
          maxWidht: "300px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Box component="img" src={error} sx={{ maxWidth: "100%" }} />
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontSize: { xs: 24, md: 34 } }}
        >
          We can’t find the page you’re looking for
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: { xs: 3, md: 2 }, fontSize: { xs: 14, md: 16 } }}
          LinkComponent="a"
          href="/"
        >
          <ArrowBackIcon sx={{ mr: 1 }} /> Back to home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
