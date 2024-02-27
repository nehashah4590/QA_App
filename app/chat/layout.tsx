import Navbar from "../components/Nabvar";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <main>
        <div className="flex">
            <div className="w-[20vw] bg-red-500">
                <Navbar/>
            </div>
            {children}
        </div>
    </main>  

  )
}
