import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { LuDollarSign } from "react-icons/lu";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const FoodDetails = () => {
    const { user, setLoading, loading } = useContext(AuthContext);
    const { id } = useParams();
    const [detailsData, setDetailsData] = useState([]);
    const navigate = useNavigate();
    const dialogRef = useRef(null); // Create a ref for the dialog element

    const handleRequest = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (user.email === detailsData.donatorEmail) {
            return setTimeout(() => {
                toast.error("Cannot make request your own donation");
                dialogRef.current.close();
                setLoading(false);
                return;
            }, 1000);
        }

        const userEmail = e.target.email.value;
        const requestDate = e.target.requestDate.value;
        const additionalNotes = e.target.notes.value;
        const donationAmount = e.target.amount.value;
        const foodStatus = "Requested";
        const addedInfo = { requestDate, userEmail, additionalNotes, foodStatus, donationAmount };
        try {
            const { data } = await axios.patch(`http://localhost:4000/food/${id}`, addedInfo);
            setTimeout(() => {
                toast.success("Food requested successfully");
                navigate("/my-food-request");
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error("Error updating food item:", error);
            toast.error("Failed to update food item");
            setLoading(false);
        }
    };

    const getData = async () => {
        try {
            const { data } = await axios(`http://localhost:4000/food/${id}`);
            setDetailsData(...data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl px-2 mx-auto py-20 flex gap-6 lg:flex-row flex-col-reverse lg:items-start"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:w-4/12 bg-green-100 rounded-md p-6"
            >
                <div className="mb-3">
                    <h1 className="lg:text-2xl text-xl font-title font-bold">Donor Information</h1>
                </div>
                <div className="flex gap-2 flex-col">
                    <div>
                        <h2 className="text-sm font-title">Donor Name</h2>
                        <p className="text-xl font-title font-bold">{detailsData.donatorName}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-title">Food Pickup Location</h2>
                        <p className="text-xl font-title font-bold tracking-wide">{detailsData.pickupLocation}</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:w-8/12 bg-green-100 rounded-md md:p-6 p-2"
            >
                <div className="flex lg:flex-row flex-col gap-5">
                    <div className="lg:w-8/12">
                        <div className="mb-3">
                            <h1 className="lg:text-2xl text-xl font-title font-bold">Food Information</h1>
                        </div>
                        <img className="md:h-80 h-56 w-full object-cover" src={detailsData.foodImage} alt="" />
                    </div>
                    <div className="lg:w-4/12 flex flex-col gap-3 justify-center">
                        <div>
                            <h2 className="text-sm font-title leading-tight">Food Name</h2>
                            <h1 className="text-xl font-title font-bold leading-tight">{detailsData.foodName}</h1>
                        </div>
                        <div>
                            <h2 className="text-sm font-title leading-tight">Food Quantity</h2>
                            <h1 className="text-xl font-title font-bold leading-tight">{detailsData.foodQuantity}</h1>
                        </div>
                        <div>
                            <h2 className="text-sm font-title leading-tight">Expired Date</h2>
                            <h1 className="text-xl font-title font-bold leading-tight">{detailsData.expireDate}</h1>
                        </div>
                        {/* modal */}
                        <div className="flex">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="btn btn-warning text-white font-medium h-[2.5rem] min-h-[2.5rem]"
                                onClick={() => document.getElementById('my_modal_4').showModal()}
                            >
                                Request<GoArrowUpRight className="text-xl" />
                            </motion.button>
                        </div>
                        <dialog id="my_modal_4" ref={dialogRef} className="modal">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="modal-box w-11/12 max-w-5xl bg-green-50"
                            >
                                <div className="flex lg:flex-row flex-col-reverse gap-4 pt-5 lg:pt-0">
                                    <div className="lg:w-7/12 w-full">
                                        <div className="pb-4">
                                            <h3 className="font-bold lg:text-3xl text-2xl font-title">Request Food</h3>
                                        </div>
                                        <img src={detailsData.foodImage} className="w-full h-48 md:h-[28rem] rounded-md object-cover" alt="" />
                                    </div>
                                    <div className="lg:w-5/12 w-full">
                                        <form onSubmit={handleRequest} className="flex flex-col gap-3 lg:mt-12">
                                            <div className="flex items-center gap-2">
                                                <label className="w-28 text-sm font-bold font-title" htmlFor="foodName">Food Name</label>
                                                <input type="text" defaultValue={detailsData.foodName} className="input input-bordered input-sm w-auto font-bold font-title flex-grow" disabled />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <label className="w-28 text-sm font-bold font-title" htmlFor="foodImage">Food Image</label>
                                                <input type="url" defaultValue={detailsData.foodImage} className="input input-bordered input-sm w-auto font-bold font-title flex-grow" disabled />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <label className="w-28 text-sm font-bold font-title" htmlFor="foodId">Food Id</label>
                                                <input type="text" defaultValue={detailsData._id} className="input input-bordered input-sm w-auto font-bold font-title flex-grow" disabled />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <label className="w-28 text-sm font-bold font-title" htmlFor="donatorName">Donator Name</label>
                                                <input type="text" defaultValue={detailsData.donatorName} className="input input-bordered input-sm font-bold font-title flex-grow" disabled />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <label className="w-28 text-sm font-bold font-title" htmlFor="DonatorEmail">Donator email</label>
                                                <input type="text" defaultValue={detailsData.donatorEmail} className="input input-bordered input-sm font-bold font-title flex-grow" disabled />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <label className="w-28 text-sm font-bold font-title" htmlFor="DonatorEmail">User email</label>
                                                <input
                                                    type="text"
                                                    value={user?.email || ''}
                                                    name="email"
                                                    className="input input-bordered input-sm font-bold font-title flex-grow"
                                                    disabled
                                                />
                                            </div>


                                            <div className="flex items-center gap-2">
                                                <label className="w-28 text-sm font-bold font-title" htmlFor="requestDate">Request Date</label>
                                                <input type="text" name="requestDate" defaultValue={new Date().toLocaleDateString()} className="input input-bordered input-sm font-bold font-title flex-grow" disabled />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <label className="w-28 text-sm font-bold font-title" htmlFor="foodEmail">Pickup Location</label>
                                                <input type="text" defaultValue={detailsData.pickupLocation} className="input input-bordered input-sm font-bold font-title flex-grow" disabled />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <label className="w-28 text-sm font-bold font-title" htmlFor="expireDate">Expire Date</label>
                                                <input type="text" defaultValue={detailsData.expireDate} className="input input-bordered input-sm font-bold font-title flex-grow" disabled />
                                            </div>

                                            <div className="flex items-center gap-2 relative">
                                                <label className="w-28 text-sm font-bold font-title" htmlFor="expireDate">Donation Amount</label>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    className="lg:w-auto w-32  input input-bordered input-sm font-bold font-title flex-grow lg:pl-8 pl-2"
                                                    min="0"
                                                    defaultValue="0"
                                                    required
                                                />
                                                <span className="absolute lg:left-32 lg:block hidden"><LuDollarSign /> </span>
                                            </div>

                                            <div className="flex items-start gap-2">
                                                <label className="w-28 text-sm font-bold font-title" htmlFor="addNotes">Add notes</label>
                                                <textarea id="additionalNotes" name="notes" defaultValue={detailsData.additionalNotes} className="flex-grow rounded-md p-2 text-sm font-base" />
                                            </div>
                                            <div className="flex justify-end">
                                                <button type="submit" className="btn btn-warning bg-warning text-white min-h-[2.5rem] h-[2.5rem] transition-transform px-10 mt-5 mb-5" hidden={loading}>
                                                    {loading ? (
                                                        <>Request <span className="loading bg-white loading-spinner loading-sm"></span></>
                                                    ) : (
                                                        <>
                                                            Request <GoArrowUpRight className="text-xl" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                            </motion.div>
                        </dialog>
                    </div>
                    <ScrollRestoration />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FoodDetails;
