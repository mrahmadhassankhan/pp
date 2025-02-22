export default function TermsAndConditions() {
  return (
    <section className="py-16 bg-secondary text-dark">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Terms & Conditions
        </h1>
        <p className="text-gray-400 text-center mb-10">
          Please read our terms carefully before using our platform.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="text-gray-300 mt-2">
              By accessing our platform, you agree to these terms and
              conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. User Responsibilities</h2>
            <p className="text-gray-300 mt-2">
              You must not use the platform for illegal activities, spamming, or
              harming other users.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
            <p className="text-gray-300 mt-2">
              All content on the platform is owned by Programming Partner unless
              stated otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Termination</h2>
            <p className="text-gray-300 mt-2">
              We reserve the right to suspend or terminate your account if you
              violate our terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Changes to Terms</h2>
            <p className="text-gray-300 mt-2">
              We may update our terms at any time. Continued use of our platform
              means you accept the new terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
