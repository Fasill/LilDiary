import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontMono } from "@/config/fonts";
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
      <body className={`min-h-screen bg-background font-sans antialiased ${fontMono.variable}`}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className=" flex flex-col">
            <component.Navbar/>
            <main>
              {children}
          </main>
            <component.Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}