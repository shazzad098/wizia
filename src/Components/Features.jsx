import React from 'react';

const Features = () => {
    const features = [
        {
            icon: '/Features_logo/magic-wand-duotone.png',
            title: 'You\'re in Control',
            description:
                'aDRs operate based on your rules. You guide the machine, the aDRs execute the work.',
        },
        {
            icon: '/Features_logo/graph-duotone.png',
            title: 'Infinitely Scalable',
            description:
                'Train an aDR on a patch. When you are happy with the results, scale it effortlessly.',
        },
        {
            icon: '/Features_logo/arrows-out-cardinal-duotone.png',
            title: 'Incredibly Flexible',
            description:
                'Train an aDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.',
        },
    ];

    return (
        <section className="bg-[#002228] text-white py-16">
            <div className="container mx-auto px-4 flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col space-y-4">
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="h-8 w-8"
                            />

                            <h3 className="text-xl font-bold">{feature.title}</h3>

                            <p className="text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;