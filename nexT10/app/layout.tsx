import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";


export const metadata: Metadata = {
  title: "Furqan Blog's",
  description: "Create by furqan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="dark:bg-slate-800"
      >

        <Navbar/>
        <MyProfilePic/>
        {children}
      </body>
    </html>
  );
}
