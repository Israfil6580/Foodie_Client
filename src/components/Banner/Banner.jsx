import banner from "/images/banner.jpg"
const Banner = () => {
    return (
        <div className="max-w-7xl px-2 py-24 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-bold text-neutral font-title leading-tight text-4xl lg:text-5xl uppercase">Connecting Communities Through Food</h1>
                <p className="mt-6 text-gray-500">Our mission is to connect surplus food providers with those in need, creating a sustainable and compassionate solution to food insecurity. Join us in our effort to build a more equitable and waste-conscious society.</p>
                <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center h-20">
                    <div className="scroll"></div>
                </button>
            </div>

            <div className="flex justify-center mt-10">
                <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src={banner} alt=" App Image" />
            </div>
        </div>

    );
};

export default Banner;