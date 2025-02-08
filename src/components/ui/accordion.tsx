import React, { useState } from 'react';

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="border border-gray-700 rounded-md">
            {items.map((item, index) => (
                <div key={index}>
                    <button
                        className="flex justify-between items-center w-full p-4 text-left bg-gray-800 hover:bg-gray-700 focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span>{item.title}</span>
                        <span>{openIndex === index ? '-' : '+'}</span>
                    </button>
                    {openIndex === index && (
                        <div className="p-4 bg-gray-900">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;