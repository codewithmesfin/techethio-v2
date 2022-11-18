import React from "react";
import Icon from "../components/icon";
import Input from "../components/input";

export default function Careers() {
    return <div>
        <section className="py-20">
            <div className="mx-auto md:max-w-[70%]">
                <h1 className="text-6xl md:text-8xl font-extrabold text-center text-blue-600">
                    Careers
                </h1>
            </div>
        </section>
        <section className="py-10 px-3 md:px-0">
            <div className="md:flex justify-between  md:space-x-10">
                <div className="md:w-1/2">
                    <div>
                        <img className="w-full h-full " src="https://dcvxs6ggqztsa.cloudfront.net/assets/public/quick_start/hero/post-jobs-for-free-for-15-days-7716c2804be41e00a79b47a29392fe1327993126db1c0cd0d44a8d4d294670e0.png" alt="images" />
                        <h1 className="text-4xl md:text-6xl pt-2 pb-5 font-extrabold text-blue-600">
                            We are hiring !
                        </h1>
                        <p className="text-gray-500">
                            TechEthio is hiring Software Engineers and Digital Marketing Experts. We are looking for a project manager experinced in Scrum and Agile Software Development Life Cycl; Software Developers in experinced in Vue js and Nuxt js, React and Next js, Flutter and Dart, Node js, PHP and Laravel, MySQL, MongoDB, Firebase, AWS; Certified Digital Marketing Experts experinced in Digital Marketing strategies, Marketing tools, and Customer Relation Management(CRM).
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 py-3 min-h-[500px] md:min-h-[1000px]">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfzUfm0plkmxQcICQPXiyelTVWRajpvxx_ur-K7XbG53870mA/viewform?embedded=true"
                        width="100%" height="100%"
                     >Loading…</iframe>
                    {/* <div className="md:shadow rounded md:p-5">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="py-2">
                                <Input label="First Name" placeholder="Mesfin" />
                            </div>
                            <div className="py-2">
                                <Input label="Last Name" placeholder="Tsegaye" />
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
                            <div className="py-2">
                                <Input label="Commercial Experience (Years)" type="number" placeholder="4" />
                            </div>
                            <div className="py-2">
                                <Input label="Expected Monthly Salary ($)" placeholder="5500" type="number" />
                            </div>
                            <div className="py-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resume </label>
                                <div className="flex space-x-3 md:space-x-10 border p-2.5 rounded-lg cursor-pointer">
                                    <Icon path="upload" />
                                    <div>Upload file</div>
                                </div>
                            </div>
                        </div>
                        <div className="py-2">
                            <Input label="Proposal" placeholder="Why we hire you?" rows={4} isTextArea />
                        </div>
                        <div className="py-3 flex justify-between space-x-3 md:space-x-10">
                            <button className="w-full text-white md:text-lg rounded-lg bg-blue-600 p-2 md:p-2.5">Submit</button>
                            <button className="w-full text-white md:text-lg rounded-lg bg-red-600 p-2 md:p-2.5">Clear</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    </div>
}