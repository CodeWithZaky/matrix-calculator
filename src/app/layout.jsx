import { Orbitron } from "@next/font/google";
import { Toaster } from "sonner";
import "../../node_modules/tailwindcss/tailwind.css";
import HeaderFooterWrap from "../components/layouts/HeaderFooterWrap";

const font = Orbitron({
  weights: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake" className={`${font.className}`}>
      <body>
        <Toaster position="top-right" richColors />
        <div className="flex flex-col justify-between items-center gap-3 bg-gray-300 min-w-screen min-h-screen">
          <HeaderFooterWrap>{children}</HeaderFooterWrap>
        </div>
      </body>
    </html>
  );
}
