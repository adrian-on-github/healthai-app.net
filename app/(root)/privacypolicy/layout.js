import { Poppins } from "next/font/google";
import "@/app/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Privacy Policy - HealthAI",
  description:
    "Read the Privacy Policy for using HealthAI, your AI-powered health assistant.",
  openGraph: {
    title: "Privacy Policy - HealthAI",
    description:
      "Read the Privacy Policy for using HealthAI, your AI-powered health assistant.",
    url: "https://healthai-app.net/terms",
    siteName: "HealthAI",
    type: "article",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
