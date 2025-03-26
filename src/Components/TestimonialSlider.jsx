import React, { useState } from 'react';

const TestimonialSlider = () => {
    const testimonials = [
        {
            id: 1,
            quote:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            name: 'John Doe',
            designation: 'Chief Strategy Officer @ Company',
        },
        {
            id: 2,
            quote:
                'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            name: 'Jane Smith',
            designation: 'Marketing Manager @ Enterprise',
        },
        {
            id: 3,
            quote:
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            name: 'Michael Johnson',
            designation: 'CEO @ Startup Inc.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="bg-[#002228] text-white py-16">
            <div className="flex justify-center mb-4">
                <img
                    src="/quote.png"
                    alt="Quote Icon"
                    className="h-14 w-14 text-indigo-400"
                />
            </div>

            <div className="container mx-auto px-4 flex items-center justify-between">
                <button
                    onClick={handlePrev}
                    className="text-white hover:text-indigo-400"
                >
                    <img
                        src="/Navigation-left.png"
                        alt="Previous"
                        className="h-6 w-6"
                    />
                </button>

                <div className="flex flex-col items-center space-y-2">
                    <p className="text-center text-md">{testimonials[activeIndex].quote}</p>
                    <div className="flex flex-col items-center mt-4">
                        <span className="text-xl font-bold">{testimonials[activeIndex].name}</span>
                        <span className="text-sm text-gray-400">{testimonials[activeIndex].designation}</span>
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    className="text-white hover:text-indigo-400"
                >
                    <img
                        src="/Navigation-right.png"
                        alt="Next"
                        className="h-6 w-6"
                    />
                </button>
            </div>

            <div className="container mx-auto px-4 mt-4 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`block h-2 w-2 rounded-full ${activeIndex === index ? 'bg-[#0FF1F6]' : 'bg-gray-400'
                            }`}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSlider;