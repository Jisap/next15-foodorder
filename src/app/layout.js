import { Kaushan_Script, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const kaushan = Kaushan_Script({
  variable: "--font-kaushan",
  weight: ["400"],
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "JustJuicy",
  description: "Food Ordering App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${kaushan.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
