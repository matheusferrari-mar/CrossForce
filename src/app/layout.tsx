import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/header";
import Footer from "../components/footer";
import SmoothScroll from "../components/smoothScroll";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata: Metadata = {
  title: "Academia Cross Force",
  description: "Site de uma rede de academias",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <SmoothScroll>
          <main className="flex-1">{children}</main>
        </SmoothScroll>
        <Footer/>
      </body>
    </html>
  );
}