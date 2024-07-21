import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/shared/header.component";
import { Sidebar } from "@/components/shared/sidebar.component";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prompt Manager",
  description: "プロンプトを管理するアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-full flex-col bg-background">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-4 sm:p-6">
              {children}
            </main>
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
