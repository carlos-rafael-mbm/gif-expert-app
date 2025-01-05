import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GifExpertApp from "./GifExpertApp";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/global-styles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GifExpertApp />
    </ThemeProvider>
  </StrictMode>
);
