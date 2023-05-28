import Layout from "@/components/common/Layout";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";

export default function App({ Component, pageProps }: AppProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    TagManager.initialize({ gtmId: "GTM-WX56LPN" });
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
