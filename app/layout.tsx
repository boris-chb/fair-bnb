import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";

export const metadata = {
  title: "FairBnb",
  description: "Airbnb clone",
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal actionLabel="Submit" title="hi bro" isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
