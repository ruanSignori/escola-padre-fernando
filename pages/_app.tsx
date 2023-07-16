import "@/styles/index.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { NavContainer } from "@/components/NavContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NavContainer />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
