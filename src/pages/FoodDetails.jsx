import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const FoodDetails = () => {
    const { user, setLoading, loading } = useContext(AuthContext)
    const { id } = useParams()
    const [detailsData, setDetailsData] = useState([])
    const navigate = useNavigate()
    const handleRequest = async (e) => {
        setLoading(true);
        e.preventDefault();
        const userEmail = e.target.email.value;
        const requestDate = e.target.requestDate.value;
        const additionalNotes = e.target.notes.value;
        const foodStatus = "Requested"
        const addedInfo = { requestDate, userEmail, additionalNotes, foodStatus }
        try {
            const { data } = await axios.patch(`http://localhost:4000/food/${id}`, addedInfo);
            setTimeout(() => {
                console.log(data);
                toast.success("Food requested successfully");
                navigate("/my-food-request")
                setLoading(false);
            }, 1500)
        } catch (error) {
            console.error("Error updating food item:", error);
            toast.error("Failed to update food item");
            setLoading(false);
        }
    };

    const getData = async () => {
        try {
            const { data } = await axios(`http://localhost:4000/food/${id}`);
            setDetailsData(...data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="max-w-7xl px-2 mx-auto py-20 flex gap-6 lg:flex-row flex-col-reverse lg:items-start">
            <div className="lg:w-4/12 bg-green-100 rounded-md p-6">
                <div className="mb-3">
                    <h1 className="lg:text-2xl text-xl font-title font-bold uppercase">Donor&nbsp; Information</h1>
                </div>
                <div className="flex gap-2 flex-col">
                    <div>
                        <h2 className="text-sm font-semibold uppercase font-title">Donor&nbsp;Name</h2>
                        <p className="text-lg font-title uppercase font-bold">{detailsData.donatorName}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold uppercase font-title">Food&nbsp; Pickup&nbsp; Location</h2>
                        <p className="text-lg font-title uppercase font-bold tracking-wide">{detailsData.pickupLocation}</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-8/12 bg-green-100 rounded-md p-6">
                <div className="flex lg:flex-row flex-col gap-5">
                    <div className="lg:w-8/12">
                        <div className="mb-3">
                            <h1 className="lg:text-2xl text-xl font-title font-bold uppercase">Food&nbsp; Information</h1>
                        </div>
                        <img className="h-96 w-full object-cover" src={detailsData.foodImage} alt="" />
                    </div>
                    <div className="lg:w-4/12 flex flex-col gap-3 justify-center">
                        <div>
                            <h2 className="text-sm font-semibold uppercase font-title leading-tight">Food&nbsp;Name</h2>
                            <h1 className="text-lg font-title font-bold uppercase leading-tight">{detailsData.foodName}</h1>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold uppercase font-title leading-tight">Food&nbsp;Quantity</h2>
                            <h1 className="text-lg font-title font-bold uppercase leading-tight">{detailsData.foodQuantity}</h1>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold uppercase font-title leading-tight">Expired&nbsp;Date
                            </h2>
                            <h1 className="text-lg font-title font-bold uppercase leading-tight">{detailsData.expiredDateTime}</h1>
                        </div>
                        {/* modal */}
                        <div className="flex">
                            <button className="btn btn-warning text-white text-base font-medium h-[2.5rem] min-h-[2.5rem]" onClick={() => document.getElementById('my_modal_4').showModal()}>Request<GoArrowUpRight className="text-xl" /></button>
                        </div>

                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl bg-green-50">
                                <div className="flex lg:flex-row flex-col gap-4">
                                    <div className="lg:w-7/12 w-full">
                                        <div className="pb-4">
                                            <h3 className="font-bold lg:text-3xl text-2xl uppercase font-title">Request Food</h3>
                                        </div>
                                        <img src={detailsData.foodImage} className="w-full max-h-[28rem] rounded-md object-cover" alt="" />
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
                                                <input type="text" defaultValue={detailsData.expiredDateTime} className="input input-bordered input-sm font-bold font-title flex-grow" disabled />
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
                            </div>
                        </dialog>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default FoodDetails;