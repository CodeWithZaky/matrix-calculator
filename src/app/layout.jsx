import "../../node_modules/tailwindcss/tailwind.css";
import { Orbitron } from "@next/font/google";
import HeaderFooterWrap from "../components/layouts/HeaderFooterWrap";

const font = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${font.className}`}>
      <body className="flex flex-col items-center justify-between min-h-screen gap-3 bg-gray-300 min-w-screen">
        <HeaderFooterWrap>{children}</HeaderFooterWrap>
      </body>
    </html>
  );
}
