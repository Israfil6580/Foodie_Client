import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FiDollarSign } from "react-icons/fi";
import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyRequestFood = () => {
    const { user } = useContext(AuthContext)
    const [allMyRequest, setAllMyRequest] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (user) {
            getData()
        }
    }, [user])

    const getData = async () => {
        setLoading(true)
        try {
            const response = await axios(`https://server-five-coral.vercel.app/requested-foods/${user?.email}`, { withCredentials: true });
            const data = response.data;
            setAllMyRequest(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };
    if (loading) {
        return <div className='min-h-[70vh] flex justify-center items-center'>
            <span className="loading loading-spinner loading-lg bg-green-400"></span>
        </div>
    }
    return (
        <motion.div
            className="max-w-7xl mx-auto min-h-[70vh]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            <Helmet>
                <title>Foddie | Food_Request</title>
            </Helmet>
            <div className="flex justify-center flex-col items-center px-2">
                <div className="text-center">
                    <motion.h1
                        className="font-title uppercase text-3xl lg:text-4xl font-bold my-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        my&nbsp;&nbsp;food&nbsp;&nbsp;request
                    </motion.h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pb-20">
                    {allMyRequest.map(req => {
                        const { donatorName, pickupLocation, expireDate, requestDate, donationAmount, _id } = req;
                        return (
                            <motion.div
                                key={_id}
                                className="card w-auto bg-green-100"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 1 }}
                            >
                                <div className="card-body">
                                    <div>
                                        <p className="text-sm font-title">Donator Name</p>
                                        <p className="text-lg font-bold font-title">{donatorName}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-title">Pickup Location</p>
                                        <p className="text-lg font-bold font-title">{pickupLocation}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-title">expired Date</p>
                                        <p className="text-lg font-bold font-title">{expireDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-title">Request Date</p>
                                        <p className="text-lg font-bold font-title">{requestDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-title">Donation Amount</p>
                                        <p className="text-lg font-bold font-title flex items-center gap-1"><FiDollarSign />{donationAmount}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
                <ScrollRestoration />
            </div>
        </motion.div>
    );
};

export default MyRequestFood;