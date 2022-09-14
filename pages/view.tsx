import { Button, Typography, Container, Box, Card } from "@mui/material";
import Link from "next/link";
import type { NextPage } from "next";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Table from "../components/Table";

const View: NextPage = () => {
  return (
    <div className="h-screen">
      <ResponsiveAppBar />
      <Container>
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
          PDF Viewer
        </Card>
      </Container>
    </div>
  );
};

export default View;
