import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createEmotionCache from "../utility/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
import "../styles/globals.css";
const { AnimatePresence } = require("framer-motion");
import styled from "@emotion/styled";
import { LocalizationProvider } from "@mui/x-date-pickers";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const RootStyle = styled("div")({
  background: "rgb(235 235 235)",
});
const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <AnimatePresence>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <RootStyle>
              <Component {...pageProps} />
            </RootStyle>
          </LocalizationProvider>
        </AnimatePresence>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
