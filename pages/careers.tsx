import React from "react";

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
                        <img className="w-full h-full " 
                        src="/job.png" alt="images" />
                        <h1 className="text-4xl md:text-6xl pt-2 pb-5 font-extrabold text-blue-600">
                            We are hiring !
                        </h1>
                        <p className="text-gray-500">
                            TechEthio is hiring Software Engineers and Digital Marketing Experts. We are looking for a project manager experinced in Scrum and Agile Software Development Life Cycl; Software Developers in experinced in Vue js and Nuxt js, React and Next js, Flutter and Dart, Node js, PHP and Laravel, MySQL, MongoDB, Firebase, AWS; Certified Digital Marketing Experts experinced in Digital Marketing strategies, Marketing tools, and Customer Relation Management(CRM).
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 py-3 ">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfzUfm0plkmxQcICQPXiyelTVWRajpvxx_ur-K7XbG53870mA/viewform?embedded=true"
                              width="100%" height="1000"
                     >Loading…</iframe>
                  
                </div>
            </div>
        </section>
    </div>
}