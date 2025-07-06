import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import NavBar from "@/components/NavBar";
import i18n from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gabriel Z Portfolio",
  description: "Front End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
      <NavBar />
        {children}
      </body>
    </html>
  );
}
