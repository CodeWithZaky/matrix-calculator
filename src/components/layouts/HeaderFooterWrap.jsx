"use client";
import { usePathname } from "next/navigation";
import Header from "@/src/components/layouts/Header";
import Footer from "@/src/components/layouts/Footer";

const headerFooterMap = {
  "/matrix-addition": { title: "matrix addition" },
  "/matrix-subtraction": { title: "matrix subtraction" },
  "/matrix-multiplication": { title: "matrix multiplication" },
};

const HeaderFooterWrap = ({ children }) => {
  const pathname = usePathname();
  const { title } = headerFooterMap[pathname] || {};

  return (
    <>
      {title && <Header title={title} />}
      {children}
      {title && <Footer />}
    </>
  );
};

export default HeaderFooterWrap;
