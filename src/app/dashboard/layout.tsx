import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard',
  description: 'Deeplink is a page that contains information about the content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
  
}
