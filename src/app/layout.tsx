import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patitas — Vos atendé tu local, yo cuido a tus clientes",
  description:
    "El radar que detecta a tu cliente recurrente cuando deja de comprar y te avisa a tiempo para retenerlo. Hecho en Argentina para dueños de petshop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper font-body text-ink">{children}</body>
    </html>
  );
}
