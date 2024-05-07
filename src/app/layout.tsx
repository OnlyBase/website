import { AppProvider } from "@/Context/AppContext";
import CustomSpline from "@/components/CustomSpline";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Only Base",
  description:
    "A Farcaster client that enables you to sign in with Farcaster, see & create casts, and mint any cast as an NFT. Sign in to get started.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mintcaster.thirdweb-example.com/",
    description:
      "A Farcaster client that enables you to sign in with Farcaster, see & create casts, and mint any cast as an NFT. Sign in to get started.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mintcaster",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gray-950 text-white",
          fontSans.variable
        )}
      >
        <AppProvider>
          <ToastContainer />
          <Header />
          <div className={cn("p-4 sm:ml-64 mt-28")}>
            <CustomSpline />
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
