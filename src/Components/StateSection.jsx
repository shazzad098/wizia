import React from 'react';

const StateSection = () => {
    return (
        <section
            className="bg-gray-800 text-white py-16 relative"
            style={{
                backgroundImage: `url(BG/bg-3.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container px-4 max-w-[50%] ml-20">
                <div className="flex flex-col items-start space-y-2 mb-8">
                    <h2 className="text-xl font-bold">Allocate effort where your reps make an impact.</h2>
                    <span className="block text-main text-xl font-bold">Let us handle the rest.</span>
                    <p className="text-sm">Keep your reps "in the air" -- out in the field and on the phone where they can build relationships.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col space-y-2">
                        <span className="text-4xl font-bold text-main">32%</span>
                        <span className="text-sm">Improvement in Open Rates</span>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <span className="text-4xl font-bold text-main">75%</span>
                        <span className="text-sm">Improvement in Ramp Time</span>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <span className="text-4xl font-bold text-main">35%</span>
                        <span className="text-sm">Improvement in Meetings Booked</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StateSection;