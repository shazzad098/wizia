import React from 'react';

const MarketingBanner = () => {
    return (
        <section
            className="bg-gray-800 text-white py-20 relative"
            style={{
                backgroundImage: `url(BG/bg-2.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container mx-auto px-4 flex items-center justify-end">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">
                        Train your aiDR on your...
                        <span className="block text-[#0FF1F6]">preferred email st</span>
                    </h1>
                    <p className="text-sm mb-6">
                        You're in control. Train your aiDR on elements of your Marketing strategy.
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-center space-x-2">
                            <img
                                src="/check-circle.png"
                                alt="Check Icon"
                                className="h-4 w-4"
                            />
                            <span className='text-[#14BCB2]'>Quick to ramp</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img
                                src="/check-circle.png"
                                alt="Check Icon"
                                className="h-4 w-4"
                            />
                            <span className='text-[#14BCB2]'>Easy to optimize</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img
                                src="/check-circle.png"
                                alt="Check Icon"
                                className="h-4 w-4"
                            />
                            <span className='text-[#14BCB2]'>Quick to scale up</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img
                                src="/check-circle.png"
                                alt="Check Icon"
                                className="h-4 w-4"
                            />
                            <span className='text-[#14BCB2]'>Works with all your existing tools</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MarketingBanner;