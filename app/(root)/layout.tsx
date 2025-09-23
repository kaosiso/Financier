import { ReactNode } from "react";
import "./../globals.css"; // Make sure this file includes Tailwind directives
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: ReactNode }) {

  const loggedIn = {firstName: "Kaosiso", lastName: 'JSM'}
  return (

        <main className="flex h-screen w-full font-inter" >
          <Sidebar user={loggedIn} />
          <div className="flex size-full flex-col">
            <div className="root-layout" >
              <Ima
            </div>

          </div>
          {children}
        </main>
   
  );
}
