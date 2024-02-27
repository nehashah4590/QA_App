import Navbar from "../components/Nabvar";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <main>
        <div className="flex bg-slate-600">
            <div className=" ">
                <Navbar/>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    </main>  

  )
}
