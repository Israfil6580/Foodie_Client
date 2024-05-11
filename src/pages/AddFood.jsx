import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from 'axios';
import toast from "react-hot-toast"
function AddFood() {
    const { user, loading, setLoading } = useContext(AuthContext);

    const [foodName, setFoodName] = useState("");
    const [foodImage, setFoodImage] = useState("");
    const [foodQuantity, setFoodQuantity] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");
    const [expiredDateTime, setExpiredDateTime] = useState("");
    const [additionalNotes, setAdditionalNotes] = useState("");
    const [foodStatus, setFoodStatus] = useState("available");
    const [donatorName, setDonatorName] = useState("");
    const [donatorEmail, setDonatorEmail] = useState("");
    const [donatorPhoto, setDonatorPhoto] = useState("");

    useEffect(() => {
        setLoading(false)
        if (user) {
            setDonatorName(user.displayName || "");
            setDonatorEmail(user.email || "");
            setDonatorPhoto(user.photoURL || "");
        }
    }, [setLoading, user]);

    const handleAddFood = async (e) => {
        setLoading(true)
        e.preventDefault();
        const addedInfo = { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, foodStatus, donatorName, donatorEmail, donatorPhoto };
        const { data } = await axios.post('http://localhost:4000/food', addedInfo);
        console.log(data);
        setTimeout(() => {
            setLoading(false);
            toast.success("Food item added successfully");
        }, 1500);
    };

    return (
        <div className="max-w-3xl mx-auto mt-8 min-h-screen px-2">
            <div className="text-center">
                <h1 className="font-title uppercase text-2xl lg:text-3xl font-bold pb-10">Add Food</h1>
            </div>
            <form onSubmit={handleAddFood}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="mb-2">
                        <label htmlFor="foodName" className="block font-medium">Food Name</label>
                        <input type="text" id="foodName" onChange={(e) => setFoodName(e.target.value)} placeholder="Enter food name" className="block w-full mt-1 p-2 border-gray-300 rounded-md" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="foodImage" className="block font-medium">Food Image (URL)</label>
                        <input type="url" id="foodImage" onChange={(e) => setFoodImage(e.target.value)} placeholder="Enter food image URL" className="block w-full mt-1 p-2 border-gray-300 rounded-md" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="foodQuantity" className="block font-medium">Food Quantity</label>
                        <input type="number" id="foodQuantity" onChange={(e) => setFoodQuantity(e.target.value)} placeholder="Enter food quantity" className="block w-full mt-1 p-2 border-gray-300 rounded-md" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="pickupLocation" className="block font-medium">Pickup Location</label>
                        <input type="text" id="pickupLocation" onChange={(e) => setPickupLocation(e.target.value)} placeholder="Enter pickup location" className="block w-full mt-1 p-2 border-gray-300 rounded-md" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="expiredDateTime" className="block font-medium">Expired Date/Time</label>
                        <input type="datetime-local" id="expiredDateTime" onChange={(e) => setExpiredDateTime(e.target.value)} placeholder="Enter expired date/time" className="block w-full mt-1 p-2 border-gray-300 rounded-md" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="additionalNotes" className="block font-medium">Additional Notes</label>
                        <textarea id="additionalNotes" onChange={(e) => setAdditionalNotes(e.target.value)} placeholder="Enter additional notes" className="block w-full mt-1 p-2 border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="donatorName" className="block font-medium">Donator Name</label>
                        <input type="text" id="donatorName" defaultValue={donatorName} onChange={(e) => setDonatorName(e.target.value)} placeholder="Enter donator name" className="block w-full mt-1 p-2 border-gray-300 rounded-md" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="donatorEmail" className="block font-medium">Donator Email</label>
                        <input type="email" id="donatorEmail" defaultValue={donatorEmail} onChange={(e) => setDonatorEmail(e.target.value)} placeholder="Enter donator email" className="block w-full mt-1 p-2 border-gray-300 rounded-md" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="donatorPhoto" className="block font-medium">Donator Photo (URL)</label>
                        <input type="text" id="donatorPhoto" defaultValue={donatorPhoto} onChange={(e) => setDonatorPhoto(e.target.value)} placeholder="Enter donator photo URL" className="block w-full mt-1 p-2 border-gray-300 rounded-md" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="foodStatus" className="block font-medium">Food Status</label>
                        <select id="foodStatus" onChange={(e) => setFoodStatus(e.target.value)} className="block w-full mt-1 p-2 border-gray-300 rounded-md" required>
                            <option value="available">Available</option>
                        </select>
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-warning bg-warning text-white min-h-[2.5rem] h-[2.5rem] transition-transform px-10 mt-5 mb-5" hidden={loading}>
                        {loading ? <span className="loading bg-white loading-spinner loading-sm"></span> : "Add"}
                    </button>
                </div>

            </form>
        </div>

    );
}

export default AddFood;
