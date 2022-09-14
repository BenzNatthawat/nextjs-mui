import { Typography, Container, Box, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { NextPage } from "next";
import Logo from "../components/Logo";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
const { motion } = require("framer-motion");

const RootStyle = styled("div")({
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
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
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <Card
          sx={{
            minWidth: 300,
            padding: 3,
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            background: "#fff",
          }}
        >
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Box
              sx={{
                display: "inline-block"
              }}
            >
              <Logo width={300} />
            </Box>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>
              Login to your account
            </Typography>
          </HeadingStyle>

          <LoginForm />
        </Card>
      </Container>
    </RootStyle>
  );
};

export default Login;
