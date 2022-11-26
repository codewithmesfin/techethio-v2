import React from "react";
import { services } from "../utils/services.list";

export default function ContactUs() {
    return <div>
        <section className="py-20 px-3 md:px-0">
            <div className="mx-auto md:max-w-[70%]">
                <h1 className="text-6xl md:text-8xl font-extrabold text-center pt-6 text-blue-600">
                    Contact us
                </h1>

                <h1 className="text-4xl md:text-6xl pt-2 pb-5 font-extrabold text-center pt-6">
                    Let us know how TechEthio Can help you!
                </h1>
            </div>
        </section>
        <section className="pb-10 px-3 md:px-0 pb-32">
            <div className="md:flex justify-between  md:space-x-10">
                <div className="md:w-1/2 py-3">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSffjKcz6Fuf9bwhTrf2t8QlxAmTOc6GvSi4Hf2EYW3BJa62IQ/viewform?embedded=true"
                        width="100%" height="1000"
                    >Loading…
                    </iframe>
                </div>
                <div className="md:w-1/2 py-3 hidden md:block">
                    <div className="grid grid-cols-2 gap-4">
                        {
                            services.map((x, i) => <div key={i} className="border border-gray-200 rounded p-3">
                                <div className="md:flex md:space-x-6 items-center">
                                    <div className="hiddenmd:block w-[30%]">
                                        <img className="w-32 h-16 hidden md:block rounded object-cover"
                                            src={x.img} 
                                            alt="images" />
                                    </div>
                                    <div className="w-full w-[70%]">
                                        <h1 className="text-xs md:text-md font-extrabold">{x.title} </h1>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
}