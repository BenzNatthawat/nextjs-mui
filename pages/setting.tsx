import { Button, Typography, Container, Box, Card } from "@mui/material";
import Link from "next/link";
import type { NextPage } from "next";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import TypographyMenu from "../components/TypographyMenu";

const Setting: NextPage = () => {
  return (
    <div className="h-screen">
      <ResponsiveAppBar />
      <Container>
        <TypographyMenu />
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
          <Typography>Welcome Back</Typography>

          <Link href="/login" passHref>
            <Button size="large" variant="contained">
              Log out
            </Button>
          </Link>
        </Card>
      </Container>
    </div>
  );
};

export default Setting;
