"use client";
import Footer from "@/src/components/layouts/Footer";
import Header from "@/src/components/layouts/Header";
import { usePathname } from "next/navigation";

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
