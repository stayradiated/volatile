import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { PageContextProvider } from "./usePageContext";

async function hydrate() {
  const pageContext = await getPage();
  const { Page, pageProps } = pageContext;
  ReactDOM.hydrate(
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Page {...pageProps} />
      </PageContextProvider>
    </React.StrictMode>,
    document.getElementById("page-view")
  );
}

hydrate()
