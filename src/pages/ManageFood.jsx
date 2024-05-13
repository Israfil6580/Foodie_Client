import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Swal from 'sweetalert2'
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaUpload } from "react-icons/fa6";

const ManageFood = () => {
    const { user, setLoading, loading } = useContext(AuthContext)
    const [MyAddedFood, setMyAddedFood] = useState([])
    const [singleUpdate, setSingleUpdate] = useState([]);
    const [startDate, setStartDate] = useState(null);


    const submitPurpose = (id) => {
        axios(`http://localhost:4000/food/${id}`)
            .then(response => {
                setSingleUpdate(...response.data);
                getData()
            });
    }
    useEffect(() => {
        if (singleUpdate.expireDate) {
            setStartDate(new Date(singleUpdate.expireDate).toLocaleDateString());
        } else {
            setStartDate(null);
        }
    }, [singleUpdate]);



    const handleUpdateFood = async (e) => {
        e.preventDefault();

        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const additionalNotes = form.additionalNotes.value;
        const foodStatus = form.foodStatus.value;
        const donatorName = form.donatorName.value;
        const donatorEmail = form.donatorEmail.value;
        const donatorPhoto = form.donatorPhoto.value;
        const addedInfo = { foodName, foodImage, foodQuantity, pickupLocation, expireDate: startDate, additionalNotes, foodStatus, donatorName, donatorEmail, donatorPhoto };
        setLoading(true);
        axios.put(`http://localhost:4000/food/${singleUpdate._id}`, addedInfo)
            .then(response => {
                setTimeout(() => {
                    setLoading(false);
                    if (response.data.modifiedCount === 0) {
                        toast.error("No update found");
                    } else {
                        toast.success("Update successful");
                        getData()
                    }
                }, 1000);
            })
            .catch(error => {
                console.error("Error updating food:", error);
                toast.error("An error occurred while updating");
                setLoading(false); // Hide loading indicator in case of error
            });


    };



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
            background: "#DCFCE7",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`http://localhost:4000/food/${id}`)
                    .then(response => {
                        console.log(response.data);
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success',
                            background: "#DCFCE7"
                        });
                        getData(); // Call your getData function here if needed
                    })
                    .catch(error => {
                        console.error('Error deleting:', error);
                        Swal.fire({
                            title: 'Error!',
                            text: 'An error occurred while deleting.',
                            icon: 'error',
                            background: "#DCFCE7"
                        });
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: 'Cancelled',
                    text: 'Your imaginary file is safe :)',
                    icon: 'error',
                    background: "#DCFCE7"
                });
            }
        });
    }

    useEffect(() => {
        if (user) {
            getData()
        }
    }, [user]);

    const getData = async () => {
        try {
            const response = await axios("http://localhost:4000/food");
            const allData = response.data;
            const data = allData.filter(sData => sData.donatorEmail === user?.email);
            setMyAddedFood(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    return (
        <div className="max-w-7xl min-h-[60vh] mx-auto">
            {MyAddedFood.length === 0 ? (
                <div className="text-center py-56">
                    <h1 className="text-3xl font-bold font-title">No added food</h1>
                </div>
            ) : (
                <div className="overflow-x-auto py-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Food Name</th>
                                <th>Pickup Location</th>
                                <th>Expire Date</th>
                                <th>Food Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MyAddedFood.map(food => {
                                    const { foodName, foodImage, pickupLocation, expireDate, foodStatus, foodQuantity, _id } = food;
                                    return (
                                        <tr key={_id}>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-14 h-14">
                                                            <img src={foodImage} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{foodName}</div>
                                                        <div className="text-sm opacity-50">{foodStatus}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {pickupLocation}
                                            </td>
                                            <td>{expireDate}</td>
                                            <td>{foodQuantity}</td>
                                            <th className="flex gap-2">
                                                <button className="btn min-h-12 bg-warning text-white rounded-full h-12 w-12 p-0 text-3xl flex justify-center items-center" onClick={() => { submitPurpose(_id); document.getElementById('my_modal_3').showModal(); }} ><MdEdit /></button>

                                                <button onClick={() => handleDelete(_id)} className="btn min-h-12 bg-warning text-white rounded-full h-12 w-12 p-0 text-3xl flex justify-center items-center"><MdDelete /></button>
                                                <dialog id="my_modal_3" className="modal">
                                                    <div className="modal-box w-11/12 max-w-6xl bg-green-100">
                                                        <div className="text-center py-5">
                                                            <h1 className="text-3xl font-bold uppercase font-title">Update&nbsp; Food</h1>
                                                        </div>
                                                        <form method="dialog">
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <form onSubmit={handleUpdateFood}>
                                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4">
                                                                <div className="mb-2">
                                                                    <label htmlFor="foodName" className="block font-medium">Food Name</label>
                                                                    <input type="text" id="foodName" name="foodName" placeholder="Enter food name" className="block w-full mt-1 p-2 border-gray-300 rounded-md" defaultValue={singleUpdate.foodName} />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="foodImage" className="block font-medium">Food Image (URL)</label>
                                                                    <input type="url" id="foodImage" name="foodImage" placeholder="Enter food image URL" className="block w-full mt-1 p-2 border-gray-300 rounded-md" defaultValue={singleUpdate.foodImage} />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="foodQuantity" className="block font-medium">Food Quantity</label>
                                                                    <input type="number" id="foodQuantity" name="foodQuantity" placeholder="Enter food quantity" className="block w-full mt-1 p-2 border-gray-300 rounded-md" defaultValue={singleUpdate.foodQuantity} />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="pickupLocation" className="block font-medium">Pickup Location</label>
                                                                    <input type="text" id="pickupLocation" name="pickupLocation" placeholder="Enter pickup location" className="block w-full mt-1 p-2 border-gray-300 rounded-md" defaultValue={singleUpdate.pickupLocation} />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="expireDate" className="block font-medium">Expired Date</label>
                                                                    <DatePicker
                                                                        className="p-2 rounded-md lg:w-[414px]"
                                                                        selected={startDate}
                                                                        onChange={date => setStartDate(date.toLocaleDateString())}
                                                                    />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="additionalNotes" className="block font-medium">Additional Notes</label>
                                                                    <textarea id="additionalNotes" name="additionalNotes" placeholder="Enter additional notes" className="block w-full mt-1 p-2 border-gray-300 rounded-md" defaultValue={singleUpdate.additionalNotes} />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="donatorName" className="block font-medium">Donator Name</label>
                                                                    <input type="text" id="donatorName" name="donatorName" placeholder="Enter donator name" className="block w-full mt-1 p-2 border-gray-300 rounded-md" defaultValue={singleUpdate.donatorName} />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="donatorEmail" className="block font-medium">Donator Email</label>
                                                                    <input type="email" id="donatorEmail" name="donatorEmail" placeholder="Enter donator email" className="block w-full mt-1 p-2 border-gray-300 rounded-md" defaultValue={singleUpdate.donatorEmail} />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="donatorPhoto" className="block font-medium">Donator Photo (URL)</label>
                                                                    <input type="text" id="donatorPhoto" name="donatorPhoto" placeholder="Enter donator photo URL" className="block w-full mt-1 p-2 border-gray-300 rounded-md" defaultValue={singleUpdate.donatorPhoto} />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="foodStatus" className="block font-medium">Food Status</label>
                                                                    <select
                                                                        id="foodStatus"
                                                                        name="foodStatus"
                                                                        className="block w-full mt-1 p-2 border-gray-300 rounded-md"
                                                                        value={singleUpdate.foodStatus} // Use value instead of defaultValue
                                                                        onChange={(e) => setSingleUpdate(prevState => ({ ...prevState, foodStatus: e.target.value }))} // Handle onChange event to update state
                                                                    >
                                                                        <option value="requested">Requested</option>
                                                                        <option value="available">Available</option>
                                                                    </select>

                                                                </div>
                                                            </div>

                                                            <div className="text-center">
                                                                <button type="submit" className="btn btn-warning bg-warning text-white min-h-[2.5rem] h-[2.5rem] transition-transform px-10 mt-5 mb-5" hidden={loading}>
                                                                    {loading ? (
                                                                        <>Update<span className="loading bg-white loading-spinner loading-sm"></span></>
                                                                    ) : (
                                                                        <>
                                                                            Update<FaUpload className="text-xl" />
                                                                        </>
                                                                    )}
                                                                </button>
                                                            </div>
                                                        </form>


                                                    </div>
                                                </dialog>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            )
            }
        </div >
    );
};

export default ManageFood;
