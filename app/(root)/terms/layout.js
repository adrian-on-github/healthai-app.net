import "@/app/globals.css";

export const metadata = {
  metadataBase: new URL("https://healthai-app.net/terms"),
  title: "Terms of Service - HealthAI",
  description:
    "Read the terms and conditions for using HealthAI, your AI-powered health assistant.",
  openGraph: {
    title: "Terms of Service - HealthAI",
    description:
      "Read the terms and conditions for using HealthAI, your AI-powered health assistant.",
    url: "https://healthai-app.net/terms",
    siteName: "HealthAI",
    type: "article",
  },
};

export default function Layout({ children }) {
  return <div>{children}</div>;
}
