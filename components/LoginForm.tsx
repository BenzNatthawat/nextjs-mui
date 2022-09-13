import type { NextPage } from "next";
import React, { useState, useReducer } from "react";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
const { motion } = require("framer-motion");
import Link from "next/link";
import { useRouter } from "next/router";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginForm: NextPage = () => {
  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any): any => ({ ...state, ...newState }),
    {
      username: "",
      password: "",
    }
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleInput = (evt: any): void => {
    const { target }: any = evt;
    const name = target.name;
    const newValue = target.value;
    setFormInput({ [name]: newValue });
  };
  const router = useRouter();

  const handleSubmit = (evt: any): void => {
    evt.preventDefault();
    setIsSubmitting(true);

    const data = { formInput };
    console.log(data);
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        component={motion.div}
        animate={{
          transition: {
            staggerChildren: 0.55,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={animate}
        >
          <TextField
            fullWidth
            autoComplete="username"
            type="text"
            label="User Name"
            name="username"
            onChange={handleInput}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            onChange={handleInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <RemoveRedEye /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={animate}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          >
            <FormControlLabel control={<Checkbox />} label="Remember me" />

            <Link href="#">Forgot password?</Link>
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            {isSubmitting ? "loading..." : "Login"}
          </LoadingButton>
        </Box>
      </Box>
    </form>
  );
};

export default LoginForm;
