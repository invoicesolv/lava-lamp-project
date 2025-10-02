import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalNavbar } from "@/components/global-navbar";
import { OrganizationSchemaMarkup, WebsiteSchemaMarkup } from "@/components/schema-markup";
import { CartProvider } from "@/contexts/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tryckeget - Print on Demand Sverige | Skapa egna kläder och produkter",
  description: "Designa och tryck egna t-shirts, hoodies, telefonfodral och mer. Snabb leverans, hög kvalitet och inga minimiordrar. Börja skapa idag!",
  authors: [{ name: "Tryckeget" }],
  publisher: "Tryckeget",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://tryckeget.se",
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <meta name="google-site-verification" content="-ylxw-eNqllykX2XqGP6wS7A-OFCzYPZpTL3G2cJIS4" />
        <OrganizationSchemaMarkup />
        <WebsiteSchemaMarkup />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6VHSN8D8L9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6VHSN8D8L9');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <GlobalNavbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
