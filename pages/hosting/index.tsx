import Link from "next/link";
import React from "react";

export default function Hosting() {
    const partners = [
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1200px-DigitalOcean_logo.svg.png",
            title: "Digital Ocean",
            hrfe:"https://www.digitalocean.com"
        },
        {
            logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
            title: "Amazon Web Service",
            href:"https://aws.amazon.com"
        },
        {
            logo: "https://www.freecodecamp.org/news/content/images/2020/10/gcp.png",
            title: "Google Cloud",
            href:"https://cloud.google.com"
        },
        {
            logo: "https://www.conseil3d.com/wp-content/uploads/2021/06/logo-microsoft-cloud-azure-png.png",
            title: "Azure",
            href:"https://azure.microsoft.com/en-us"
        },
        {
            logo: "https://cdn.mos.cms.futurecdn.net/inqKFrqifsSMBCKEwXAWQG-1200-80.jpg",
            title: "Bluehost",
            href:"https://www.bluehost.com/"
        },
        {
            logo: "http://photos.prnewswire.com/prnfull/20150330/195302LOGO",
            title: "GoDaddy",
            href:"https://www.godaddy.com/en-ie"
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
            title: "IBM",
            href:"https://www.ibm.com/us-en"
        },
        {
            logo: "https://ethiopianembassy.org/wp-content/uploads/2021/06/Ethio-Tele.jpeg",
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
        {/* <div className="antialiased bg-gray-300 px-8">
           
            <section>
                <div className="relative block md:flex items-center max-w-6xl mx-auto pb-20">
                    <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
                        <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">Pay as you go</div>
                        <div className="block sm:flex md:block lg:flex items-center justify-center">
                            <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                                <div className="inline-flex items-center">
                                    <span className="text-3xl font-medium">1.4%</span>
                                    <span className="text-xl text-gray-600 ml-2">+</span>
                                    <span className="text-xl ml-2">20p</span>
                                </div>
                                <span className="block text-sm text-gray-600 mt-2">for European cards</span>
                            </div>
                            <div className="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
                                <div className="inline-flex items-center">
                                    <span className="text-3xl font-medium">2.9%</span>
                                    <span className="text-xl text-gray-600 ml-2">+</span>
                                    <span className="text-xl ml-2">20p</span>
                                </div>
                                <span className="block text-sm text-gray-600 mt-2">for non-European cards</span>
                            </div>
                        </div>
                        <div className="flex justify-center mt-3">
                            <ul>
                                <li className="flex items-center">
                                    <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-umbrella"><path className="primary" d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z" /><path className="secondary" d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z" /></svg>
                                    </div>
                                    <span className="text-gray-700 text-lg ml-3">No setup, monthly, or hidden fees</span>
                                </li>
                                <li className="flex items-center mt-3">
                                    <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-shopping-bag"><path className="primary" d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z" /><path className="secondary" d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z" /></svg>
                                    </div>
                                    <span className="text-gray-700 text-lg ml-3">Pay only for what you use</span>
                                </li>
                                <li className="flex items-center mt-3">
                                    <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-pie-chart"><path className="primary" d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z" /><path className="secondary" d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z" /></svg>
                                    </div>
                                    <span className="text-gray-700 text-lg ml-3">Real-time fee reporting</span>
                                </li>
                            </ul>
                        </div>
                        <a className="block flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16" href="#">
                            <span>Create account</span>
                            <span className="font-medium text-gray-700 ml-2">➔</span>
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
                        <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                            <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">Enterprise</div>
                            <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
                                Stripe offers everything needed to run an online business at scale. Get in touch for details.
                            </div>
                            <div className="mt-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">Account management</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">Volume discounts</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-800">Migration assistance</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4">Dedicated support</div>
                            </div>
                            <a className="block flex items-center justify-center bg-blue-800 hover:bg-blue-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8" href="#">
                                <span>Contact sales</span>
                                <span className="font-medium text-gray-300 ml-2">➔</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </div> */}
    </div>
}