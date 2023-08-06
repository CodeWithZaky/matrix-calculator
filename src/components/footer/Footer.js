import React from "react";

const FooterPage = () => {
  return (
    <section className="container flex flex-col sm:flex-row justify-between w-full p-3 font-mono text-xs sm:text-sm bg-slate-900 text-slate-100 rounded-t">
      <p className="w-1/3 text-start sm:text-start">
        Copyright@ Ahmad Zaky Ubaidillah · 2023
      </p>
      <p className="w-1/3 text-star sm:text-center">MATRIX PROJECT</p>
      <p className="w-1/3 text-star sm:text-end">112210010</p>
    </section>
  );
};

export default FooterPage;
