import React from 'react';

const CtaSection = () => {
    return (
        <section className="bg-[#002228] text-white py-16">
            <div className="container mx-auto px-4 flex flex-col items-center space-y-4 ">
                <span className="text-sm uppercase font-bold tracking-wider text-[#0FF1F6]">GET STARTED</span>

                <h2 className="text-3xl text-center">
                    <i>Embrace </i><span className="font-bold">the new era</span> <i>of outbound</i>.
                </h2>

                <p className="text-sm text-center max-w-md">
                    Wizia lets you train, activate, and optimize aiDRs. Take your outbound to new levels of performance and efficiency.
                </p>
            </div>

            <div className="container mx-auto px-4 mt-8 flex justify-center">
                <button className="bg-main text-black px-6 py-2 rounded-full flex items-center space-x-2">
                    <span>Sign Up for the Beta</span>
                    <img src="/arrow-square.png" alt="Arrow" className="w-5 h-5" />
                </button>
            </div>

        </section>
    );
};

export default CtaSection;