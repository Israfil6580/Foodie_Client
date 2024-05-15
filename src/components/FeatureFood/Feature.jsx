import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

const Feature = () => {
    const [allFood, setAllFood] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const status = 'available'
            const response = await axios(`https://server-five-coral.vercel.app/available-foods/${status}`);
            const data = response.data;
            const sortedQuantity = [...data].sort((b, a) => (a.foodQuantity) - (b.foodQuantity));
            setAllFood(sortedQuantity);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // State to track hover and click states for each card
    const [hoverIndex, setHoverIndex] = useState(null);
    const [clickIndex, setClickIndex] = useState(null);

    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className="text-center">
                <motion.h1
                    className="font-title uppercase text-3xl lg:text-4xl font-bold"
                    initial={{ opacity: 0, scale: 0.9 }} // Initial opacity and scale
                    animate={{ opacity: 1, scale: 1 }} // Animation to make it visible and scale to 1
                    transition={{ duration: 0.1 }} // Transition duration
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Featured Foods
                </motion.h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
                {allFood.slice(0, 6).map((food, index) => (
                    <motion.div
                        key={food._id}
                        className="card card-compact w-auto bg-green-100 pb-2"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.1 }} // Set transition time to 0.2 seconds
                        whileHover={{ scale: 1.05 }} // Scale increases slightly on hover
                        whileTap={{ scale: 1 }} // Scale decreases slightly on click
                        onHoverStart={() => setHoverIndex(index)}
                        onHoverEnd={() => setHoverIndex(null)}
                        onTap={() => setClickIndex(index)}
                    >
                        <figure>
                            <motion.img
                                className="h-60 w-full object-cover"
                                src={food.foodImage}
                                alt="Shoes"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0 }}
                            />
                        </figure>
                        <div className="card-body">
                            <div className="mt-1 space-y-2">
                                <h3 className="text-lg font-semibold title-font uppercase tracking-tight">{food.foodName}</h3>
                                <div className="flex items-center space-x-2">
                                    <MdProductionQuantityLimits className="h-5 w-5 text-gray-500" />
                                    <span className="text-sm">Quantity - {food.foodQuantity}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CiLocationOn className="h-5 w-5 text-gray-500" />
                                    <span className="text-sm">Location - {food.pickupLocation}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CiCalendar className="h-5 w-5 text-gray-500" />
                                    <span className="text-sm">Expires - {food.expireDate}</span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Notes - {food.additionalNotes.split(" ").slice(0, 19).join(" ")}
                                </p>
                                <div className="flex justify-between items-center pt-2">
                                    <div className="flex items-center space-x-2">
                                        <img
                                            alt="Donator"
                                            className="h-10 w-10 object-cover rounded-xl"
                                            src={food.donatorPhoto}
                                        />
                                        <div className="flex flex-col leading-tight">
                                            <p className="text-sm font-medium text-gray-500">{food.donatorName}</p>
                                            <p className="text-[13px] font-medium">Donator</p>
                                        </div>
                                    </div>
                                    <Link to={`/available-foods/${food._id}`} className="btn btn-warning text-white min-h-[2.5rem] h-[2.5rem]">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="text-center">
                <Link to={"/available-foods"} className="btn btn-warning text-white mb-24 mt-10 px-20">Show All</Link>
            </div>
        </div>
    );
};

export default Feature;
