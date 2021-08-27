import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";

import { SessionProvider } from '../_utils/session-context'
import { getSession } from '../_utils/session-store'

import { PageContextProvider } from "./usePageContext";

import './global.css'

async function hydrate() {
  const pageContext = await getPage();
  const { Page, pageProps } = pageContext;
  const session = getSession()

  ReactDOM.hydrate(
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <SessionProvider session={session} >
          <Page {...pageProps} />
        </SessionProvider>
      </PageContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

hydrate()
