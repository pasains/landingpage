import React, { ReactNode } from "react";
import { Bottom } from "../container/bottom";
import Heading from "../container/heading";
import ScrollToTopButton from "../components/scrollbutton";
import RefreshTop from "../components/refreshtop";

interface LayoutProps {
  children: ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <RefreshTop />
      <header>
        <Heading />
      </header>
      <body>{children}</body>
      <footer>
        <ScrollToTopButton />
        <Bottom />
      </footer>
    </div>
  );
}
