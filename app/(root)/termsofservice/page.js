import React from "react";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-neutral-700 font-medium">
            Last Updated: March 5, 2025
          </p>
          <h1 className="mt-2 text-4xl lg:text-5xl font-semibold text-gray-900 sm:text-5xl sm:tracking-tight">
            HealthAI Terms of Service
          </h1>
        </div>

        <div className="prose prose-lg text-neutral-700 mx-auto">
          <Section title="1. Introduction and Acceptance of Terms">
            <p>
              {` These Terms and Conditions (the "Terms") govern the use of the
              Health AI Chatbot (the “Service”) provided by [Company Name]
              (“we,” “us,” or “our”). By accessing or using the Service, you
              (the “User”) agree to be bound by these Terms. If you do not agree
              to these Terms, you must immediately discontinue use of the
              Service. We reserve the right to modify or revise these Terms at
              any time, with any changes being effective immediately upon
              posting. Your continued use of the Service after the posting of
              any changes constitutes your acceptance of those changes.`}
            </p>
          </Section>
          <Section title="2. Description of the Service">
            <p>
              {`  The Service is an AI-powered chatbot designed to provide users
              with general health information, wellness tips, and guidance based
              on publicly available data and pre-programmed algorithms. It is
              intended solely for informational and educational purposes and
              does not provide medical advice, diagnosis, or treatment. The
              Service does not: Substitute for professional medical
              consultation, diagnosis, or treatment. Replace the need for a
              healthcare provider or licensed medical professional. Provide
              emergency medical advice or services. Always consult with a
              qualified healthcare provider if you have questions or concerns
              about a medical condition. In the case of a medical emergency,
              dial your local emergency number immediately.`}
            </p>
          </Section>
          <Section title="3. Subscription Fees and Payment Terms">
            <p>
              {`  The Service operates on a subscription-based model, providing
              access to certain premium features. By subscribing, you agree to
              the following terms: The subscription fee is $2.95 per billing
              period, which will be charged at the beginning of each
              subscription term. Your subscription will automatically renew
              unless you cancel it before the renewal date. You authorize us to
              charge the applicable subscription fee to the payment method
              provided by you. You may cancel your subscription at any time.
              However, cancellations will only take effect at the end of the
              current billing period. No partial refunds will be given. We
              reserve the right to modify the subscription fee or offer
              different subscription tiers. Any changes to the subscription
              price will be communicated to you in advance, and you will have
              the option to cancel before the changes take effect. If any
              payment is not successfully processed due to expiration,
              insufficient funds, or otherwise, and you do not update your
              payment information, we may suspend access to the Service until
              the outstanding fees are paid.`}
            </p>
          </Section>
          <Section title="4. Use of the Service">
            <p>
              {`  By using the Service, you agree to the following: You are at least
              18 years of age, or you are using the Service under the
              supervision of a legal guardian. You will not use the Service for
              any unlawful or fraudulent purposes. You will not use the Service
              to transmit or post any harmful, offensive, or otherwise
              inappropriate content. You understand and agree that the Service
              is provided “as is” and that we make no guarantees or warranties
              regarding the accuracy, reliability, or completeness of the
              information provided. You are solely responsible for the decisions
              you make based on the information provided by the Service.`}
            </p>
          </Section>
          <Section title="5. No Medical Advice and Disclaimer">
            <p>
              {`  The Service is an AI-powered platform that offers health
              information, but it does not provide professional medical advice,
              diagnosis, or treatment. The information provided is meant to
              assist users in making informed decisions but should never be used
              as a substitute for professional healthcare services. By using the
              Service, you acknowledge and agree that: The information is
              general in nature and may not apply to your specific health
              condition. The Service does not have the ability to assess all
              relevant health data to make clinical recommendations. You must
              not rely solely on the information from the Service for your
              healthcare needs. Always consult with a licensed healthcare
              provider before making decisions regarding your health. You should
              never disregard or delay seeking medical advice from a licensed
              healthcare provider based on information received from the
              Service.`}
            </p>
          </Section>
          <Section title="6. Limitation of Liability">
            <p>
              {`To the maximum extent permitted by applicable law, we, our
              affiliates, officers, directors, employees, and agents are not
              liable for any direct, indirect, incidental, special,
              consequential, or punitive damages arising out of or related to:
              Your use of or inability to use the Service. Any health-related
              information provided by the Service. Personal injury, illness, or
              death resulting from reliance on the Service’s information. Any
              interruption, suspension, or termination of the Service. You
              acknowledge and agree that: The Service is not intended to provide
              medical advice or replace professional healthcare services. You
              are solely responsible for your own health decisions and actions,
              and we cannot be held liable for any outcomes based on your use of
              the Service.`}
            </p>
          </Section>
          <Section title="7. No Warranties">
            <p>
              {`  The Service is provided on an “as-is” and “as-available” basis
              without any warranties of any kind, either express or implied. We
              do not guarantee that: The Service will be uninterrupted, secure,
              or free from errors or defects. The information provided is
              accurate, reliable, or up-to-date. Any errors in the Service will
              be corrected. We disclaim all warranties, whether express or
              implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose,
              non-infringement, and any warranties arising from the course of
              dealing or usage of trade.`}
            </p>
          </Section>
          <Section title="8. User Conduct">
            <p>
              {`   Users are prohibited from using the Service to: Violate any local,
              national, or international laws or regulations. Post or transmit
              any unlawful, harmful, abusive, defamatory, or offensive content.
              Impersonate any individual or entity or falsely state your
              affiliation with any person or organization. Use automated
              systems, bots, or other technologies to access the Service without
              our written consent. Failure to comply with these rules may result
              in the termination of your access to the Service.`}
            </p>
          </Section>
          <Section title="9. Indemnification">
            <p>
              {`   You agree to indemnify, defend, and hold harmless us and our
              affiliates, officers, directors, employees, and agents from any
              claims, damages, losses, liabilities, and expenses (including
              legal fees) arising out of or in connection with your use of the
              Service, your violation of these Terms, or your violation of any
              rights of a third party.`}
            </p>
          </Section>
          <Section title="10. Termination">
            <p>
              {` We reserve the right to terminate or suspend your access to the
              Service at any time, without prior notice or liability, for any
              reason whatsoever, including but not limited to your breach of
              these Terms. Upon termination, your right to use the Service will
              immediately cease. If you wish to terminate your account, you may
              simply discontinue using the Service.`}
            </p>
          </Section>
          <Section title="11. Governing Law and Jurisdiction">
            <p>
              {`   These Terms are governed by and construed in accordance with the
              laws of [Your Country/State], without regard to its conflict of
              law provisions. Any dispute arising out of or relating to these
              Terms or the use of the Service will be subject to the exclusive
              jurisdiction of the courts in [Your Country/State].`}
            </p>
          </Section>
          <Section title="12. Changes to the Service">
            <p>
              {` We reserve the right to modify or discontinue the Service,
              temporarily or permanently, at any time without prior notice. We
              will not be liable for any modification, suspension, or
              discontinuation of the Service.`}
            </p>
          </Section>
          <Section title="13. Privacy Policy">
            <p>
              {`   Your use of the Service is also governed by our Privacy Policy,
              which outlines how we collect, use, and protect your personal
              data. By using the Service, you consent to the collection and use
              of your data as described in the Privacy Policy.`}
            </p>
          </Section>
          <Section title="14. Contact Information">
            <p>
              {` If you have any questions about these Terms, the Service, or the
              subscription, please contact us at: Email: info@healthai-app.net.`}
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
