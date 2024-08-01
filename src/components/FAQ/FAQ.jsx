import React, { useState } from "react";
import './FAQ.css';
import { IconMinus, IconPlus } from "@tabler/icons-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    } 
  };

  const FAQData = [
    {
      question: "What makes Gihbor Plastics stand out in the market?",
      answer: "Gihbor Plastics stands out for our commitment to quality, innovation, and sustainability. We combine graphic creativity with state-of-the-art technology to deliver plastic bags that exceed aesthetic and functional expectations."
    },
    {
      question: "How does Avelar Plastics contribute to sustainability?",
      answer: "Avelar Plastics promotes sustainability by using 100% recycled materials in their products, supporting the circular economy. They are committed to reducing environmental impact through responsible manufacturing practices and innovative eco-friendly solutions."
    },
    {
      question: "What sets Avelar Plastics apart from its competitors?",
      answer: "Avelar Plastics differentiates itself through its dedication to quality craftsmanship, innovative designs, excellent customer service, and a strong emphasis on environmental stewardship. They combine these elements to deliver superior products and experiences to their customers."
    },
    {
      question: "Does Avelar Plastics offer custom packaging solutions?",
      answer: "Yes, Avelar Plastics specializes in providing custom solutions tailored to the specific needs of their clients. They offer personalized design options, printing capabilities, and various material choices to meet the unique requirements of businesses in different sectors."
    }
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <p>Answers to Your Common Questions</p>
      <div className="faq-content">
        {FAQData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              {activeIndex === index ? <IconMinus size={16} /> : <IconPlus size={16} />}
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;