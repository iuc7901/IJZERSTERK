import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SnackbarProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
