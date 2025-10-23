import "./globals.css";
import SessionWrap from "./component/SessionWrap/SessionWrap"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrap>
      <body
        className=""
      >
        {children}
      </body>
      </SessionWrap>
    </html>
  );
}
