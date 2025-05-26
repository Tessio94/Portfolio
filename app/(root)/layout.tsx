import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
