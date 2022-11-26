import Link from "next/link";
import React from "react";

export default function Hosting() {
    const partners = [
        {
            logo: "/hosting/do.png",
            title: "Digital Ocean",
            hrfe:"https://www.digitalocean.com"
        },
        {
            logo: "/hosting/aws.png",
            title: "Amazon Web Service",
            href:"https://aws.amazon.com"
        },
        {
            logo: "/hosting/gcp.png",
            title: "Google Cloud",
            href:"https://cloud.google.com"
        },
        {
            logo: "/hosting/azure.webp",
            title: "Azure",
            href:"https://azure.microsoft.com/en-us"
        },
        {
            logo: "/hosting/bh.jpeg",
            title: "Bluehost",
            href:"https://www.bluehost.com/"
        },
        {
            logo: "/hosting/gd.jpeg",
            title: "GoDaddy",
            href:"https://www.godaddy.com/en-ie"
        },
        {
            logo: "/hosting/ibm.png",
            title: "IBM",
            href:"https://www.ibm.com/us-en"
        },
        {
            logo: "/hosting/et.jpeg",
            title: "Ethio telecom",
            href:"https://www.ethiotelecom.et/"
        }
    ]
    return <div>
        <section className="py-20 mx-auto pt-20 max-w-7xl">
            <div>
                <h1 className="text-6xl font-extrabold text-center md:text-8xl">Hosting</h1>
                <h1 className="text-4xl py-3 font-extrabold text-center md:text-8xl">
                    <span>Coming</span> <span className="text-blue-600">Soon</span>
                </h1>
                <h1 className="py-6 text-3xl text-center">We are partnering with</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    partners.map((x, i) => <div key={i} className="p-5" data-aos="zoom-in-down" data-aos-duration="3000">
                       <Link target="_blank" href={`${x.href}`}>
                       <img className="w-full object-contain h-full" src={x.logo} alt="" />
                       </Link>
                    </div>)
                }
            </div>
        </section>
    </div>
}