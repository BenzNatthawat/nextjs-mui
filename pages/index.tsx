import { Button, Typography, Container, Box, Card } from "@mui/material";
import Link from "next/link";
import type { NextPage } from "next";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <ResponsiveAppBar />
      <Container>
        <Card
          className="mb-6"
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
          <SearchForm />
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
          <Table />
        </Card>
      </Container>
    </div>
  );
};

export default Home;
