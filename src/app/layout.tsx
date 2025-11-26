import type { Metadata } from "next";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Mbokrum - Linktree Page",
  description: "Mbokrum hadir membawa hidangan praktis penuh cita rasa untuk melengkapi setiap acara spesial kalian!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  return (
    <html lang="en">
      <body style={{ fontFamily: 'DM Sans, sans-serif' }}>
        {pixelId && <MetaPixel pixelId={pixelId} />}
        {children}
      </body>
    </html>
  );
}

