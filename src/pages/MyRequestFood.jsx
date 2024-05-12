import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

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
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false); // Set loading to false in case of error
        }
    };
    console.log(allMyRequest);
    return (
        <div className="min-h-screen max-w-7xl mx-auto">

        </div>
    );
};

export default MyRequestFood;