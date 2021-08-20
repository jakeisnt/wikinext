import "../styles/globals.css";

import ThemeProvider from "../components/Provider";

// this file wraps all of the other files,
// intercepting their components and page props
//
// can be used to apply global settings
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
