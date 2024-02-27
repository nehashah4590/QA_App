import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './components/Providers';

const inter = Inter({ subsets: ['latin'] })

interface Metadata {
  title: string;
  description: string;
  icons: string;
}

export const metadata: Metadata = {
  title: 'GPT Nepal',
  description: 'web based QA App for Nepal using transformer model',
  icons: "favicon.jpg",
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>   
          <Providers>{children}</Providers>
        </body>
    </html>
  )
}
