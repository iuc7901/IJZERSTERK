import "../styles/globals.css";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
