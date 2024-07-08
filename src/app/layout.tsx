import React from 'react'

import { Html } from '@/app/components/html'
import { Providers } from '@/app/components/providers'
import type { LayoutProps } from '@/lib/next'

const RootLayout: React.FC<LayoutProps> = ({ children }) => (
  <Providers>
    <Html>
      <body>
        <header></header>

        <main>
          {children}
        </main>

        <footer></footer>
      </body>
    </Html>
  </Providers>
)

export default RootLayout
