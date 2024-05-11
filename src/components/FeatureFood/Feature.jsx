import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
const Feature = () => {
    return (
        <div className="max-w-6xl mx-auto px-2">
            <div className="text-center">
                <h1 className="font-title uppercase text-3xl lg:text-4xl font-bold">Featured Foods</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
                <div className="card card-compact w-auto bg-green-100 border lg:hover:scale-105 transition-transform">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="mt-1 space-y-2">
                            <h3 className="text-lg font-semibold title-font uppercase tracking-tight">Canned Tomatoes</h3>
                            <div className="flex items-center space-x-2">
                                <MdProductionQuantityLimits className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Quantity - 6</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiLocationOn className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Location - Downtown Shelter</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiCalendar className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Expires - May 15, 2023 at 6:00 PM</span>
                            </div>
                            <p className="text-sm text-gray-500">
                                Notes - These canned tomatoes are perfect for making sauces, soups, and other dishes. They were donated by a
                                local grocery store and are still in excellent condition.
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <img
                                        alt="Donator"
                                        className="h-10 w-10 rounded-xl"
                                        src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT4rYHpwwdB729mFqw-1T__hJz4nrAGBMLz5nsHalM4L1aREwmu0hUV15t7_lEOFKz9evXPR09dzX44Pv9-GYE"
                                    />
                                    <div className="flex flex-col leading-tight">
                                        <p className="text-sm font-medium text-gray-500">John Doe</p>
                                        <p className="text-[13px] font-medium">Donator</p>
                                    </div>
                                </div>
                                <button className="btn btn-warning text-white min-h-[2.5rem] h-[2.5rem]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-auto bg-green-100 border hover:scale-105 transition-transform">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="mt-1 space-y-2">
                            <h3 className="text-lg font-semibold title-font uppercase tracking-tight">Canned Tomatoes</h3>
                            <div className="flex items-center space-x-2">
                                <MdProductionQuantityLimits className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Quantity - 6</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiLocationOn className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Location - Downtown Shelter</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiCalendar className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Expires - May 15, 2023 at 6:00 PM</span>
                            </div>
                            <p className="text-sm text-gray-500">
                                Notes - These canned tomatoes are perfect for making sauces, soups, and other dishes. They were donated by a
                                local grocery store and are still in excellent condition.
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <img
                                        alt="Donator"
                                        className="h-10 w-10 rounded-xl"
                                        src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT4rYHpwwdB729mFqw-1T__hJz4nrAGBMLz5nsHalM4L1aREwmu0hUV15t7_lEOFKz9evXPR09dzX44Pv9-GYE"
                                    />
                                    <div className="flex flex-col leading-tight">
                                        <p className="text-sm font-medium text-gray-500">John Doe</p>
                                        <p className="text-[13px] font-medium">Donator</p>
                                    </div>
                                </div>
                                <button className="btn btn-warning text-white min-h-[2.5rem] h-[2.5rem]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-auto bg-green-100 border hover:scale-105 transition-transform">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="mt-1 space-y-2">
                            <h3 className="text-lg font-semibold title-font uppercase tracking-tight">Canned Tomatoes</h3>
                            <div className="flex items-center space-x-2">
                                <MdProductionQuantityLimits className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Quantity - 6</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiLocationOn className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Location - Downtown Shelter</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiCalendar className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Expires - May 15, 2023 at 6:00 PM</span>
                            </div>
                            <p className="text-sm text-gray-500">
                                Notes - These canned tomatoes are perfect for making sauces, soups, and other dishes. They were donated by a
                                local grocery store and are still in excellent condition.
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <img
                                        alt="Donator"
                                        className="h-10 w-10 rounded-xl"
                                        src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT4rYHpwwdB729mFqw-1T__hJz4nrAGBMLz5nsHalM4L1aREwmu0hUV15t7_lEOFKz9evXPR09dzX44Pv9-GYE"
                                    />
                                    <div className="flex flex-col leading-tight">
                                        <p className="text-sm font-medium text-gray-500">John Doe</p>
                                        <p className="text-[13px] font-medium">Donator</p>
                                    </div>
                                </div>
                                <button className="btn btn-warning text-white min-h-[2.5rem] h-[2.5rem]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-auto bg-green-100 border hover:scale-105 transition-transform">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="mt-1 space-y-2">
                            <h3 className="text-lg font-semibold title-font uppercase tracking-tight">Canned Tomatoes</h3>
                            <div className="flex items-center space-x-2">
                                <MdProductionQuantityLimits className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Quantity - 6</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiLocationOn className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Location - Downtown Shelter</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiCalendar className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Expires - May 15, 2023 at 6:00 PM</span>
                            </div>
                            <p className="text-sm text-gray-500">
                                Notes - These canned tomatoes are perfect for making sauces, soups, and other dishes. They were donated by a
                                local grocery store and are still in excellent condition.
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <img
                                        alt="Donator"
                                        className="h-10 w-10 rounded-xl"
                                        src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT4rYHpwwdB729mFqw-1T__hJz4nrAGBMLz5nsHalM4L1aREwmu0hUV15t7_lEOFKz9evXPR09dzX44Pv9-GYE"
                                    />
                                    <div className="flex flex-col leading-tight">
                                        <p className="text-sm font-medium text-gray-500">John Doe</p>
                                        <p className="text-[13px] font-medium">Donator</p>
                                    </div>
                                </div>
                                <button className="btn btn-warning text-white min-h-[2.5rem] h-[2.5rem]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-auto bg-green-100 border hover:scale-105 transition-transform">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="mt-1 space-y-2">
                            <h3 className="text-lg font-semibold title-font uppercase tracking-tight">Canned Tomatoes</h3>
                            <div className="flex items-center space-x-2">
                                <MdProductionQuantityLimits className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Quantity - 6</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiLocationOn className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Location - Downtown Shelter</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiCalendar className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Expires - May 15, 2023 at 6:00 PM</span>
                            </div>
                            <p className="text-sm text-gray-500">
                                Notes - These canned tomatoes are perfect for making sauces, soups, and other dishes. They were donated by a
                                local grocery store and are still in excellent condition.
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <img
                                        alt="Donator"
                                        className="h-10 w-10 rounded-xl"
                                        src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT4rYHpwwdB729mFqw-1T__hJz4nrAGBMLz5nsHalM4L1aREwmu0hUV15t7_lEOFKz9evXPR09dzX44Pv9-GYE"
                                    />
                                    <div className="flex flex-col leading-tight">
                                        <p className="text-sm font-medium text-gray-500">John Doe</p>
                                        <p className="text-[13px] font-medium">Donator</p>
                                    </div>
                                </div>
                                <button className="btn btn-warning text-white min-h-[2.5rem] h-[2.5rem]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-auto bg-green-100 border hover:scale-105 transition-transform">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="mt-1 space-y-2">
                            <h3 className="text-lg font-semibold title-font uppercase tracking-tight">Canned Tomatoes</h3>
                            <div className="flex items-center space-x-2">
                                <MdProductionQuantityLimits className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Quantity - 6</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiLocationOn className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Location - Downtown Shelter</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CiCalendar className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Expires - May 15, 2023 at 6:00 PM</span>
                            </div>
                            <p className="text-sm text-gray-500">
                                Notes - These canned tomatoes are perfect for making sauces, soups, and other dishes. They were donated by a
                                local grocery store and are still in excellent condition.
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <img
                                        alt="Donator"
                                        className="h-10 w-10 rounded-xl"
                                        src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT4rYHpwwdB729mFqw-1T__hJz4nrAGBMLz5nsHalM4L1aREwmu0hUV15t7_lEOFKz9evXPR09dzX44Pv9-GYE"
                                    />
                                    <div className="flex flex-col leading-tight">
                                        <p className="text-sm font-medium text-gray-500">John Doe</p>
                                        <p className="text-[13px] font-medium">Donator</p>
                                    </div>
                                </div>
                                <button className="btn btn-warning text-white min-h-[2.5rem] h-[2.5rem]">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-center">
                <Link to={"/available-foods"} className="btn btn-warning text-white mb-24 mt-10 px-20">Show All</Link>
            </div>
            <div>
            </div>
        </div >
    );
};

export default Feature;