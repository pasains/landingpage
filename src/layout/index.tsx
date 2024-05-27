import React, { ReactNode } from 'react';
import { Bottom } from '../container/bottom';
import { Heading } from '../container/heading';

interface LayoutProps {
  children: ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <div>
    <header>
    <Heading />
    </header>
    <body>
    {children}
    </body>
    <footer>
    <Bottom />
    </footer>
    </div>
  )
}
