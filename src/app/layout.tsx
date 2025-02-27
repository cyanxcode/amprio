import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Nav from "@/components/Navbar/Nav";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Template from "./template";
import WhatsApp from "@/components/WhatsApp";
import { AppSidebar } from "@/components/app-sidebar";
import { getCookie } from "@/components/Backend";

import "./globals.css";
import {
  Italiana,
  Quicksand,
  Prata,
  Cinzel_Decorative,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Amprio",
  description: `
              Amprio is transforming the way you light up your world. Our
              innovative solutions bring both style and functionality to your
              spaces. Brighten your home, office, or outdoor areas with Amprio,
              and experience a whole new level of warmth and brilliance.
              `,
};
const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-quicksand",
});
const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Prata",
});
const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Cinzel_Decorative",
});
const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Playfair_Display",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Poppins",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${italiana.variable} ${quicksand.variable} ${prata.variable} ${cinzel.variable} ${play.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta
          name="description"
          content="
              Amprio is transforming the way you light up your world. Our
              innovative solutions bring both style and functionality to your
              spaces. Brighten your home, office, or outdoor areas with Amprio,
              and experience a whole new level of warmth and brilliance."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`overflow-x-hidden font-quicksand`}>
        <SpeedInsights />
        <Template>
          <ReactQueryProvider>
            {/*React-query context wrapper */}
            <SidebarProvider defaultOpen={false}>
              <AppSidebar />
              <Layout cookie={getCookie()}>
                <Nav />
                {/*custom context hook wrapper + contains sidebar*/}
                <div className="min-h-[100vh] w-[100vw]">
                  {children}
                  <WhatsApp />
                </div>
                <Footer />
              </Layout>
            </SidebarProvider>
          </ReactQueryProvider>
        </Template>
      </body>
    </html>
  );
}
