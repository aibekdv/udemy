import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { $api } from "@/utils/config/base";

const RegisterUser: React.FC = () => {
  const fetchLog = async () => {
    try {
      const { data } = await $api.get("categories");
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    // fetchLog();
  }, []);

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
          label="First name"
          required
          variant="filled"
        />
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
          label="Last name"
          required
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
          required
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
          required
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
          label="Password confirm"
          variant="filled"
          required
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
            border: 0,
            py: 1.2,
            borderRadius: 0,
          }}
        >
          Sign up
        </Button>

        <Typography sx={{ textAlign: "center", mt: 2 }}>
          Already have an account? &nbsp;
          <Typography
            component={Link}
            to="/user/login"
            variant="subtitle1"
            sx={{
              my: 1,
              pb: 0.2,
              borderBottom: 1.5,
              color: "secondary.main",
              borderColor: "secondary.main",
              fontWeight: 600,
            }}
          >
            Log in
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterUser;
