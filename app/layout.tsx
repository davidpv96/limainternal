import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "LimaInternal - Contenido Premium",
  description: "Tu plataforma de contenido premium exclusivo",
  icons: {
    icon: '/Favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased bg-black text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
