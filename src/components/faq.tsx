'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does Go Car's doorstep service work?",
    answer:
      'Our service providers come directly to your location with all necessary equipment. You just need to provide access to your vehicle and water source if required.',
  },
  {
    question: 'When will the mobile app be available?',
    answer:
      "We're working hard to launch our mobile app soon. Sign up for our newsletter to be notified as soon as it's available!",
  },
  {
    question: 'What areas do you service?',
    answer:
      'We currently operate in major metropolitan areas. Check our website or contact us to see if we service your location.',
  },
  {
    question: 'How long does a typical service take?',
    answer:
      "Service duration varies depending on the type of service and your vehicle's condition. Most services take between 2-4 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-[#0D220E]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#9A7C3C]">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#1A3E1C] rounded-lg focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#112A12] rounded-b-lg mt-1">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
