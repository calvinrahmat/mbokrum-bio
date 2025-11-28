import type { Metadata } from "next";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Mbokrum - Linktree Page",
  description: "Mbokrum berdiri sejak tahun 2019 dengan visi untuk menghadirkan kembali cita rasa tradisional yang semakin jarang ditemui di tengah pesatnya perkembangan ibu kota. 
Dengan dukungan dapur berskala komersial, kami mengolah setiap bahan baku secara higienis dan terstandar, sehingga mampu menghasilkan hidangan yang berkualitas dan konsisten. 
Mbokrum menghadirkan pilihan  paket untuk menemani beragam rangkaian acara mulai dari ulang tahun, kegiatan kantor, syukuran, pernikahan, hingga berbagai momen spesial lainnya.!",
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

