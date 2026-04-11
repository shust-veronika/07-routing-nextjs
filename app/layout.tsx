import React from "react";
import TanStackProvider from "@/providers/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({
  children,
  modal,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {}
        <TanStackProvider>
          <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            
            {}
            <Header />

            {}
            <main style={{ flex: 1 }}>
              {children}
            </main>

            {}
            <Footer />

            {}
            {modal}
            
          </div>
        </TanStackProvider>
      </body>
    </html>
  );
}