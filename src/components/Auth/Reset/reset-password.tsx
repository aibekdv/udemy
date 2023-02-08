import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const ResetPassword:React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3, px: 2 }}>
    <Box
      sx={{
        maxWidth: 380,
        width: "100%",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
      Forgot Password
      </Typography>
      <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
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
        <Button
          variant="contained"
          color="secondary"
          type="submit"
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
          Reset Password
        </Button>
      </Box>

      <Typography sx={{ textAlign: "center", mt: 2 }}>
        or &nbsp;
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
  )
}

export default ResetPassword