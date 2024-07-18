import React from 'react';
import FAQItem from './FAQItem';

interface FAQSectionProps {
  faqs: Array<{ question: string; answer: string }>;
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  return (
    <section className="md:container md:mx-auto px-8 md:px-48">
      <div className='mt-16 w-full'>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your top <span className='bg-encircle bg-cover bg-no-repeat bg-center py-3'>questions,</span><br /> answered</h2>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default FAQSection;