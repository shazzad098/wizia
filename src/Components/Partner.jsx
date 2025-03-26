import React from 'react';

const Partner = () => {
  const partnerLogos = [
    { src: '/partner_logo/BackHub_logo.png' },
    { src: '/partner_logo/CableLabs.png' },
    { src: '/partner_logo/DBS_logo.png' },
    { src: '/partner_logo/EasyEuro logo.png' },
    { src: '/partner_logo/AMD logo.png' },
  ];

  return (
    <section className="bg-[#07292F] text-white py-2">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <h2 className="text-sm text-main uppercase tracking-wider mt-4">Our Trusted Partners</h2>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="h-10 w-auto"
              />
              <span className="text-sm font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Partner;