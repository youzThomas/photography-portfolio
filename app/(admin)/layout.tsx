import '../../styles/globals.css';

export const metadata = {
  title: 'Halcyon | Studio',
  description: 'Thomas You photography collection management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
