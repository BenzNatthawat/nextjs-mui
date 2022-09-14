import { Button, Typography, Container, Box, Card } from "@mui/material";
import Link from "next/link";
import type { NextPage } from "next";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Table from "../components/Table";

const ChangePassword: NextPage = () => {
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
          <Typography>ChangePassword</Typography>
        </Card>
      </Container>
    </div>
  );
};

export default ChangePassword;
