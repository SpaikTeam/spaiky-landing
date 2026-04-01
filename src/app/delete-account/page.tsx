import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account - Spaiky",
  description: "Request deletion of your Spaiky account and all associated data.",
};

export default function DeleteAccount() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-text">
      <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
        Delete Your Account
      </h1>
      <p className="mt-2 text-sm text-text-muted">Spaiky by Spaik Solutions</p>

      <p className="mt-8">
        We respect your right to delete your data. You can request the deletion
        of your Spaiky account and all associated data at any time.
      </p>

      {/* How to Request */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        How to Request Account Deletion
      </h2>
      <p className="mt-4">Send an email to:</p>
      <p className="mt-2">
        <a
          href="mailto:contact@spaiky.app"
          className="text-lg font-semibold text-purple-light underline hover:text-purple"
        >
          contact@spaiky.app
        </a>
      </p>
      <p className="mt-2">
        Please include the email address associated with your Spaiky account.
      </p>

      {/* What Gets Deleted */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        What Gets Deleted
      </h2>
      <p className="mt-4">
        When you request account deletion, we will permanently delete the
        following data within 30 days:
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-6">
        <li>
          <strong className="text-white">Account information</strong> - email
          address, display name
        </li>
        <li>
          <strong className="text-white">Learning progress</strong> - completed
          lessons, XP, streaks
        </li>
        <li>
          <strong className="text-white">Survey responses</strong> - PMF survey
          answers and feedback
        </li>
        <li>
          <strong className="text-white">Lesson ratings</strong> - your ratings
          for lessons
        </li>
        <li>
          <strong className="text-white">Usage events</strong> - analytics data
          associated with your account
        </li>
      </ul>

      {/* What Is Retained */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        What Is Retained
      </h2>
      <p className="mt-4">
        The following data may be retained in anonymized, aggregated form that
        cannot be linked back to you:
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-6">
        <li>
          Aggregated analytics (e.g., total number of lesson completions)
        </li>
      </ul>

      {/* Processing Time */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        Processing Time
      </h2>
      <p className="mt-4">
        Account deletion requests are processed within 30 days. You will receive
        a confirmation email once your data has been deleted.
      </p>

      {/* Contact */}
      <h2 className="mt-12 font-heading text-xl font-bold text-white">
        Contact
      </h2>
      <p className="mt-4">
        If you have any questions about the deletion process, contact us at{" "}
        <a
          href="mailto:contact@spaiky.app"
          className="text-purple-light underline hover:text-purple"
        >
          contact@spaiky.app
        </a>
        .
      </p>
    </main>
  );
}
