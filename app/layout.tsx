import "./globals.css";
import SessionWrap from "./component/SessionWrap/SessionWrap";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrap>
        <body className="">
          <Toaster />
          {children}
        </body>
      </SessionWrap>
    </html>
  );
}
