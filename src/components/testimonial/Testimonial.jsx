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

    const testimonialsData = [
        {
            imgSrc: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            quote: "Using this platform has been a game-changer for me. Not only am I able to reduce food waste by sharing surplus items, but I've also discovered amazing food from local providers. It's a win-win for everyone involved.",
            name: 'John Doe',
            profession: 'Environmental Activist',
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            quote: "I love the concept of this platform! It's so easy to use, and I feel good knowing that I'm helping to reduce food waste in my community. Plus, I've met some wonderful people through sharing and receiving food items.",
            name: 'Emily Smith',
            profession: 'Sustainability Consultant',
        },
        {
            imgSrc: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            quote: "I've been using this platform for a few months now, and it's been fantastic. It's helped me save money on groceries by receiving surplus items, and I've been able to give back by sharing my excess food. It's such a simple yet impactful way to make a difference.",
            name: 'Mike Taylor',
            profession: 'Community Organizer',
        },
    ];

    return (
        <motion.div className="mb-20 overflow-x-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="text-center">
                <motion.h1
                    className="font-title uppercase text-3xl lg:text-4xl font-bold mb-12 inline-block"
                    initial={{ opacity: 0, scale: 0.9 }} // Initial opacity and scale
                    animate={{ opacity: 1, scale: 1 }} // Animation to make it visible and scale to 1
                    transition={{ duration: 0.1 }} // Transition duration
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    User Reviews
                </motion.h1>
            </div>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{ delay: 3200, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {testimonialsData.map((testimonial, index) => (
                    <SwiperSlide key={index} className="w-full">
                        <motion.div
                            variants={slideVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className="container mx-auto w-full">
                                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-green-100 text-gray-800">
                                    <img src={testimonial.imgSrc} alt="" className="w-20 h-20 object-cover rounded-full bg-gray-500" />
                                    <blockquote className="lg:max-w-lg lg:text-lg text-sm italic lg:font-medium text-center">{testimonial.quote}</blockquote>
                                    <div className="text-center text-gray-600">
                                        <p>{testimonial.name}</p>
                                        <p>{testimonial.profession}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
};

export default Testimonial;
