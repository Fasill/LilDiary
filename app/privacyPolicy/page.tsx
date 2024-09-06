"use client";
import Head from "next/head";

const page = () => {
  return (
    <div className="mt-[4rem]  min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <Head>
        <title>Privacy Policy - LillDiary</title>
      </Head>

      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Effective Date: August 8, 2024
          </p>
        </div>

        <p className="text-lg text-gray-700 mb-6">
          At LillDiary, we take privacy extremely seriously. We know the
          memories you store with us are highly sensitive and precious. This
          policy outlines what data we collect, how we use and protect it, and
          your rights. Please review carefully and contact us if you have any
          questions!
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          What We Collect & Why
        </h2>
        <p className="text-base text-gray-700 mb-4">
          Because LillDiary focuses exclusively on preserving family memories,
          we only require basic personal information to deliver services. To
          create your family account, we collect first and last names, email
          addresses, and passwords for account holders over 18.
        </p>
        <p className="text-base text-gray-700 mb-4">
          We may request phone numbers for optional multi-factor authentication
          or to assist with account recovery. We also record your service
          interactions and account management activities to provide customized
          support.
        </p>
        <p className="text-base text-gray-700 mb-4">
          Crucially, we do NOT collect any personal details directly associated
          with children besides basic indicators of their existence (Child 1,
          Child 2) required to generate memory storage spaces. Any further
          identifiable details would only be obtained if voluntarily provided by
          a parent within diary content.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          Sensitive Memory Content
        </h2>
        <p className="text-base text-gray-700 mb-4">
          The heart of LillDiary is securely housing your family photos, videos,
          journal entries, and more. While this content may include personal
          details, we never directly access it without your explicit permission.
          It is encrypted and only retrievable with your account credentials.
        </p>
        <p className="text-base text-gray-700 mb-4">
          That said, as a backend service provider, some uploaded content could
          theoretically be exposed to us indirectly in very limited scenarios
          such as:
        </p>
        <ul className="list-disc list-inside text-base text-gray-700 mb-4">
          <li>
            Rare, fractional plain text snapshots if you contact us for
            troubleshooting
          </li>
          <li>Encrypted data packets during transmission and storage</li>
          <li>Thumbnail image previews to display visual indicators</li>
        </ul>
        <p className="text-base text-gray-700">
          We want to be fully transparent that while we strictly limit exposures
          and never directly access your data without cause, the highest levels
          of sensitive content security inherently lie with your care and
          ownership.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          Global Compliance
        </h2>
        <p className="text-base text-gray-700 mb-4">
          LillDiary complies with applicable global data protection and privacy
          regulations. We offer consistent protective controls worldwide. Reach
          out if you have jurisdiction-specific inquiries.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          Children under 13
        </h2>
        <p className="text-base text-gray-700 mb-4">
          While LillDiary serves families with young children, we do not
          knowingly collect any personal data directly from children under 13
          years old without parental consent, in compliance with the US
          Children’s Online Privacy Protection Act (COPPA). Parents manage
          member access and control their children’s participation.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          Changes to This Policy
        </h2>
        <p className="text-base text-gray-700 mb-4">
          We may occasionally update this Privacy Policy as legislation evolves
          or LillDiary offers progress. We will notify users of significant
          amendments. Recent changes appear above with revision dates for
          tracking.
        </p>
      </div>
    </div>
  );
};

export default page;
