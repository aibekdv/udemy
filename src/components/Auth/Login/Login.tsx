import React from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import googleIcon from "@/assets/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignIn } from "@/store/user/slice";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/user/selector";

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status } = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      dispatch(SignIn(data));
      status === "success" && navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3, px: 2 }}>
      <Box
        sx={{
          maxWidth: 380,
          width: "100%",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Log in to your Udemy account
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            borderRadius: 0,
            borderColor: "black",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            textTransform: "inherit",
            fontSize: 16,
            pl: 1.4,
            height: 56,
            "&:hover": {
              borderColor: "black",
            },
          }}
        >
          <Box component="img" src={googleIcon} sx={{ pr: 1 }} />
          Continue with Google
        </Button>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit(onSubmit)}
        >
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
            {...register("email", { required: true })}
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
            {...register("password", { required: true })}
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
            Log in
          </Button>
        </Box>

        <Typography sx={{ textAlign: "center", mt: 2 }}>
          or &nbsp;
          <Typography
            component={Link}
            to="/forgot-possword"
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
            Forgot password
          </Typography>
        </Typography>

        <Divider sx={{ mt: 2 }} />
        <Typography sx={{ textAlign: "center", mt: 2 }}>
          Don't have an account? &nbsp;
          <Typography
            component={Link}
            to="/user/register"
            variant="subtitle1"
            sx={{
              my: 1,
              color: "secondary.main",
              fontWeight: 600,
              pb: 0.2,
              borderBottom: 1.5,
              borderColor: "secondary.main",
            }}
          >
            Sign up
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
