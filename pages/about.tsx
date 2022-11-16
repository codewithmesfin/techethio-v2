import Image from "next/image";
import React from "react";
import RichUsButtons from "../components/RichUsButtons";
import StatusCount from "../components/statusCount";

export default function About() {
    const values = [
        {
            title: "Innovations",
            subtitle: "We are here to invent a better solution to help you grow your business.",
            img: "/innovation.png"
        },
        {
            img: "/customer.webp",
            title: "Customer Value",
            subtitle: "We are working hard to make our customers happy. Customers are our valuable assets."
        },
        {
            img: "/trust.webp",
            title: "Trust",
            subtitle: "Our team is looking to serve your long-term business goals. Unlike other consulting services, we maintain high retention rates, so that you’ll continue to work with engineers you trust for your business."
        }
    ]
    return <div className="py-12">
        <section>
            <div className="flex justify-between md:space-x-10 items-center">
                <div className="md:w-1/2">
                    <h1 className="text-2xl md:text-6xl font-extrabold">Who we are ? </h1>
                    <h1 className="text-xl font-semibold py-3">We are working hard to solves problems in Africa</h1>
                    <p className="text-gray-500">We are a team of experienced professionals. We are growing. After several years of experienced in some of the high techlogies we recognized that our technical skills, experiences , and our African values ca be put togather to create technologies that will transform lives in Africa.</p>
                    <p className="text-gray-500">We believe that people are the secret to success. By empowering them, we create value for our customers and positively impact the world.</p>
                </div>
                <div className="md:w-1/2">
                    <Image src="/about.gif" alt="about-us"
                        className="w-full h-full"
                        width={100} height="100"
                    />
                </div>
            </div>
        </section>
        <section className="py-12" data-aos="zoom-in-up" data-aos-duration="3000">
            <StatusCount />
        </section>

        <section className="py-12">
            <div className="py-10">
                <h1 className="text-2xl md:text-6xl text-center font-extrabold">Our Core Values </h1>
            </div>
            <div className="md:flex md:justify-between items-center md:space-x-10">
                {values.map((x, i) => <div key={i} className="max-w-[300px]" data-aos="zoom-in-down" data-aos-duration="3000">
                    <div className="flex justify-center">
                        <Image src={x.img} alt="about-us"
                            className="object-cover rounded-full w-[200px] h-[200px]"
                            width={200} height={200}
                        />
                    </div>
                    <h1 className="text-2xl md:text-3xl text-center py-3 font-extrabold"> {x.title} </h1>
                    <p className="text-gray-500 text-center"> {x.subtitle} </p>
                </div>)}
            </div>
        </section>
        <section className="py-12">
            <div>
                <h1 className="text-2xl md:text-6xl text-center font-extrabold">An awesome partner for your dream business </h1>
                <p className="text-gray-500 py-3 text-center">
                    We are on a mission to build a better future where technology creates good jobs and marvelous labor-saving inventions for everyone. Committed to delivering innovative and reliable solutions to meet our clients needs with utmost quality.
                </p>
                <RichUsButtons/>
            </div>
        </section>
    </div>
}