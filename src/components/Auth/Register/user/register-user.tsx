import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/store";
import { SignUp } from "@/store/user/slice";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/user/selector";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
};

const RegisterUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const { successMessage, errorMessage, status } = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.password == data.password2) {
      dispatch(SignUp(data));
      reset(data);
    }
  };

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
        onSubmit={handleSubmit(onSubmit)}
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
          variant="filled"
          error={errors.first_name ? true : false}
          helperText={errors.first_name?.message}
          {...register("first_name", {
            required: true,
            minLength: {
              value: 3,
              message: "First name must have at least 3 characters",
            },
            pattern: {
              value: /^[a-zA-Zа-яА-я]+$/,
              message: "Sorry this Udemy can only handle names with characters",
            },
          })}
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
          variant="filled"
          helperText={errors.last_name?.message}
          error={errors.last_name ? true : false}
          {...register("last_name", {
            required: true,
            minLength: {
              value: 3,
              message: "Last name must have at least 3 characters",
            },
            pattern: {
              value: /^[a-zA-Zа-яА-я]+$/,
              message: "Sorry this Udemy can only handle names with characters",
            },
          })}
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
          helperText={errors.email?.message}
          error={errors.email ? true : false}
          {...register("email", {
            required: true,
            minLength: {
              value: 8,
              message: "Email must have",
            },
          })}
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
          helperText={errors.password?.message}
          error={errors.password ? true : false}
          {...register("password", {
            required: "You must specify a password",
            minLength: {
              value: 8,
              message:
                "The password must consist of 8 or more characters of the Latin alphabet, contain upper and lower case letters, numbers.",
            },
            pattern: {
              value: /^(?=.*\d).+$/,
              message:
                "The password must consist of 8 or more characters of the Latin alphabet, contain upper and lower case letters, numbers.",
            },
          })}
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
          error={errors.password2 ? true : false}
          helperText={errors.password2?.message}
          {...register("password2", {
            required: "You must specify a password",
            minLength: {
              value: 8,
              message:
                "The password must consist of 8 or more characters of the Latin alphabet, contain upper and lower case letters, numbers.",
            },
            pattern: {
              value: /^(?=.*\d).+$/,
              message:
                "The password must consist of 8 or more characters of the Latin alphabet, contain upper and lower case letters, numbers.",
            },
            validate: (value, formValue) => value === formValue.password,
          })}
        />
        {successMessage && (
          <Typography variant="subtitle1" color="success.main">
            {successMessage}
          </Typography>
        )}
        {errorMessage && (
          <Typography variant="subtitle1" color="error.main">
            {errorMessage}
          </Typography>
        )}
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
          disabled={status === "loading"}
        >
          Sign up
        </Button>

        <Typography sx={{ textAlign: "center", mt: 2 }}>
          Already have an account? &nbsp;
          <Typography
            component={Link}
            to="/login"
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
