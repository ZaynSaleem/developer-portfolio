import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import Footer from "@/components/footer/footer";
import AnimatedStarsCanva from "@/components/animatedStarsCanva/animatedStarsCanva";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins-latin",
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700", "800"],
});

export const metadata = {
  title: "Zayn Developer Portfolio",
  description: "Zayn's Developer porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.className} antialiased bg-[#05051e] mx-auto`}
      >
        <AnimatedStarsCanva />
        <Header />
        {children}
        <Footer className="z-50" />
      </body>
    </html>
  );
}
