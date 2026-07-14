
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { routesLink } from "@/components/sidebar/route-links";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Providers } from "@/providers/provider";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Gerenciador de Despesas",
  description: "Gerencie suas despesas de forma eficiente e organizada com nosso aplicativo de controle financeiro. Acompanhe seus gastos, categorize suas despesas e visualize relatórios detalhados para tomar decisões financeiras mais informadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark">
         <Providers>
           <section>
       <SidebarProvider>
          <AppSidebar listMenu={routesLink} />
            <SidebarInset>
               <header className="ml-5 flex h-16 shrink-0 items-center gap-2 border-b pr-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
            {/* <Navbar /> */}
              </header>
              <Suspense fallback={null}>{children}</Suspense>
            </SidebarInset>
       </SidebarProvider>
    </section>
         
        </Providers>

      </body>
    </html>
  );
}
