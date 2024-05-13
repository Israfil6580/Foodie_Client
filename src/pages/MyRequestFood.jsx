import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FiDollarSign } from "react-icons/fi";

const MyRequestFood = () => {
    const { user, setLoading, loading } = useContext(AuthContext)
    const [allMyRequest, setAllMyRequest] = useState([])
    useEffect(() => {
        if (user) {
            getData()
        }
    }, [user])

    const getData = async () => {
        try {
            const response = await axios("http://localhost:4000/food");
            const allData = response.data;
            const data = allData.filter(sData => sData.userEmail === user?.email);
            setAllMyRequest(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };
    return (
        allMyRequest.length === 0 ? (
            <div className="max-w-7xl mx-auto text-center py-56">
                <h1 className="lg:text-3xl text-2xl font-bold font-title text-black">No request found</h1>
            </div>
        ) : (

            <div className="max-w-7xl mx-auto flex justify-center flex-col items-center px-2">
                <div className="text-center">
                    <h1 className="font-title uppercase text-3xl lg:text-4xl font-bold py-10">my&nbsp;&nbsp;food&nbsp;&nbsp;request</h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pb-20">
                    {allMyRequest.map(req => {
                        const { donatorName, pickupLocation, expireDate, requestDate, donationAmount, _id } = req;
                        return (
                            <div key={_id} className="card w-auto bg-green-100">
                                <div className="card-body">
                                    <div>
                                        <p className="text-sm font-title">Donator Name</p>
                                        <p className="text-lg font-bold font-title">{donatorName}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-title">Pickup Location
                                        </p>
                                        <p className="text-lg font-bold font-title">{pickupLocation}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-title">expired Date
                                        </p>
                                        <p className="text-lg font-bold font-title">{expireDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-title">Request Date
                                        </p>
                                        <p className="text-lg font-bold font-title">{requestDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-title"> Donation Amount
                                        </p>
                                        <p className="text-lg font-bold font-title flex items-center gap-1"><FiDollarSign />{donationAmount}  </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    );
};

export default MyRequestFood;