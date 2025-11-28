import type { Metadata } from "next";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Mbokrum - Linktree Page",
  description: "Satu Makanan Untuk Berbagai Acara!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'DM Sans, sans-serif' }}>
        <MetaPixel pixelId="925593398355227" />
        {children}
      </body>
    </html>
  );
}

