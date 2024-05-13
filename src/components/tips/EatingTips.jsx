import { motion } from "framer-motion";
import healthy from "/images/healthy.jpg";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const EatingTips = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.5, // Trigger animation when 50% of the component is in view
    });

    return (
        <div className="max-w-7xl px-2 mx-auto">
            <div className="text-center">
                <h1 className="font-title uppercase text-3xl lg:text-4xl font-bold pb-10">Healthy Eating Tips</h1>
            </div>
            <div className="hero" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: .6, ease: "easeInOut" }}
                    className="flex pb-24 flex-col-reverse lg:flex-row-reverse items-center justify-center gap-10"
                >
                    <div className="lg:w-1/2">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: .6, delay: 0.3, ease: "easeInOut" }}
                            className="rounded-3xl"
                            src={healthy}
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: .6, delay: 0.3, ease: "easeInOut" }}
                            className="space-y-4"
                        >
                            <div className="space-y-2">
                                <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Discover simple and effective ways to nourish your body and mind with a balanced diet.
                                </p>
                            </div>
                            <ul className="grid gap-2">
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: .6, delay: 0.7, ease: "easeInOut" }}
                                >
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Incorporate more fruits and vegetables into your meals.
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: .6, delay: 0.7, ease: "easeInOut" }}
                                >
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Aim to include foods from all food groups in your diet, including fruits, vegetables, whole grains, lean proteins, and healthy fats
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: .6, delay: 0.7, ease: "easeInOut" }}
                                >
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Choose whole, minimally processed foods whenever possible.
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: .6, delay: 0.7, ease: "easeInOut" }}
                                >
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Fruits and vegetables are packed with vitamins, minerals, fiber, and antioxidants.
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: .6, delay: 0.7, ease: "easeInOut" }}
                                >
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Minimize your intake of foods and beverages high in added sugars, refined grains, and unhealthy fats.
                                </motion.li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default EatingTips;
