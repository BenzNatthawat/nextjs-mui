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
import { useForm } from "react-hook-form";

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
  const router = useRouter();
  const { register, handleSubmit, reset, formState } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any): void => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            my: 2
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={animate}
        >
          <TextField
            {...register("username")}
            fullWidth
            autoComplete="username"
            type="text"
            label="User Name"
            name="username"
          />

          <TextField
            {...register("password")}
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
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
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            className="bg-blue-500"
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
