import "@/styles/index.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { NavContainer } from "@/components/NavContainer";
import { queryClient } from "@/services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NavContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
