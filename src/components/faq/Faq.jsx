import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Faq = () => {
    const faqItems = [
        {
            question: "What is the purpose of the Food Sharing and Surplus Reduction Platform?",
            answer: "This question addresses the core mission and goal of the platform, highlighting its aim to reduce food waste and facilitate sharing among communities."
        },
        {
            question: "Who can use the platform?",
            answer: "Clarifies the target audience or user base, including individuals, businesses, organizations, or charities involved in food donation and collection."
        },
        {
            question: "What types of food can be shared on the platform?",
            answer: "Provides information on the variety of food items accepted for sharing, including perishable and non-perishable goods, as well as dietary considerations."
        },
        {
            question: "Is there a cost to use the platform?",
            answer: "Addresses concerns about any fees or charges associated with using the platform's services for food donation or collection."
        },
        {
            question: "How does the platform work?",
            answer: "Users often seek an explanation of the platform's functionality, including how surplus food is shared, collected, and distributed."
        }
    ];

    const [selectedItem, setSelectedItem] = useState(null);

    const toggleItem = (index) => {
        if (selectedItem === index) {
            setSelectedItem(null);
        } else {
            setSelectedItem(index);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className="text-center">
                <h1 className="font-title uppercase text-3xl lg:text-4xl font-bold pb-10">Frequently Asked Questions</h1>
            </div>
            <div className="flex flex-col gap-2 pb-24">
                {faqItems.map((item, index) => (
                    <div key={index} className="collapse collapse-arrow">
                        <input type="radio" id={`faq-${index}`} name="my-accordion-2" checked={selectedItem === index} onChange={() => toggleItem(index)} />
                        <label htmlFor={`faq-${index}`} className="collapse-title text-lg font-medium cursor-pointer">{item.question}</label>
                        <AnimatePresence>
                            {selectedItem === index && (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="collapse-content"
                                >
                                    <p>{item.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
