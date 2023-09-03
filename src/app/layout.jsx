import "../../node_modules/tailwindcss/tailwind.css";
import { Orbitron } from "@next/font/google";

const font = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${font.className}`}>
      <body className="bg-gray-300">{children}</body>
    </html>
  );
}
