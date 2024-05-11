import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const FoodDetails = () => {
    const { id } = useParams()
    const [detailsData, setDetailsData] = useState([])
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

    console.log(detailsData);
    return (
        <div className="max-w-7xl px-2 mx-auto py-20 flex gap-6 lg:flex-row flex-col lg:items-start">
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
                            <div className="modal-box w-11/12 bg-green-100 max-w-5xl">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FoodDetails;