import React from 'react';

const AboutUsPage = () => {
  return ( 
    <div className="m-[4rem] min-h-screen flex items-center justify-center bg-gray-100 p-[4rem]">
      <div className="bg-white shadow-lg rounded-lg p-[3rem] w-full max-w-4xl space-y-8 text-center">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-[3rem] font-bold text-primary mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            LillDiary began simply - as new parents struggling to preserve our countless photos and videos of our daughter's earliest giggles and steps. We filled up phones and hard drives faster than we could organize and back up these irreplaceable memories.
          </p>
        </div>

        {/* Story Section 1 */}
        <div className="bg-gray-50 p-[2rem] rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            Rather than risk losing those fleeting baby moments, we created LillDiary - a solution designed specifically for parents to effortlessly capture their family memories in one beautiful, private, unlimited online diary.
          </p>
        </div>

        {/* Story Section 2 */}
        <div className="bg-gray-50 p-[2rem] rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            As LillDiary grew from a personal passion project into a startup serving millions of families, our mission remained the same - to strengthen connections across generations through saved memories. We strive to build heirlooms as enduring as your family bonds.
          </p>
        </div>

        {/* Conclusion Section */}
        <div className="text-left">
          <h2 className="text-[2.5rem] font-bold text-primary mb-4">Today</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            LillDiary has become our family too - a team of parents, grandparents, aunts, and uncles passionate about helping you easily record, organize, and preserve your little ones' childhoods to cherish for a lifetime. We can't wait to be part of your child's journey from the first steps to first days of school and everywhere in between!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
