import Link from "next/link";
import React from "react";
import { portfolios } from "../utils/portfolio";

export default function Portfolio() {
    return <div>
        <section className="py-10">
            <div className="py-20">
                <div className="max-w-lg mx-auto mb-0 text-center">
                    <h2 className="text-3xl md:text-5xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                        Check Out
                        Our <span className="text-blue-500">Latest Project</span>
                    </h2>
                </div>
            </div>
        </section>
        <section>
            <div id="portfolio" className="relative bg-white dark:bg-gray-800">
                <div x-data="{ tab: 'all' }" className="mx-auto px-4">
                    <div className="flex flex-wrap flex-row -mx-4 lightgallery-thumbnail" >
                        {
                            portfolios.map((x: any, i: number) => {
                                return (
                                    <figure data-aos="zoom-in-up" data-aos-duration="3000" x-show="tab === 'graphic' || tab === 'photo' || tab === 'all'" data-src="/assets/imgs/placeholders/mobile.jpg"
                                        className="flex-shrink max-w-full border border-gray-100 px-4 w-full md:w-1/2 sm:w-1/2  lg:w-1/2 group" key={i} data-sub-html="title images">
                                        <div className="relative overflow-hidden cursor-pointer mb-6">
                                            <picture>
                                                <img src={x.img} className="block rounded w-full h-96 transform duration-500 hover:scale-125" alt={x.title} />
                                            </picture>
                                            <figcaption className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-blue-700 text-center">
                                                <Link href='/portfolio/kenema'>
                                                    <h3 className="text-base leading-normal font-semibold my-1 text-gray-100">{x.title} </h3>
                                                </Link>
                                                {/* <small className="d-block">Branding</small> */}
                                            </figcaption>
                                        </div>
                                    </figure>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
}