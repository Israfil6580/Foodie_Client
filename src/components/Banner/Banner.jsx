import { motion } from "framer-motion";
import banner from "/images/banner.jpg";

const Banner = () => {
    return (
        <div className="max-w-7xl px-2 py-24 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, delay: 0.5, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6, delay: 0.7, ease: "easeOut" }}
                    className="font-bold text-neutral font-title leading-tight text-4xl lg:text-5xl uppercase"
                >
                    Connecting Communities Through Food
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .6, delay: 1, ease: "easeOut" }}
                    className="mt-6 text-gray-500"
                >
                    Our mission is to connect surplus food providers with those in need, creating a sustainable and compassionate solution to food insecurity. Join us in our effort to build a more equitable and waste-conscious society.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center h-20"
                >
                    <div className="scroll"></div>
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, delay: 1.1, ease: "easeOut" }}
                className="flex justify-center mt-10"
            >
                <motion.img
                    className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                    src={banner}
                    alt="App Image"
                />
            </motion.div>
        </div>
    );
};

export default Banner;
