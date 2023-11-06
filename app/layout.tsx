import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Titulo da LandingPage, este titulo é o que aparece na busca do google.",
  description: "Descrição que aparecer quando buscamos no Google.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} landing-page-body-styles`}>
        {children}
      </body>
    </html>
  );
}
