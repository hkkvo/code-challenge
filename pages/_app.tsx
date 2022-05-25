import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme, { getDesignTokens } from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { createTheme, PaletteMode } from "@mui/material";
import { Page } from "../types/page";
import { ILayoutProps } from "../types/component";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type Props = MyAppProps & {
  Component: Page;
};

const EmptyLayout: React.FC<ILayoutProps> = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

export default function MyApp(props: Props) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const Layout = Component.layout ? Component.layout : EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout mode={mode} setMode={setMode}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
