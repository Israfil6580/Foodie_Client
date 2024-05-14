import { motion } from "framer-motion";
import { useState } from "react";
import healthy from "/images/healthy.jpg";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const EatingTips = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleUnhover = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className="max-w-7xl px-2 mx-auto">
            <div className="text-center pb-12">
                <motion.h1
                    className="font-title uppercase text-3xl lg:text-4xl font-bold"
                    initial={{ opacity: 0, scale: 0.9 }} // Initial opacity and scale
                    animate={{ opacity: 1, scale: 1 }} // Animation to make it visible and scale to 1
                    transition={{ duration: 0.1 }} // Transition duration
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Healthy Eating Tips
                </motion.h1>
            </div>
            <div className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6, ease: "easeInOut" }}
                    className="flex pb-24 flex-col-reverse lg:flex-row-reverse items-center justify-center gap-10"
                >
                    <motion.div
                        whileHover={{ scale: isHovered ? 1.05 : 1 }} // Increase scale on hover
                        whileTap={{ scale: isClicked ? 0.95 : 1 }} // Decrease scale on click
                        className="lg:w-1/2"
                    >
                        <motion.img
                            className="rounded-3xl"
                            src={healthy}
                            alt="Healthy Food"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                            onClick={handleClick}
                        />
                    </motion.div>
                    <motion.div
                        className="lg:w-1/2 space-y-4"
                    >
                        <div className="space-y-2">
                            <motion.p
                                whileHover={{ scale: isHovered ? 1.05 : 1 }} // Increase scale on hover
                                whileTap={{ scale: isClicked ? 0.95 : 1 }} // Decrease scale on click
                                onMouseEnter={handleHover}
                                onMouseLeave={handleUnhover}
                                onClick={handleClick}
                                className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                            >
                                Discover simple and effective ways to nourish your body and mind with a balanced diet.
                            </motion.p>
                        </div>
                        <ul className="grid gap-2">
                            {[
                                "Incorporate more fruits and vegetables into your meals.",
                                "Aim to include foods from all food groups in your diet, including fruits, vegetables, whole grains, lean proteins, and healthy fats.",
                                "Choose whole, minimally processed foods whenever possible.",
                                "Fruits and vegetables are packed with vitamins, minerals, fiber, and antioxidants.",
                                "Minimize your intake of foods and beverages high in added sugars, refined grains, and unhealthy fats."
                            ].map((tip, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: isHovered ? 1.05 : 1 }} // Increase scale on hover
                                    whileTap={{ scale: isClicked ? 0.95 : 1 }} // Decrease scale on click
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleUnhover}
                                    onClick={handleClick}
                                >
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    {tip}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default EatingTips;
