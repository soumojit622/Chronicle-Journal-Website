import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Chronicle | Your Personal Journal",
  description: "Capture your thoughts, memories, and moments with Chronicle.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50`}
        >
          <div className="inset-0 bg-[url('/bg.jpg')] opacity-50 fixed -z-10" />
          {/* HEADER */}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
