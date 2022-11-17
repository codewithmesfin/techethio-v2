import React from "react";
import Link from "next/link"
import Image from "next/image";
import GoogleMap from "./GoogleMap";


const Footer = () => {
    const links = [
        {
            title: "Quick Links",
            children: [
                {
                    title: "About us", href: "/about-us",
                },
                { title: "Portfolio", href: "/portfolio" },
                { title: "Services", href: "/services" },
                { title: "Hosting", href: "/hosting" },
                { title: "Careers", href: "/careers" }
            ]
        },
        {
            title: "Products",
            children: [
                {
                    title: "ERP Systems", href: "/services"
                },
                { title: "eCommerces", href: "/services" },
                { title: "CRM Platforms", href: "/services" },
                { title: "LMS Solutions", href: "/services" },
                { title: "Job Listing", href: "/services" }
            ]
        },
        {
            title: "Services",
            children: [
                { title: "Apps Development", href: "/services" },
                { title: "Website Development", href: "/services" },
                { title: "Software Customization", href: "/services" },
                { title: "Consultations", href: "/services" },
                { title: "Digital Marketing", href: "/services" },
                { title: "Hosting and DevOpos", href: "/hosting" }
            ],
        },
        {
            title: "Contact us",
            children: [
                { title: "TechEthio IT Solution PLC", href: "/" },
                { title: "dev@techethio.com", href: "mailto:dev@techethio.com" },
                { title: "+14049884505", href: "tel:+14049884505" },
                { title: "+251911430924", href: "tel:+251911430924" },
                { title: "Addis Ababa, ethiopia", href: "conatct-us" },
                {title:"© All rights reserved.",href:"/"}
            ],
        }
    ]
    return (
        <>
          <section>
        <GoogleMap/>
      </section>
            <section className="bg-blue-600">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 p-3">
                        {
                            links.map((x, i) => <div key={i} className="pt-10 pb-4">
                                <h1 className="text-white font-extrabold pb-2 text-xl">{x.title} </h1>
                                {x.children.map((y, j) => <div key={j} className="p-1 ">
                                    <Link href={y.href} className="text-white">{y.title} </Link>
                                </div>)}
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;