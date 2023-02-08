import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterTeacher: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3, px: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 380,
          width: "100%",
        }}
        component="form"
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Sign up and start learning
        </Typography>
        <TextField
          type="text"
          sx={{
            mt: 1,
            "& .MuiFormLabel-root": {
              fontWeight: 600,
              fontSize: 14,
              color: "black",
            },
            "& .MuiInputBase-root": {
              border: 1,
              borderRadius: 0,
              bgcolor: "white",
              "&:hover": { bgcolor: "white" },
              "&.Mui-focused": {
                bgcolor: "white",
              },
              "&:before": {
                border: "none !important",
              },
              "&:after": {
                border: 0,
              },
            },
          }}
          color="secondary"
          label="Full name"
          variant="filled"
        />
        <TextField
          type="email"
          sx={{
            mt: 1,
            "& .MuiFormLabel-root": {
              fontWeight: 600,
              fontSize: 14,
              color: "black",
            },
            "& .MuiInputBase-root": {
              border: 1,
              borderRadius: 0,
              bgcolor: "white",
              "&:hover": { bgcolor: "white" },
              "&.Mui-focused": {
                bgcolor: "white",
              },
              "&:before": {
                border: "none !important",
              },
              "&:after": {
                border: 0,
              },
            },
          }}
          color="secondary"
          label="Email"
          variant="filled"
        />
        <TextField
          type="password"
          sx={{
            mt: 1,
            "& .MuiFormLabel-root": {
              fontWeight: 600,
              fontSize: 14,
              color: "black",
            },
            "& .MuiInputBase-root": {
              border: 1,
              borderRadius: 0,
              bgcolor: "white",
              "&:hover": { bgcolor: "white" },
              "&.Mui-focused": {
                bgcolor: "white",
              },
              "&:before": {
                border: "none !important",
              },
              "&:after": {
                border: 0,
              },
            },
          }}
          color="secondary"
          label="Password"
          variant="filled"
        />
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          sx={{
            mt: 2,
            textTransform: "inherit",
            fontSize: 16,
            fontWeight: 600,
            color: "white",
            border: 0,
            py: 1.2,
            borderRadius: 0,
          }}
        >
          Sign up
        </Button>

        <Typography
          component={Link}
          to="/login"
          variant="subtitle1"
          sx={{
            my: 1,
            textAlign: "center",
            color: "secondary.main",
            textDecoration: "undreline",
          }}
        >
          Already have an account?
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterTeacher;
