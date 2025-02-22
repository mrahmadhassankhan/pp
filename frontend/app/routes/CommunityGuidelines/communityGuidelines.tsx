export default function CommunityGuidelines() {
  return (
    <section className="py-16 bg-secondary text-dark">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Community Guidelines
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Our community is built on respect, inclusivity, and collaboration.
          Please follow these guidelines to ensure a positive experience for
          everyone.
        </p>

        <div className="space-y-6">
          <div className="bg-secondary p-6 rounded-lg shadow-md border-b border-gray-600">
            <h3 className="text-xl font-semibold mb-2">
              Respect & Inclusivity
            </h3>
            <p className="text-gray-300">
              Treat others with kindness and respect. Discrimination, hate
              speech, or harassment will not be tolerated.
            </p>
          </div>

          <div className="bg-secondary p-6 rounded-lg shadow-md border-b border-gray-600">
            <h3 className="text-xl font-semibold mb-2">Content Policy</h3>
            <p className="text-gray-300">
              Share valuable and relevant content. Avoid spam, self-promotion,
              or offensive material.
            </p>
          </div>

          <div className="bg-secondary p-6 rounded-lg shadow-md border-b border-gray-600">
            <h3 className="text-xl font-semibold mb-2">
              Collaboration & Contributions
            </h3>
            <p className="text-gray-300">
              Work together in a constructive manner. Give credit where it's due
              and contribute meaningfully.
            </p>
          </div>

          <div className="bg-secondary p-6 rounded-lg shadow-md border-b border-gray-600">
            <h3 className="text-xl font-semibold mb-2">Prohibited Actions</h3>
            <p className="text-gray-300">
              No spamming, hate speech, harassment, or inappropriate behavior.
              Violators will be banned.
            </p>
          </div>

          <div className="bg-secondary p-6 rounded-lg shadow-md border-b border-gray-600">
            <h3 className="text-xl font-semibold mb-2">Reporting Violations</h3>
            <p className="text-gray-300">
              If you see any violations of these guidelines, please report them
              to our moderation team.
            </p>
          </div>

          <div className="bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Consequences of Violations
            </h3>
            <p className="text-gray-300">
              Violators may face warnings, temporary suspensions, or permanent
              bans depending on the severity of the offense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
