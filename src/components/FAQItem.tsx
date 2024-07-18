'use client'
import Image from 'next/image';
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col px-6 py-3.5 mb-3.5 rounded-3xl bg-slate-50 md:px-5">
      <button 
        className="flex gap-5 justify-between text-md font-bold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='text-start max-w-[80%]'>{question}</div>
        <div className='bg-plus bg-cover h-5 w-5'></div>
      </button>
    </div>
  );
};

export default FAQItem;