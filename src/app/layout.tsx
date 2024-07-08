import React from 'react'

import { Container } from '@/app/components/container'
import { Providers } from '@/app/components/providers'
import type { LayoutProps } from '@/lib/next'

const RootLayout: React.FC<LayoutProps> = ({ children }) => (
  <Providers>
    <Container>
      <header></header>

      <main>
        {children}
      </main>

      <footer></footer>
    </Container>
  </Providers>
)

export default RootLayout
