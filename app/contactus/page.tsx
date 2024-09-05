import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const page = () => {
  return (
    <div className="bg-white2 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
          <p className="mt-4 text-lg text-secondary">Getting in Touch with LillDiary</p>
          <p className="mt-2 text-gray-700">
            We love hearing from LillDiary families! Please see the options below to get in touch:
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-4">
            <FaPhoneAlt className="text-primary text-2xl" />
            <span className="ml-4 text-gray-800 text-lg">Call: +1987654321</span>
          </div>

          <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-4">
            <FaEnvelope className="text-secondary text-2xl" />
            <span className="ml-4 text-gray-800 text-lg">Email: jhondoe@gmail.com</span>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-600">
            We sincerely appreciate you choosing <span className="font-bold">LillDiary</span> as your family memory keeper and can’t wait to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
