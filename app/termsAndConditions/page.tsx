import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="mt-[4rem] flex items-center justify-center md:p-12 bg-gray-50">
      <div className="flex flex-col w-full max-w-3xl gap-12 p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Terms and Conditions</h1>
          <p className="text-gray-600">Last Updated: August 8, 2024</p>
        </div>
        <p className="text-lg text-gray-600">
          Welcome to LillDiary! We’re honored you have chosen our family memory-keeping app and website. Please read these Terms and Conditions carefully as they govern your access and use of LillDiary products and services.
        </p>
        
        <section className="p-6 bg-gray-100 rounded-md border border-gray-300">
          <p className="text-lg text-gray-600">
            <span className="font-bold">What We Do:</span> LillDiary offers software tools and services to privately record, organize, customize, store, share, and print memories for families with young children. This includes our website dashboard and mobile applications. Parents can capture photos, videos, milestones, and written journal entries to create an online diary preserving their children’s precious early years.
            We store these priceless memories securely using industry-standard encryption and access controls. We aim to liberate parents from data storage limits to easily amass a comprehensive digital record of their little ones’ childhoods to enjoy now and for generations to come.
          </p>
        </section>
        
        <section className="p-6 bg-gray-100 rounded-md border border-gray-300">
          <p className="text-lg text-gray-600">
            <span className="font-bold">Your Agreement with Us:</span> By registering for, accessing, or using LillDiary’s services, you affirm you are of legal age to form a binding contract and agree to comply with these Terms. If you do not agree, do not access or use LillDiary.
            These Terms apply to any users who sign up for LillDiary or access diary content shared with them by a registered LillDiary family. Please read carefully and contact us if anything is unclear before proceeding.
          </p>
        </section>

        <section className="p-6 bg-gray-100 rounded-md border border-gray-300">
          <p className="text-lg text-gray-600">
            <span className="font-bold">Privacy is Paramount:</span> We take privacy extremely seriously at LillDiary. We use advanced encryption, access controls, and data security measures aligned with industry best practices to protect your memories and personal data.
            Our Privacy Policy explains exactly what personal data we collect and why, who can access it, and your rights related to your data. Please review the Privacy Policy in conjunction with these Terms, as use of LillDiary signifies consent to both.
          </p>
        </section>
        
        <section className="p-6 bg-gray-100 rounded-md border border-gray-300">
          <p className="text-lg text-gray-600">
            <span className="font-bold">Your Rights and Responsibilities:</span> We grant registered LillDiary users conditional access to a personal, non-transferable license to use our services to store and manage family memories.
            In exchange, you agree to reasonably safeguard account login credentials and not allow third parties besides authorized family members to access content. You are responsible for activity occurring under your family member accounts.
            Additionally, although we handle security measures on the back end, you agree not to upload illegal, offensive or unauthorized content into LillDiary that violates our Content Guidelines.
          </p>
        </section>
        
        <section className="p-6 bg-gray-100 rounded-md border border-gray-300">
          <p className="text-lg text-gray-600">
            <span className="font-bold">Family Sharing:</span> With your permission, LillDiary allows sharing diaries or portions of diaries with authorized family members and friends. You control what content is visible to whom via sharing settings.
            Anyone accessing shared LillDiary content must comply with these Terms plus specific conditional access rules set by the sharing party. Shared access may be revoked at any time.
          </p>
        </section>

        <section className="p-6 bg-gray-100 rounded-md border border-gray-300">
          <p className="text-lg text-gray-600">
            <span className="font-bold">Usage Rules:</span> LillDiary intends services for personal, non-commercial family memory archiving and sharing use only. Accounts not tied to real family relationships will be flagged for potential unauthorized commercial use in violation of these Terms.
            You retain full ownership over content you upload. By uploading to LillDiary, you grant an unlimited license to store and display that content to facilitate services. This remains your property - you can transfer or delete at any time.
          </p>
        </section>
        
        <section className="p-6 bg-gray-100 rounded-md border border-gray-300">
          <p className="text-lg text-gray-600">
            <span className="font-bold">Limitations on Downloading:</span> Users may download a reasonable amount of full personal diary content for personal backup or printing keepsake family albums.
            Attempting bulk downloads of substantially all diary content including portions you did not create or do not have explicit rights to access indicates unauthorized commercial intent prohibited under these Terms.
          </p>
        </section>

        <section className="p-6 bg-gray-100 rounded-md border border-gray-300">
          <p className="text-lg text-gray-600">
            <span className="font-bold">Safety First:</span> LillDiary prioritizes family safety and compliance with legal obligations. We may review or scan account activity or content for security risks, policy violations, or illegal materials subject to reporting requirements. If we reasonably suspect Terms violations, we may terminate user access or take other appropriate action without prior notice.
          </p>
        </section>

        <section className="p-6 bg-gray-100 rounded-md border border-gray-300">
          <p className="text-lg text-gray-600">
            <span className="font-bold">Reliability Not Guaranteed:</span> While we strive to maintain constant uptime and availability, LillDiary does not guarantee reliability or suitability for any particular purpose. We cannot promise services will never be disrupted. As an online service, temporary outages may occasionally occur.
          </p>
        </section>

        <section className="p-6 bg-gray-100 rounded-md border border-gray-300">
          <p className="text-lg text-gray-600">
            <span className="font-bold">Limitation of Liability:</span> LillDiary strives to responsibly preserve your precious memories, but is not responsible for deleted, destroyed or inaccessible user content due to use errors or technological faults. We provide services “as is” and disclaim warranties or liability for damages – whether incidental, indirect, special or consequential.
          </p>
        </section>

        <section className="p-6 bg-gray-100 rounded-md border border-gray-300">
          <p className="text-lg text-gray-600">
            <span className="font-bold">Changes May Occur:</span> We reserve the right to modify these Terms if reasonably necessary to improve security, address compliance concerns, enhance user experience or for similar operational causes with notice of changes posted here. Continued use beyond posting confirms updated Terms acceptance.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsAndConditionsPage;
