import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });
export const crimson = Crimson_Text({
  weight: ["400", "700"],
  variable: "--font-crimson",
  subsets: ["latin"],
});

export const metadata = {
  title: "OAU clinicals transcript",
  description: "Developed by medical students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${crimson.variable} `}>
        {children}
      </body>
    </html>
  );
}
