import React from 'react'
import { Button } from "@heroui/react"

function Hero() {
    return (
        <section className='bg-[url(bg-1.png)] bg-no-repeat bg-cover min-h-screen flex flex-col justify-center px-4 md:px-8 w-full'>
            <div className='w-[80%] mx-auto space-y-8'>
                <div>
                    <p className="text-main text-lg mb-4">AI SDRs (aiDRs)</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white"><b>More </b><i>Leads,</i></h2>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white"><b>less </b><i>people</i></h2>
                    <p className="text-lg text-gray-600 mb-8 w-96">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
                </div>

                <div className='text-black'>
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