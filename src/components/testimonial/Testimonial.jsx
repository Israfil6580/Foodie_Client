import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const Testimonial = () => {
    const slideVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <motion.div className='mb-20' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="text-center">
                <h1 className="font-title uppercase text-2xl lg:text-4xl font-bold mb-10">Feedback</h1>
            </div>

            <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 3200,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <motion.div variants={slideVariants}>
                    <SwiperSlide className='w-full'>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <div className="container w-full mx-auto">
                                <div className="flex flex-col items-center w-full p-6 lg:space-y-8 rounded-md lg:h-full lg:p-8 bg-green-100 text-gray-800">
                                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 object-cover rounded-full bg-gray-500" />
                                    <blockquote className="lg:max-w-lg lg:text-lg text-sm italic lg:font-medium text-center">Using this platform has been a game-changer for me. Not only am I able to reduce food waste by sharing surplus items, but I've also discovered amazing food from local providers. It's a win-win for everyone involved</blockquote>
                                    <div className="text-center text-gray-600">
                                        <p>John Doe</p>
                                        <p>Environmental Activist</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                </motion.div>

                <motion.div variants={slideVariants}>
                    <SwiperSlide>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <div className="container mx-auto w-full">
                                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-green-100 text-gray-800">
                                    <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 rounded-full bg-gray-500 object-cover" />
                                    <blockquote className="lg:max-w-lg lg:text-lg text-sm italic lg:font-medium text-center">I love the concept of this platform! It's so easy to use, and I feel good knowing that I'm helping to reduce food waste in my community. Plus, I've met some wonderful people through sharing and receiving food items.</blockquote>
                                    <div className="text-center text-gray-600">
                                        <p>Emily Smith</p>
                                        <p>Sustainability Consultant</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                </motion.div>
                <motion.div variants={slideVariants}>
                    <SwiperSlide>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <div className="container mx-auto w-full">
                                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-green-100 text-gray-800">
                                    <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 rounded-full bg-gray-500 object-cover" />
                                    <blockquote className="lg:max-w-lg lg:text-lg text-sm italic lg:font-medium text-center">I've been using this platform for a few months now, and it's been fantastic. It's helped me save money on groceries by receiving surplus items, and I've been able to give back by sharing my excess food. It's such a simple yet impactful way to make a difference.</blockquote>
                                    <div className="text-center text-gray-600">
                                        <p>Mike Taylor </p>
                                        <p> Community Organizer</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                </motion.div>
                <motion.div variants={slideVariants}>
                    <SwiperSlide>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <div className="container mx-auto w-full">
                                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-green-100 text-gray-800">
                                    <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 rounded-full object-cover bg-gray-500" />
                                    <blockquote className="lg:max-w-lg lg:text-lg text-sm italic lg:font-medium text-center">As someone who is passionate about sustainability, I'm thrilled to have found this platform. It's convenient, user-friendly, and has allowed me to connect with like-minded individuals who share my values. Keep up the great work.</blockquote>
                                    <div className="text-center text-gray-600">
                                        <p>Sarah Lopez</p>
                                        <p>Nutritionist</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                </motion.div>
                <motion.div variants={slideVariants}>
                    <SwiperSlide>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <div className="container mx-auto w-full">
                                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-green-100 text-gray-800">
                                    <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-20 h-20 object-cover rounded-full bg-gray-500" />
                                    <blockquote className="lg:max-w-lg lg:text-lg text-sm italic lg:font-medium text-center">I started using this platform recently, and I'm impressed by how well it's organized. The ability to search for specific food items or browse available surplus items makes it easy to find what I need. Plus, the community aspect is wonderful—I feel like I'm part of something bigger.</blockquote>
                                    <div className="text-center text-gray-600">
                                        <p>David Robinson</p>
                                        <p>Food Blogger</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                </motion.div>
            </Swiper>
        </motion.div>
    );
};

export default Testimonial;
