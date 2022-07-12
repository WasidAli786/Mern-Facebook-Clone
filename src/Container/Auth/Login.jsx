import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Grid container direction="column" spacing={4} p={4}>
          <Grid item>
            <TextField
              label="Enter your email"
              name="email"
              variant="standard"
              fullWidth
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Please enter valid email",
                },
              })}
              helperText={
                <span style={{ color: "red" }}>
                  {errors.email && errors.email.message}
                </span>
              }
            />
          </Grid>
          <Grid item>
            <TextField
              label="Enter your password"
              name="password"
              variant="standard"
              fullWidth
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password length should atleast 8 characters",
                },
              })}
              helperText={
                <span style={{ color: "red" }}>
                  {errors.password && errors.password.message}
                </span>
              }
            />
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Login;
