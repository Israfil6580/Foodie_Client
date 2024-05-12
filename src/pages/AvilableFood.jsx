import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AvilableFood = () => {
    const [allFood, setAllFood] = useState([]);
    const [filteredFood, setFilteredFood] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios("http://localhost:4000/food");
            const allData = response.data;
            const data = allData.filter(sData => sData.foodStatus === "available");
            console.log(data);
            setAllFood(data);
            setFilteredFood(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        setFilteredFood(allFood.filter(food => food.foodName.toLowerCase().includes(searchQuery.toLowerCase())));
    }, [allFood, searchQuery]);

    useEffect(() => {
        if (sortBy === "expireDate") {
            const sortedFood = [...filteredFood].sort((a, b) => new Date(a.expiredDateTime) - new Date(b.expiredDateTime));
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

    return (
        <div className="max-w-7xl mx-auto min-h-screen pb-20">
            <div className="text-center">
                <h1 className="font-title uppercase text-3xl lg:text-4xl font-bold py-10">available&nbsp;&nbsp;foods</h1>
            </div>
            <div className="text-center">
                <input type="text" placeholder="Search by food name" value={searchQuery} onChange={handleSearch} className="p-2 border-gray-300 rounded-md lg:w-1/2 w-[96%] mx-[2%] outline-none" />
            </div>
            <div className="flex justify-end items-center mb-4 mt-4">
                <div>
                    <button onClick={() => handleSort("expireDate")} className="btn btn-secondary mr-2">{sortBy === "expireDate" ? "Sorted by Expire Date" : "Sort by Expire Date"}</button>
                    {/* Add more sorting options as needed */}
                </div>
            </div>
            {filteredFood.length === 0 ? (
                <div className="text-center">
                    <h1>Nothing Found</h1>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {filteredFood.map(food => (
                        <div key={food._id} className="card card-compact w-auto bg-green-100 lg:hover:scale-105 transition-transform">
                            <figure><img className="h-60 w-auto object-cover" src={food.foodImage} alt="Shoes" /></figure>
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
                                        <span className="text-sm">Expires - {food.expiredDateTime}</span>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        Notes - {food.additionalNotes.split(" ").slice(0, 19).join(" ")}...
                                    </p>
                                    <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between lg:items-center">
                                        <div className="flex items-center space-x-2">
                                            <img
                                                alt="Donator"
                                                className="h-10 w-10 object-cover rounded-xl"
                                                src={food.donatorPhoto}
                                            />
                                            <div className="flex flex-col leading-tight">
                                                <p className="text-sm font-medium text-gray-500">{food.donatorName}</p>
                                                <p className="text-[13px] font-medium">{food.donatorEmail}</p>
                                            </div>
                                        </div>
                                        <Link to={`/available-foods/${food._id}`} className="btn btn-warning text-white min-h-[2.5rem] h-[2.5rem]">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvilableFood;
