import { Button, Typography, Container, Box, Card } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { NextPage } from "next";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { useRouter } from "next/router";
const ViewerPdf = dynamic(() => import("../components/ViewerPdf"), {
  ssr: false,
});

const New: NextPage = () => {
  const router = useRouter();
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
          <Typography>ฟอร์มเอกสารรับรอง</Typography>

          <Button type="submit" variant="contained" className="bg-blue-500">
            ออกใบรับรอง
          </Button>
          <Button
            variant="contained"
            onClick={() => router.push("/")}
            className="bg-blue-500"
          >
            ยกเลิก
          </Button>
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
          <ViewerPdf />
        </Card>
      </Container>
    </div>
  );
};

export default New;
