import React from "react";
import { Box, Button, Typography } from "@mui/material";
import teaching from "@/assets/teaching.jpg";

const TeachingInfo: React.FC = () => {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={teaching}
          sx={{
            height: { xs: 300, sm: 400, md: 500, lg: 600 },
            objectFit: "cover",
            maxWidth: "100%",
            verticalAlign: "middle",
            aspectRatio: "auto 1800 / 600",
          }}
        />
        <Box
          sx={{
            position: { xs: "relative", sm: "absolute" },
            transform: { xs: "", sm: `translate(-50%,-50%)` },
            width: "100%",
            paddingLeft: { xs: "0", sm: "46px" },
            top: { xs: "", sm: "50%" },
            left: { xs: "", sm: "50%" },
          }}
        >
          <Box sx={{ px: { xs: 2, sm: 0 }, py: { xs: 2, sm: 0 } }}>
            <Typography
              variant="h3"
              fontWeight={600}
              lineHeight={1.15}
              sx={{
                width: { xs: "100%", sm: "325px" },
                fontSize: { xs: 36, sm: "auto" },
              }}
            >
              Come teach with us
            </Typography>
            <Typography
              sx={{
                width: { xs: "100%", sm: "325px" },
                fontSize: { xs: 14, sm: 19 },
                whiteSpace: "pre-line",
                lineHeight: 1.4,
                mt: 1,
              }}
            >
              Become an instructor and change lives — including your own
            </Typography>
            <Button
              variant="contained"
              color="inherit"
              sx={{
                color: "white",
                bgcolor: "#000",
                width: { xs: "100%", sm: "325px" },
                mt: 2,
                py: 1.5,
                textTransform: "inherit",
                fontSize: "16px",
                borderRadius: 0,
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "black",
                },
              }}
            >
              Get started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TeachingInfo;
