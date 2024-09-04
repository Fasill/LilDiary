import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans,fontMono } from "@/config/fonts";
import component from "@/components/index";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/assets/navbar/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={`min-h-screen bg-background font-sans antialiased ${fontMono.variable}`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div 
            className="relative flex flex-col h-screen"
            >
            <component.Navbar/>
            <main 
            // className="container mx-auto max-w-7xl pt-16 px-6 flex-grow"
              >
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}