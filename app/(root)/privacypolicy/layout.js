import "@/app/globals.css";

export const metadata = {
  metadataBase: new URL("https://healthai-app.net/privacypolicy"),
  title: "Privacy Policy - HealthAI",
  description:
    "Read the Privacy Policy for using HealthAI, your AI-powered health assistant.",
  openGraph: {
    title: "Privacy Policy - HealthAI",
    description:
      "Read the Privacy Policy for using HealthAI, your AI-powered health assistant.",
    url: "https://healthai-app.net/privacypolicy",
    siteName: "HealthAI",
    type: "article",
  },
};

export default function Layout({ children }) {
  return <div>{children}</div>;
}
