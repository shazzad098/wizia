import React from 'react'
import { Button } from "@heroui/react"

function Hero() {
    return (
        <section className='bg-[url(BG/bg-1.png)] bg-no-repeat bg-cover min-h-screen flex flex-col justify-center px-4 md:px-8 w-full'>
            <div className='w-full md:w-[80%] mx-auto space-y-8'>
                <div className='text-center md:text-left'>
                    <p className="text-main text-base md:text-lg mb-4">AI SDRs (aiDRs)</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white"><b>More </b><i>Leads,</i></h2>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white"><b>less </b><i>people</i></h2>
                    <p className="text-base md:text-lg text-gray-600 mb-8 max-w-[90%] md:max-w-[24rem] mx-auto md:mx-0">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
                </div>

                <div className='text-black flex justify-center md:justify-start'>
                    <Button className="bg-main text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2">
                        Sign Up for the Beta
                        <img src="/arrow-square.png" alt="Arrow" className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero