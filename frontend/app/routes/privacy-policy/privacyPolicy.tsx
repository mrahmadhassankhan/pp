export default function PrivacyPolicy() {
  return (
    <section className="py-16 bg-secondary text-dark">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-gray-400 text-center mb-10">
          Last Updated: February 22, 2025
        </p>

        <div className="space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-gray-300 mt-2">
              Welcome to Programming Partner. Your privacy is important to us.
              This Privacy Policy explains how we collect, use, and protect your
              personal data when you use our website.
            </p>
          </div>

          {/* Data Collection */}
          <div>
            <h2 className="text-2xl font-semibold">2. What Data We Collect</h2>
            <p className="text-gray-300 mt-2">We collect the following data:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Personal Information (Name, Email, Phone Number)</li>
              <li>
                Usage Data (IP address, Browser Type, Time Spent on Pages)
              </li>
              <li>Cookies & Tracking Technologies</li>
            </ul>
          </div>

          {/* How We Use Data */}
          <div>
            <h2 className="text-2xl font-semibold">3. How We Use Your Data</h2>
            <p className="text-gray-300 mt-2">We use your data to:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Provide and improve our services</li>
              <li>Personalize user experience</li>
              <li>Analyze site traffic and trends</li>
              <li>Send updates and promotional offers</li>
            </ul>
          </div>

          {/* Third-Party Services */}
          <div>
            <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
            <p className="text-gray-300 mt-2">
              We may share your data with trusted third-party services such as:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Google Analytics (to analyze traffic)</li>
              <li>Payment Processors (for secure transactions)</li>
              <li>Advertising Networks (for personalized ads)</li>
            </ul>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-2xl font-semibold">5. Your Rights</h2>
            <p className="text-gray-300 mt-2">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Request access to your data</li>
              <li>Modify or delete your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </div>

          {/* Cookies & Tracking */}
          <div>
            <h2 className="text-2xl font-semibold">6. Cookies & Tracking</h2>
            <p className="text-gray-300 mt-2">
              We use cookies to improve your experience. You can disable cookies
              in your browser settings.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-semibold">7. Policy Updates</h2>
            <p className="text-gray-300 mt-2">
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold">8. Contact Us</h2>
            <p className="text-gray-300 mt-2">
              If you have any questions about this Privacy Policy, contact us
              at:{" "}
              <a
                href="mailto:privacy@programmingpartner.com"
                className="text-primary"
              >
                privacy@programmingpartner.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
