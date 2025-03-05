import React from "react";

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
          <p className="text-lg text-gray-500 font-medium">
            Last Updated: March 5, 2025
          </p>
          <h1 className="mt-2 text-4xl lg:text-5xl font-semibold text-gray-900 sm:text-5xl sm:tracking-tight">
            HealthAI Privacy Policy
          </h1>
        </div>

        <div className="prose prose-lg text-gray-500 mx-auto">
          <Section title="1. Introduction">
            <p>
              {`Welcome to Health Assistant. These Terms and Conditions ("the
              Terms") govern your access to and use of Health Assistant (the
              "Service"), an artificial intelligence-powered chatbot providing
              general health information and guidance. By accessing or using
              Health Assistant, you agree to comply with and be bound by these
              Terms. If you do not agree to these Terms, you must not use the
              Service.`}
            </p>
          </Section>
          <Section title="2. Service Description">
            <Subsection title="2.1 Overview">
              <p>
                {` Health Assistant offers a chatbot that generates health-related
                information based on user queries. The Service is designed to
                provide general guidance and is not intended to replace
                professional medical advice.`}
              </p>
            </Subsection>
            <Subsection title="2.2 Purpose">
              <p>
                {`The primary purpose of Health Assistant is to assist users by
                providing information and answering questions related to general
                health topics. The Service should not be used for emergency
                medical situations or as a substitute for direct medical care.`}
              </p>
            </Subsection>
          </Section>
          <Section title="3. Eligibility and Account">
            <Subsection title="3.1 Eligibility">
              <p>
                {`                By using Health Assistant, you represent and warrant that you
                are at least 18 years old or the age of majority in your
                jurisdiction.`}
              </p>
            </Subsection>
            <Subsection title="3.2 Account Creation">
              <p>
                {`  If Health Assistant requires you to create an account, you agree
                to provide accurate and complete information during the
                registration process and to update such information as needed.`}
              </p>
            </Subsection>
            <Subsection title="3.3 Account Security">
              <p>
                {`  You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to notify Health Assistant immediately of any
                unauthorized use of your account or any other breach of
                security.`}
              </p>
            </Subsection>
          </Section>
          <Section title="4. Use of Service">
            <Subsection title="4.1 Permitted Uses:">
              <p>
                {` You may use Health Assistant solely for your personal,
                non-commercial purposes and in accordance with these Terms.`}
              </p>
            </Subsection>
            <Subsection title="4.2 Prohibited Uses:">
              <p>
                {` You agree not to use Health Assistant for any unlawful,
                fraudulent, or harmful purposes. This includes, but is not
                limited to, the following prohibited activities: Using the
                Service to seek or provide medical advice for emergency
                situations. Attempting to bypass any security measures or
                interfere with the operation of the Service. Using automated
                means, including but not limited to, bots or scrapers, to access
                or collect data from Health Assistant. Engaging in any activity
                that may harm Health Assistant or its users, including
                distributing malware or engaging in any form of harassment.`}
              </p>
            </Subsection>
          </Section>
          <Section title="5. No Medical Advice or Professional Relationship">
            <Subsection title="5.1 General Information:">
              <p>
                {`  The information provided by Health Assistant is intended for
                general informational purposes only. The content should not be
                interpreted as medical advice, diagnosis, or treatment.`}
              </p>
            </Subsection>
            <Subsection title="5.2 No Professional Relationship:">
              <p>
                {` Use of Health Assistant does not create a doctor-patient
                relationship or any other professional relationship. Health
                Assistant does not replace the need for a consultation with a
                qualified healthcare provider.`}
              </p>
            </Subsection>
          </Section>
          <Section title="6. Limitation of Liability">
            <Subsection title="6.1 General Disclaimer:">
              <p>
                {`To the fullest extent permitted by applicable law, Health
                Assistant, its affiliates, officers, directors, employees, and
                agents (collectively, the "Health Assistant Parties") shall not
                be liable for any direct, indirect, incidental, special,
                consequential, or punitive damages arising out of or in
                connection with your use of Health Assistant, whether based on
                warranty, contract, tort (including negligence), or any other
                legal theory.`}
              </p>
            </Subsection>
            <Subsection title="6.2 Specific Disclaimers:">
              <p>
                {` Health Assistant makes no representations or warranties
                regarding the accuracy, completeness, reliability, or timeliness
                of the information provided. The Health Assistant Parties do not
                guarantee that the Service will be free from errors or
                uninterrupted.`}
              </p>
            </Subsection>
            <Subsection title="6.3 Health Risks:">
              <p>
                {` Health Assistant does not assume any liability for any health
                issues or adverse outcomes that may arise from your use of the
                Service. You are solely responsible for seeking professional
                medical advice for any health concerns.`}
              </p>
            </Subsection>
          </Section>
          <Section title="7. Indemnification">
            <p>
              {`  You agree to indemnify, defend, and hold harmless the Health
              Assistant Parties from and against any claims, liabilities,
              damages, losses, and expenses (including reasonable attorneys'
              fees) arising out of or related to: Your use of Health Assistant.
              Your breach of these Terms. Your violation of any rights of
              another party.`}
            </p>
          </Section>
          <Section title="8. Changes to Terms">
            <Subsection title="8.1 Modifications:">
              <p>
                {` Health Assistant reserves the right to modify or update these
                Terms at any time. Changes will be effective immediately upon
                posting the revised Terms on our website or within the Service.`}
              </p>
            </Subsection>
            <Subsection title="8.2 Notification:">
              <p>
                {` While we may attempt to notify you of significant changes, it is
                your responsibility to review these Terms periodically. Your
                continued use of Health Assistant after any changes indicates
                your acceptance of the updated Terms.`}
              </p>
            </Subsection>
          </Section>
          <Section title="9. Termination">
            <Subsection title="9.1 Termination by Us:">
              <p>
                {`We may terminate or suspend your access to Health Assistant,
                without notice, for any reason, including but not limited to, a
                violation of these Terms or any applicable law.`}
              </p>
            </Subsection>
            <Subsection title="9.2 Termination by You:">
              <p>
                {`  You may discontinue your use of Health Assistant at any time by
                ceasing to use the Service. Upon termination, your account and
                associated data will be handled as described in the Privacy
                Policy.`}
              </p>
            </Subsection>
            <Subsection title="9.3 Survival:">
              <p>
                {` Upon termination of your access, the provisions of these Terms
                that by their nature should survive termination shall remain in
                effect, including but not limited to, sections on Limitation of
                Liability, Indemnification, and Governing Law.`}
              </p>
            </Subsection>
          </Section>
          <Section title="10. Governing Law and Dispute Resolution">
            <Subsection title="10.1 Governing Law:">
              <p>
                {`  These Terms shall be governed by and construed in accordance
                with the laws of Erfurt, Germany, without regard to its conflict
                of law principles.`}
              </p>
            </Subsection>
            <Subsection title="10.2 Dispute Resolution:">
              <p>
                {`  Any disputes arising out of or related to these Terms or your
                use of Health Assistant shall be resolved through binding
                arbitration in Erfurt, Germany in accordance with the rules of
                the American Arbitration Association or a similar arbitration
                organization.`}
              </p>
            </Subsection>
            <Subsection title="10.3 Class Action Waiver:">
              <p>
                {` You agree that any arbitration will be conducted on an
                individual basis and not as a class action or collective
                proceeding.`}
              </p>
            </Subsection>
          </Section>
          <Section title="11. Intellectual Property">
            <Subsection title="11.1 Ownership:">
              <p>
                {`  All content and materials provided through Health Assistant,
                including but not limited to, text, graphics, logos, software,
                and other intellectual property, are owned by Health Assistant
                or its licensors.`}
              </p>
            </Subsection>
            <Subsection title="11.2 License:">
              <p>
                {`   Subject to these Terms, Health Assistant grants you a limited,
                non-exclusive, non-transferable, revocable license to access and
                use the Service for personal, non-commercial purposes.`}
              </p>
            </Subsection>
          </Section>
          <Section title="12. Third-Party Links and Content">
            <Subsection title="12.1 Links:">
              <p>
                {` Health Assistant may contain links to third-party websites or
                services. These links are provided for convenience and do not
                imply endorsement by Health Assistant of the third-party content
                or services.`}
              </p>
            </Subsection>
            <Subsection title="12.2 No Responsibility:">
              <p>
                {`  Health Assistant is not responsible for the content, accuracy,
                or practices of any third-party websites or services linked from
                Health Assistant.`}
              </p>
            </Subsection>
          </Section>
          <Section title="13. Data Privacy">
            <Subsection title="13.1 Data Collection:">
              <p>
                {`  Health Assistant may collect, use, and store data in accordance
                with its Privacy Policy. By using the Service, you consent to
                the collection and use of data as described in the Privacy
                Policy.`}
              </p>
            </Subsection>
            <Subsection title="13.2 Data Security:">
              <p>
                {`   While we strive to protect your information, Health Assistant
                cannot guarantee the security of data transmitted over the
                internet.`}
              </p>
            </Subsection>
          </Section>
          <Section title="14. Customer Rights">
            <Subsection title="14.1 Right to Access and Use:">
              <p>
                {`  You have the right to access and use Health Assistant in
                accordance with these Terms and applicable laws. You may use the
                Service for personal, non-commercial purposes only. You are
                entitled to clear and accurate information about Health
                Assistant’s features, limitations, and terms.`}
              </p>
            </Subsection>
            <Subsection title="14.2 Right to Privacy:">
              <p>
                {`   You have the right to privacy regarding your personal data.
                Health Assistant will handle your data according to its Privacy
                Policy. You can access, correct, or delete your personal
                information as outlined in the Privacy Policy.`}
              </p>
            </Subsection>
            <Subsection title="14.3 Right to Fair Treatment:">
              <p>
                {` Health Assistant is committed to treating all users fairly and
                without discrimination. You have the right to use the Service
                without experiencing unfair or discriminatory treatment and to
                request accommodations if you encounter accessibility`}
              </p>
            </Subsection>
            <Subsection title="14.4 Right to Termination:">
              <p>
                {` You may terminate your use of Health Assistant at any time by
                discontinuing access to the Service. Refund policies, if
                applicable, will be outlined separately and are subject to any
                applicable subscription or purchase agreements. 14.5 Right to
                Appeal: You have the right to resolve disputes related to Health
                Assistant through the mechanisms outlined in these Terms. This
                includes contacting Health Assistant for issues or concerns and
                seeking legal recourse if necessary.`}
              </p>
            </Subsection>
          </Section>
          <Section title="15. Miscellaneous">
            <Subsection title="15.1 Entire Agreement:">
              <p>
                {`   These Terms constitute the entire agreement between you and
                Health Assistant regarding your use of the Service and supersede
                all prior agreements and understandings.`}
              </p>
            </Subsection>
            <Subsection title="15.2 Severability:">
              <p>
                {`   If any provision of these Terms is found to be invalid or
                unenforceable, the remaining provisions will continue in full
                force and effect.`}
              </p>
            </Subsection>
            <Subsection title="15.3 Waiver:">
              <p>
                {`  The failure of Health Assistant to enforce any right or
                provision of these Terms will not constitute a waiver of such
                right or provision.`}
              </p>
            </Subsection>
            <Subsection title="15.4 Assignment:">
              <p>
                {`   Health Assistant may assign its rights and obligations under
                these Terms to any third party without notice. You may not
                assign your rights or obligations under these Terms without the
                prior written consent of Health Assistant.`}
              </p>
            </Subsection>
          </Section>
          <Section title="16. Contact Information">
            <p>
              {`   If you have any questions or concerns regarding these Terms,
              please contact us at info@healthai-app.net.`}
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
