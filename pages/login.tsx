import { Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { NextPage } from "next";
import Logo from "../components/Logo";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
const { motion } = require("framer-motion");

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Login: NextPage = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <ContentStyle>
        <HeadingStyle component={motion.div} {...fadeInUp}>
          <Logo />
          <Typography sx={{ color: "text.secondary", mb: 2 }}>
            Login to your account
          </Typography>
        </HeadingStyle>

        <LoginForm />
      </ContentStyle>
    </Container>
  );
};

export default Login;
