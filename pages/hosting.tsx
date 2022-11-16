import React from "react";
import { hostings } from "../utils/hostings";

export default function Hosting() {
    return <div className="py-20 px-3 md:px-0">
        <section className="py-20">
            <div className="mx-auto md:max-w-[70%]">
                <h1 className="text-3xl md:text-8xl font-extrabold text-center">Simple, predictable pricing</h1>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    hostings.map((x: any, i: number) => <div  data-aos="zoom-in-up" data-aos-duration="3000" key={i} className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
                        <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
                            <div className="flex flex-col flex-grow overflow-hidden bg-white ">
                                <div className="flex flex-col items-center p-10 bg-gray-200">
                                    <span className="font-semibold">{x.title} </span>
                                    <div className="flex items-center">
                                        <span className="text-3xl">$</span>
                                        <span className="text-5xl font-bold">{x.amount} </span>
                                        <span className="text-2xl text-gray-500">/year</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10">
                                <ul>
                                    {
                                        x.features.map((y, j) => <li key={j} className="flex items-center py-2">
                                            <svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                            <span className="ml-2"> {y} </span>
                                        </li>)
                                    }
                                </ul>
                            </div>
                            <div className="p-4 border-t bg-blue-600">
                                <button className="text-white w-full tetx-center">Order now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    </div>
}