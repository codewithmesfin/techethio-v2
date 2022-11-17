import React from "react";
import Icon from "../components/icon";
import Input from "../components/input";
import { services } from "../utils/services.list";

export default function ContactUs() {
    return <div>
        <section className="py-20">
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
                <div className="md:w-1/2">
                    <div className="md:shadow rounded p-3 md:p-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="py-2">
                                <Input label="Full Name" placeholder="Mesfin Tsegaye" />
                            </div>
                            <div className="py-2">
                                <Input label="Email" placeholder="info@bizenforce.com" />
                            </div>
                            <div className="py-2">
                                <Input label="Phone Number" placeholder="+251911522902" />
                            </div>
                            <div className="py-2">
                                <Input label="Address" placeholder="Addis Ababa, Ethiopia" />
                            </div>
                        </div>
                        <div className="py-2">
                            <Input label="Message" placeholder="Write your message here ..." rows={6} isTextArea />
                        </div>
                        <div className="py-3 flex justify-between space-x-3 md:space-x-10">
                            <button className="w-full text-white md:text-lg rounded-lg bg-blue-600 p-2 md:p-2.5">Submit</button>
                            <button className="w-full text-white md:text-lg rounded-lg bg-red-600 p-2 md:p-2.5">Clear</button>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 py-3 hidden md:block">
                    <div className="grid grid-cols-2 gap-4">
                        {
                            services.map((x, i) => <div key={i} className="border border-gray-200 rounded p-3">
                                <div className="md:flex md:space-x-6 items-center">
                                    <div className="hiddenmd:block w-[30%]">
                                        <img className="w-32 h-16 hidden md:block rounded object-cover" src={x.img} alt="images" />
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