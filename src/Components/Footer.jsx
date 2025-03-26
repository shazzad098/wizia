import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#07292F] text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div>
                    <img src="/Logo.png" alt="" />
                </div>

                <div>
                    <p className="text-sm">
                        Copyright © 2023 Wizia. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;