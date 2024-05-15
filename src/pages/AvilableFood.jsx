import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AvailableFood = () => {
    const [allFood, setAllFood] = useState([]);
    const [filteredFood, setFilteredFood] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [loading, setLoading] = useState(true);
    const [layoutMode, setLayoutMode] = useState("grid");

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const status = 'available'
            const response = await axios(`https://server-five-coral.vercel.app/available-foods/${status}`);
            const data = response.data;
            setAllFood(data);
            setFilteredFood(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        setFilteredFood(allFood.filter(food => food.foodName.toLowerCase().includes(searchQuery.toLowerCase())));
    }, [allFood, searchQuery]);

    useEffect(() => {
        if (sortBy === "expireDate") {
            const sortedFood = [...filteredFood].sort((a, b) => new Date(a.expireDate) - new Date(b.expireDate));
            setFilteredFood(sortedFood);
        }
    }, [sortBy]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSort = (option) => {
        if (option === sortBy) {
            setSortBy("");
            setFilteredFood(allFood.filter(food => food.foodName.toLowerCase().includes(searchQuery.toLowerCase())));
        } else {
            setSortBy(option);
        }
    };

    const toggleLayoutMode = () => {
        setLayoutMode(prevMode => prevMode === "grid" ? "two-column" : "grid");
    };

    if (loading) {
        return <div className='min-h-[70vh] flex justify-center items-center'>
            <span className="loading loading-spinner loading-lg bg-green-400"></span>
        </div>
    }

    return (
        <div className="max-w-7xl mx-auto min-h-screen pb-20 px-2 overflow-x-hidden">
            <div className="text-center">
                <motion.h1
                    className="font-title uppercase text-3xl lg:text-4xl font-bold my-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Available Foods
                </motion.h1>
            </div>
            <Helmet>
                <title>Foddie | Available_Food</title>
            </Helmet>
            <div className="text-center">
                <motion.input
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-[96%] mx-[2%] lg:w-6/12 lg:mx-auto px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 border rounded-lg outline-none"
                    type="email"
                    name="email"
                    placeholder="Search by food name"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                />
            </div>
            <div className="flex justify-center items-center mb-8 mt-4 w-full">
                <div className="md:w-full flex md:justify-between md:flex-row flex-col items-center gap-2">
                    <button onClick={() => handleSort("expireDate")} className="btn btn-secondary mr-2">{sortBy === "expireDate" ? "Sorted by Expire Date" : "Sort by Expire Date"}</button>
                    <button onClick={toggleLayoutMode} className="btn btn-secondary">{layoutMode === "grid" ? "Change to Two Column" : "Change to Three Column"}</button>
                </div>
            </div>
            <AnimatePresence>
                <div className={layoutMode === "grid" ? "grid grid-cols-1 lg:grid-cols-3 gap-6 gap-y-16" : "grid grid-cols-2 gap-6 gap-y-16"}>
                    {filteredFood.map((food, index) => (
                        <motion.div
                            key={food._id}
                            className="card card-compact w-auto bg-green-100 pb-2"
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 1 }}
                        >
                            <figure>
                                <motion.img
                                    className="h-60 w-full object-cover"
                                    src={food.foodImage}
                                    alt="Food"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                />
                            </figure>
                            <div className="card-body">
                                <div className="mt-1 space-y-2">
                                    <motion.h3
                                        className="text-lg font-semibold title-font uppercase tracking-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                    >
                                        {food.foodName}
                                    </motion.h3>
                                    <motion.div
                                        className="flex items-center space-x-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                                    >
                                        <MdProductionQuantityLimits className="h-5 w-5 text-gray-500" />
                                        <span className="text-sm">Quantity - {food.foodQuantity}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center space-x-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                                    >
                                        <CiLocationOn className="h-5 w-5 text-gray-500" />
                                        <span className="text-sm">Location - {food.pickupLocation}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center space-x-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                                    >
                                        <CiCalendar className="h-5 w-5 text-gray-500" />
                                        <span className="text-sm">Expires - {food.expireDate}</span>
                                    </motion.div>
                                    <motion.p
                                        className="text-sm text-gray-500"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                                    >
                                        Notes - {food.additionalNotes.split(" ").slice(0, 19).join(" ")}
                                    </motion.p>
                                    <motion.div
                                        className="flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between lg:items-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <motion.img
                                                alt="Donator"
                                                className="h-10 w-10 object-cover rounded-xl"
                                                src={food.donatorPhoto}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 + 0.9 }}
                                            />
                                            <div className="flex flex-col leading-tight">
                                                <p className="text-sm font-medium text-gray-500">{food.donatorName}</p>
                                                <p className="text-[13px] font-medium">{food.donatorEmail}</p>
                                            </div>
                                        </div>
                                        <Link
                                            to={`/available-foods/${food._id}`}
                                            className="btn btn-warning text-white min-h-[2.5rem] h-[2.5rem]"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 + 1.0 }}
                                        >
                                            View Details
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
            <ScrollRestoration />
        </div>
    );
};

export default AvailableFood;


