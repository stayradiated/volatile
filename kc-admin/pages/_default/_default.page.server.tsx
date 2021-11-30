import ReactDOMServer from "react-dom/server";
import React from "react";
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { getPageTitle } from "./getPageTitle";
import type { PageContext } from "./types";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import { PageContextProvider } from "./usePageContext";

export { render };
export { passToClient };

const passToClient = ["pageProps", "documentProps", "urlPathname", "routeParams"] as const;

function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext;
  const pageContent = ReactDOMServer.renderToString(
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Page {...pageProps} />
      </PageContextProvider>
    </React.StrictMode>
  );

  const title = getPageTitle(pageContext);

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageContent)}</div>
      </body>
    </html>`;
}
