import "../../node_modules/tailwindcss/tailwind.css";
import { Quantico } from "@next/font/google";

const font = Quantico({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${font.className}`}>
      <head />
      <body className="bg-gray-300">{children}</body>
    </html>
  );
}

// Chakra_Petch
// Quantico
