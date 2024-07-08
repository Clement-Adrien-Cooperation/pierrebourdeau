'use client'

import React from 'react'

import { useI18n } from '@/i18n/client'

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { currentLocale } = useI18n()

  return (
    <html lang={currentLocale}>
      <body>
        {children}
      </body>
    </html>
  )
}
