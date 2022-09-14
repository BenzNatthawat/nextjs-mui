import type { NextPage } from "next";
import { Box } from "@mui/material";
import Link from "next/link";

const Logo: React.FC<any> = (props: any) => {
  const { width = 100 } = props;
  return (
    <Box
      sx={{
        width: width,
      }}
    >
      <Link href="/">
        <Box component="img" src="/logo.png" alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;
