import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Spaiky",
  description: "Privacy Policy for the Spaiky mobile education app.",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-text">
      <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-text-muted">Last updated: April 1, 2026</p>

      <p className="mt-8">
        Spaiky (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a
        mobile education application developed by Spaik Solutions. This Privacy
        Policy explains how we collect, use, and protect your information when
        you use our app.
      </p>

      {/* 1. Information We Collect */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        1. Information We Collect
      </h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-text-muted">
              <th className="pb-2 pr-4 font-semibold">Data</th>
              <th className="pb-2 pr-4 font-semibold">When</th>
              <th className="pb-2 font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody className="text-text">
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">Email address</td>
              <td className="py-2 pr-4">Google Sign-In</td>
              <td className="py-2">Account creation and identification</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">Display name</td>
              <td className="py-2 pr-4">Google Sign-In</td>
              <td className="py-2">Personalization</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">Lesson progress</td>
              <td className="py-2 pr-4">Using the app</td>
              <td className="py-2">Track your learning progress</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">XP and streaks</td>
              <td className="py-2 pr-4">Completing lessons</td>
              <td className="py-2">Gamification features</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">Usage events</td>
              <td className="py-2 pr-4">Using the app</td>
              <td className="py-2">Improve the app experience</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">Lesson ratings</td>
              <td className="py-2 pr-4">Rating a lesson</td>
              <td className="py-2">Improve content quality</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Survey responses</td>
              <td className="py-2 pr-4">Answering surveys</td>
              <td className="py-2">Product improvement</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        If you choose to use Spaiky without signing in, we generate an anonymous
        identifier stored locally on your device. This identifier is not linked
        to any personal information.
      </p>

      {/* 2. How We Use Your Information */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        2. How We Use Your Information
      </h2>
      <ul className="mt-4 list-disc space-y-1 pl-6">
        <li>Save and sync your learning progress across devices</li>
        <li>Track your streaks and XP for gamification</li>
        <li>Analyze aggregated usage data to improve the app</li>
        <li>Respond to your feedback and survey responses</li>
      </ul>
      <p className="mt-4">
        We do not use your data for advertising, profiling, or marketing
        purposes.
      </p>

      {/* 3. Data Storage and Security */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        3. Data Storage and Security
      </h2>
      <p className="mt-4">
        Your data is stored on Supabase, a cloud database service hosted on AWS
        infrastructure. We implement the following security measures:
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-6">
        <li>Row Level Security (RLS) policies on all database tables</li>
        <li>User data is isolated: you can only access your own data</li>
        <li>
          Analytics data is append-only: users cannot read or modify event logs
        </li>
        <li>
          Authentication is handled via Google OAuth (we never see or store your
          Google password)
        </li>
        <li>All data is transmitted over HTTPS</li>
      </ul>

      {/* 4. Data Sharing */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        4. Data Sharing
      </h2>
      <p className="mt-4">
        We do not sell, rent, or share your personal data with third parties.
        Your data is only accessed by:
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-6">
        <li>Supabase (database hosting) - as our data processor</li>
        <li>Google (authentication only) - when you sign in with Google</li>
      </ul>

      {/* 5. Data Retention */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        5. Data Retention
      </h2>
      <p className="mt-4">
        We retain your data for as long as your account is active. Anonymous user
        data is retained for analytics purposes but is not linked to any personal
        information.
      </p>

      {/* 6. Your Rights */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        6. Your Rights
      </h2>
      <p className="mt-4">You have the right to:</p>
      <ul className="mt-4 list-disc space-y-1 pl-6">
        <li>
          <strong className="text-white">Access your data</strong> - visible in
          your profile within the app
        </li>
        <li>
          <strong className="text-white">
            Delete your account and all associated data
          </strong>{" "}
          - contact us at the email below
        </li>
        <li>
          <strong className="text-white">Export your data</strong> - contact us
          at the email below
        </li>
        <li>
          <strong className="text-white">Withdraw consent</strong> - you can
          sign out and use the app anonymously at any time
        </li>
      </ul>

      {/* 7. Children's Privacy */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        7. Children&apos;s Privacy
      </h2>
      <p className="mt-4">
        Spaiky is not directed at children under 13. We do not knowingly collect
        personal information from children under 13. If you believe we have
        collected data from a child under 13, please contact us and we will
        delete it promptly.
      </p>

      {/* 8. Changes to This Policy */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        8. Changes to This Policy
      </h2>
      <p className="mt-4">
        We may update this Privacy Policy from time to time. We will notify users
        of significant changes through the app or by updating the &ldquo;Last
        updated&rdquo; date above.
      </p>

      {/* 9. Contact Us */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        9. Contact Us
      </h2>
      <p className="mt-4">
        If you have questions about this Privacy Policy or wish to exercise your
        data rights, contact us at:
      </p>
      <address className="mt-4 not-italic leading-relaxed">
        <strong className="text-white">Spaik Solutions</strong>
        <br />
        Email:{" "}
        <a
          href="mailto:contact@spaiky.app"
          className="text-purple-light underline hover:text-purple"
        >
          contact@spaiky.app
        </a>
      </address>
    </main>
  );
}
