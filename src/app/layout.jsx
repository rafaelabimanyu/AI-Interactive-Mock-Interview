import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "AI Interactive Mock-Interview & Portofolio Builder for SMK/SNBT",
  description: "Platform simulasi wawancara interaktif berbasis suara (Web Speech API) dan pengoptimal portofolio otomatis menggunakan kecerdasan buatan (Gemini AI).",
  keywords: ["AI Mock Interview", "Portfolio Builder", "SMK", "SNBT", "Wawancara Kerja", "Beasiswa"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-violet-500/30 selection:text-violet-200">
        <div className="gradient-bg" />
        {children}
      </body>
    </html>
  );
}
