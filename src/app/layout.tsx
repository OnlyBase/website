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
    "An overview of apps and integrations in the Base ecosystem.",
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
          <div className={cn("p-4 sm:ml-64 mt-16")}>
            <CustomSpline />
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
