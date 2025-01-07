import React from "react";
import "../styles/globals.css";
import { Nunito } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MyContextProvider, queryClient } from "@/store/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <QueryClientProvider client={queryClient}>
        <MyContextProvider>
          <SidebarProvider>
            <body className="h-screen flex flex-col">
              <AppSidebar />
              <Header />
              <main>{children}</main>
              <Footer />
              <Toaster />
            </body>
          </SidebarProvider>
        </MyContextProvider>
      </QueryClientProvider>
    </html>
  );
  // return (
  //   <html lang="en">
  //     <body>{children}</body>
  //   </html>
  // );
}
