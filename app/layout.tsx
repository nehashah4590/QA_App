import './globals.css'
import Providers from './components/Providers';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ 
  subsets: ['latin'] , 
  weight: ['100','300','400'],
  preload: true,
})

interface Metadata {
  title: string;
  description: string;
  icons: string;
}

export const metadata: Metadata = {
  title: 'GPT Nepal',
  description: 'web based QA App for Nepal using transformer model',
  icons: "Group.png",
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={roboto.className}>   
          <Providers>{children}</Providers>
        </body>
    </html>
  )
}
