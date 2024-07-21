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
    <html lang="ja">
      <body className={inter.className}>
        <div className="bg-background">
          <Header />
          <div className="grid grid-cols-1 sm:grid-cols-[256px_1fr]">
            <Sidebar />
            <main className="overflow-y-auto p-4">{children}</main>
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
