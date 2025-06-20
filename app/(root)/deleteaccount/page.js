import React from "react";

export const metadata = {
  title: "Privacy Policy - HealthAI",
  description:
    "Read the Privacy Policy for using HealthAI, your AI-powered health assistant.",
  openGraph: {
    title: "Privacy Policy - HealthAI",
    description:
      "Read the Privacy Policy for using HealthAI, your AI-powered health assistant.",
    url: "https://healthai-app.net/termsofservice",
    siteName: "HealthAI",
    type: "article",
  },
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const Subsection = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="mt-2 text-4xl lg:text-5xl font-semibold text-gray-900 sm:text-5xl sm:tracking-tight">
            Delete your HealthAI Account
          </h1>
        </div>

        <div className="prose prose-lg text-neutral-700 mx-auto">
          <Section title="1st Step">
            <p>{`Go to the HealthAI Profile Page -> click on the second icon in the navbar/menubar `}</p>
          </Section>
          <Section title="2nd Step">
            <p>{`Scroll down and click on >Delete Account<`}</p>
          </Section>
          <Section title="Account Deletion">
            <p>{`Now you agree that you won't get your account back. Premium features stay. This is how you delete your healthai account!`}</p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
