'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ControlBar from "../components/control.bar";
import { usePathname } from 'next/navigation';
import { GetUserInfo } from "../services/users";
import { EvaluateResponse } from "../utils/requestEvaluator";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setIsLogin( pathname === '/signin' );
    setIsSignUp( pathname === '/signup' );
  }, [pathname]);

  useEffect(() => {

    if (!isLogin && !isSignUp) {
      GetUserInfo().then((response) => {
        setUsername(response.firstname);
      }).catch((error) => {
        const e = EvaluateResponse(error);
        if (e !== "") {
          router.push(e);
        }
      });
    }

  }, [isLogin, isSignUp]);
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="fixed bottom-0 w-full">
        { isLogin && (<ControlBar
          username={""}
          mainAction={ { name: "Signup", href: "/signup" } }  
        />)}

        { isSignUp && (<ControlBar
          username={""}
          mainAction={ { name: "Login", href: "/signin" } }  
        />)}

        { !isLogin && !isSignUp && (<ControlBar
          username={username}
          mainmenu={true}
        />)}
        </div>   
      </body>
    </html>
  );
}