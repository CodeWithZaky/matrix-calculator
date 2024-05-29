import "../../node_modules/tailwindcss/tailwind.css";
import { Orbitron } from "@next/font/google";
import HeaderFooterWrap from "../components/layouts/HeaderFooterWrap";
import { Toaster } from "sonner";

const font = Orbitron({
  weights: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake" className={`${font.className}`}>
      <body>
        <Toaster position="top-right" richColors />
        <div className="min-w-screen flex min-h-screen flex-col items-center justify-between gap-3 bg-gray-300">
          <HeaderFooterWrap>{children}</HeaderFooterWrap>
        </div>
      </body>
    </html>
  );
}
