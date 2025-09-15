import React, { useState } from 'react';

const genericQuestions = [
  {
    question: 'How do I create a new account?',
    answer: 'To create a new account, simply click on the "Login" button in the top right corner and follow the instructions to sign up. It’s quick and easy!',
  },
  {
    question: 'How can I join a club?',
    answer: 'You can join a club by visiting the "Clubs" page, selecting the club you are interested in, and clicking the "Join" button on their page.',
  },
  {
    question: 'How do I register for an event?',
    answer: 'Events can be registered for on the "Events" page. Find the event you want to attend and click the "Register" button to secure your spot.',
  },
  {
    question: 'What if I forget my password?',
    answer: 'If you forget your password, go to the "Login" page and click on the "Forgot Password" link. We will send you an email with instructions on how to reset it.',
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Currently, there is no dedicated mobile app, but our website is fully responsive and works great on all mobile devices.',
  },
  {
    question: 'How can I contact the team for support?',
    answer: 'If your question is not listed here, you can reach out to us by clicking the "Ask a New Question" button below. We’ll get back to you as soon as possible.',
  },
  {
    question: 'Can I suggest a new feature?',
    answer: 'Yes! We love hearing from our community. You can use the "Contact Us" link to send us your feedback and feature suggestions.',
  },
  {
    question: 'Is my personal information safe?',
    answer: 'We take your privacy seriously. Your personal information is protected with industry-standard encryption and security measures. We do not share your data with third parties.',
  },
  {
    question: 'How do I post a new event?',
    answer: 'Event posting is available for club administrators. Please contact your club’s leader or an admin for details on how to get your event listed on the page.',
  },
  {
    question: 'Where can I find club-specific information?',
    answer: 'Club-specific information, including their mission, members, and upcoming events, can be found on each club’s individual page. Just navigate to the "Clubs" section.',
  },
];

export default function Support() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-8 bg-[#292929] text-gray-300 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary text-center mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-400 text-center text-lg mb-8 max-w-2xl">
        Find quick answers to the most common questions about our platform.
      </p>

      {/* FAQ Accordion */}
      <div className="w-full max-w-4xl space-y-4">
        {genericQuestions.map((item, index) => (
          <div
            key={index}
            className="bg-brand-nav rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center p-6 text-white">
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            {/* Answer (conditionally rendered) */}
            <div className={`p-6 bg-[#20423f] transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-gray-400">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 text-lg mb-4">
          Still need help?
        </p>
        <a href="mailto:richardgomesxd@gmail.com?subject=New%20Support%20Question" className="bg-brand-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition transform hover:scale-105">
          Ask a New Question
        </a>
      </div>
    </div>
  );
}