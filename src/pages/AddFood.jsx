import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../provider/AuthProvider";
import axios from 'axios';
import toast from "react-hot-toast";
import { MdOutlineAddCircle } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ScrollRestoration, useNavigate } from "react-router-dom";


function AddFood() {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [foodName, setFoodName] = useState("");
    const [foodImage, setFoodImage] = useState("");
    const [foodQuantity, setFoodQuantity] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");
    const [additionalNotes, setAdditionalNotes] = useState("");
    const [foodStatus, setFoodStatus] = useState("available");
    const [donatorName, setDonatorName] = useState("");
    const [donatorEmail, setDonatorEmail] = useState("");
    const [donatorPhoto, setDonatorPhoto] = useState("");
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(false);
        if (user) {
            setDonatorName(user.displayName || "");
            setDonatorEmail(user.email || "");
            setDonatorPhoto(user.photoURL || "");
        }
    }, [setLoading, user]);


    const handleAddFood = async (e) => {
        e.preventDefault();
        setLoading(true);
        const addedInfo = { foodName, foodImage, foodQuantity, pickupLocation, expireDate: startDate, additionalNotes, foodStatus, donatorName, donatorEmail, donatorPhoto };

        setTimeout(async () => {
            try {
                const { data } = await axios.post('http://localhost:4000/food', addedInfo);
                setLoading(false);
                toast.success("Food item added successfully");
                navigate("/manage-my-foods")
            } catch (error) {
                setLoading(false);
                toast.error("Failed to add food item");
            }
        }, 1000);
    };

    return (
        <motion.div
            className="min-h-screen mt-10 mx-2 lg:mb-0 mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
        >
            <motion.div
                className="w-full max-w-5xl mx-auto overflow-x-hidden bg-green-100 rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
            >
                <motion.div
                    className="px-6 py-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="text-center">
                        <h1 className="font-title uppercase text-2xl lg:text-3xl font-bold pb-6">Add Food</h1>
                    </div>

                    <form onSubmit={handleAddFood}>
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <motion.div
                                className="mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <label htmlFor="foodName" className="block font-medium text-sm font-title">
                                    Food Name
                                </label>
                                <motion.input
                                    type="text"
                                    id="foodName"
                                    onChange={(e) => setFoodName(e.target.value)}
                                    placeholder="Enter food name"
                                    className="block w-full mt-1 p-2 border-gray-300 rounded-md outline-none"
                                    required
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>

                            <motion.div
                                className="mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <label htmlFor="foodImage" className="block font-medium text-sm font-title">
                                    Food Image (URL)
                                </label>
                                <motion.input
                                    type="url"
                                    id="foodImage"
                                    onChange={(e) => setFoodImage(e.target.value)}
                                    placeholder="Enter food image URL"
                                    className="block w-full mt-1 p-2 border-gray-300 rounded-md outline-none"
                                    required
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>

                            <motion.div
                                className="mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <label htmlFor="foodQuantity" className="block font-medium text-sm font-title">
                                    Food Quantity
                                </label>
                                <motion.input
                                    type="number"
                                    id="foodQuantity"
                                    onChange={(e) => setFoodQuantity(e.target.value)}
                                    placeholder="Enter food quantity"
                                    className="block w-full mt-1 p-2 border-gray-300 rounded-md outline-none"
                                    required
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>

                            <motion.div
                                className="mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <label htmlFor="pickupLocation" className="block font-medium text-sm font-title">
                                    Pickup Location
                                </label>
                                <motion.input
                                    type="text"
                                    id="pickupLocation"
                                    onChange={(e) => setPickupLocation(e.target.value)}
                                    placeholder="Enter pickup location"
                                    className="block w-full mt-1 p-2 border-gray-300 rounded-md outline-none"
                                    required
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>



                            <motion.div
                                className="mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <label htmlFor="expiredDateTime" className="block font-medium text-sm font-title">
                                    Expired Date
                                </label>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <DatePicker
                                        className="p-2 rounded-md w-[414px] outline-none"
                                        selected={startDate}
                                        onChange={date => setStartDate(date.toLocaleDateString())}
                                    />
                                </motion.div>
                            </motion.div>


                            <motion.div
                                className="mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <label htmlFor="additionalNotes" className="block font-medium text-sm font-title">
                                    Additional Notes
                                </label>
                                <motion.textarea
                                    id="additionalNotes"
                                    onChange={(e) => setAdditionalNotes(e.target.value)}
                                    placeholder="Enter additional notes"
                                    className="block w-full mt-1 p-2 border-gray-300 rounded-md outline-none"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>


                            <motion.div
                                className="mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <label htmlFor="donatorName" className="block font-medium text-sm font-title">
                                    Donator Name
                                </label>
                                <motion.input
                                    type="text"
                                    id="donatorName"
                                    defaultValue={donatorName}
                                    onChange={(e) => setDonatorName(e.target.value)}
                                    placeholder="Enter donator name"
                                    className="block w-full mt-1 p-2 border-gray-300 rounded-md outline-none"
                                    required
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>


                            <motion.div
                                className="mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                            >
                                <label htmlFor="donatorEmail" className="block font-medium text-sm font-title">
                                    Donator Email
                                </label>
                                <motion.input
                                    type="email"
                                    id="donatorEmail"
                                    defaultValue={donatorEmail}
                                    onChange={(e) => setDonatorEmail(e.target.value)}
                                    placeholder="Enter donator email"
                                    className="block w-full mt-1 p-2 border-gray-300 rounded-md outline-none"
                                    required
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>

                            <motion.div
                                className="mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <label htmlFor="donatorPhoto" className="block font-medium">Donator Photo (URL)</label>
                                <motion.input
                                    type="text"
                                    id="donatorPhoto"
                                    defaultValue={donatorPhoto}
                                    onChange={(e) => setDonatorPhoto(e.target.value)}
                                    placeholder="Enter donator photo URL"
                                    className="block w-full mt-1 p-2 border-gray-300 rounded-md"
                                    required
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>
                            <motion.div
                                className="mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1 }}
                            >

                                <div className="mb-2">
                                    <label htmlFor="foodStatus" className="block font-medium">Food Status</label>
                                    <select id="foodStatus" onChange={(e) => setFoodStatus(e.target.value)} className="block w-full mt-1 p-2 border-gray-300 rounded-md" required>
                                        <option value="available">Available</option>
                                    </select>
                                </div>
                            </motion.div>
                        </motion.div>

                        <div className="text-center mt-4">

                            <button
                                className="btn btn-warning bg-warning text-white min-h-[2.5rem] h-[2.5rem] transition-transform hover:scale-105"
                                hidden={loading}
                            >
                                {loading ? (
                                    <>Add <span className="loading bg-white loading-spinner loading-sm"></span></>
                                ) : (
                                    <>
                                        Add <MdOutlineAddCircle className="text-lg" />
                                    </>
                                )}
                            </button>
                        </div>
                        <ScrollRestoration />
                    </form>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default AddFood;
