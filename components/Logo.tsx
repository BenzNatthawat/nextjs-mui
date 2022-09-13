import type { NextPage } from "next";
import { Box } from "@mui/material";
import Link from "next/link";

const Logo: NextPage = () => {
  return (
    <Box>
      <Link href="/">
        <Box component="img" src="/logo.png" alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;