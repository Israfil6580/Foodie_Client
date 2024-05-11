import healthy from "/images/healthy.jpg"
import { IoCheckmarkDoneOutline } from "react-icons/io5";
const EatingTips = () => {
    return (
        <div className="max-w-7xl px-2 mx-auto">
            <div className="text-center">
                <h1 className="font-title uppercase text-3xl lg:text-4xl font-bold pb-10">healthy eating tips</h1>
            </div>
            <div className="hero">
                <div className="flex pb-24 flex-col-reverse lg:flex-row-reverse items-center justify-center gap-10">
                    <div className="lg:w-1/2">
                        <img className="rounded-3xl" src={healthy} />
                    </div>
                    <div className="lg:w-1/2">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Discover simple and effective ways to nourish your body and mind with a balanced diet.
                                </p>
                            </div>
                            <ul className="grid gap-2">
                                <li>
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Incorporate more fruits and vegetables into your meals.
                                </li>
                                <li>
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Choose whole grains over refined carbohydrates.
                                </li>
                                <li>
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Stay hydrated by drinking plenty of water.
                                </li>
                                <li>
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Limit processed and high-sugar foods.
                                </li>
                                <li>
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Pay attention to your body's hunger and fullness cues
                                </li>
                                <li>
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Eat when you're hungry and stop when you're satisfied, rather than eating based on external cues or emotions.
                                </li>
                                <li>
                                    <IoCheckmarkDoneOutline className="mr-2 inline-block h-4 w-4" />
                                    Pay attention to the taste, texture, and aroma of your food, and enjoy the experience of eating without distractions.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EatingTips;