import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const Register = () => {
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
              label="Enter your name"
              variant="standard"
              name="name"
              fullWidth
              {...register("name", {
                required: "This field is required",
              })}
              helperText={
                <span style={{ color: "red" }}>
                  {errors.name && errors.name.message}
                </span>
              }
            />
          </Grid>
          <Grid item>
            <TextField
              label="Enter your email"
              variant="standard"
              name="email"
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
              variant="standard"
              name="password"
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
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Register;
