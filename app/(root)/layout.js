import { Poppins } from "next/font/google";
import "@/app/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://healthai-app.net"),
  title: "HealthAI",
  description: "All-in-one health doctor.",
  keywords: [
    "health",
    "doctor",
    "ai",
    "healthai",
    "HealthAI",
    "AI health assistant",
    "medical AI",
    "health monitoring",
    "AI doctor",
    "personalized healthcare",
    "smart health analysis",
    "digital health",
    "proactive healthcare",
  ],
  authors: [{ name: "Adrian Hassan" }],
  openGraph: {
    title: "HealthAI - your personal health assistant",
    description:
      "HealthAI is a smart health assistant that analyzes medical data and provides personalized insights. With AI-powered diagnostics and notifications, it helps users monitor their health and take proactive measures early",
    url: "https://healthai-app.net",
    siteName: "HealthAI",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/healthai-preview.jpg`,
        width: 1200,
        height: 630,
        alt: "healthai_preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@healthai",
    title: "HealthAI - your personal health assistant",
    description:
      "HealthAI is a smart health assistant that analyzes medical data and provides personalized insights. With AI-powered diagnostics and notifications, it helps users monitor their health and take proactive measures early",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/healthai-preview.jpg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
