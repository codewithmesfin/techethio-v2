import Image from "next/image";
import React from "react";
import RichUsButtons from "../components/RichUsButtons";
import { services } from "../utils/services.list";

export default function Services() {
    return <div>
        <section className="py-12 px-3 md:px-0">
            <div className=" md:max-w-[600px] py-10 mx-auto">
                <h1 className="text-2xl md:text-6xl text-center font-extrabold py-4">Our Services </h1>
                <p className="text-gray-500 py-3 text-center">
                    We are working hard to make your life easier! The following are a few areas among what we are focusing to innovate the right solution!
                </p>
            </div>
            <div className="flex flex-wrap  flex-row -mx-4 text-left">
                {
                    services.map((x, i) => <div data-aos="zoom-in-down" data-aos-duration="3000" className="cursor-pointer flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" key={i} data-wow-duration="1s">
                        <div className="pb-6 rounded-md mb-12 shadow-xl bg-white dark:bg-gray-800 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                            <img className="w-full rounded-t" src={x.img} alt="images" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{x.title} </div>
                                <p className="text-gray-700 text-base">{x.desc} </p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
        <section className="py-12">
            <div>
                <RichUsButtons />
            </div>
        </section>
    </div>
}