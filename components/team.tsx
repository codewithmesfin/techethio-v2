import Image from "next/image";
import Link from "next/link";
import React from "react";
import { teams } from "../utils/teams";

export default function Team() {
    return <div className="px-3 md:px-0">
        <div className="pb-16 mx-auto md:max-w-[700px]">
            <h2 className="text-3xl py-3 text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our Teams
            </h2>
            <p className="text-center">
                We are a team of experienced professionals. We are growing. After several years of experienced in some of the high techlogies we recognized that our technical skills, experiences , and our African values ca be put togather to create technologies that will transform lives in Africa.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                teams.map((x: any, i: number) => <div data-aos="zoom-in-up" data-aos-duration="3000" key={i} className={`mb-16 shadow rounded`}
                >
                    <div className="p-2">
                        <div className="flex items-center spac-y-10 md:space-x-3">
                            <Image className="rounded-full p-2 h-[150px]" width={150} height={150} src={x.img} alt={x.name} />
                            <div>
                                <h1 className={`text-2xl font-bold`}>{x.name} </h1>
                                <h1 className={`text-md py-2  font-bold`}>{x.role} </h1>
                                <p className={`text-xs`}>{x.bio} </p>
                                <div className="flex border-t mt-2  pt-2 space-x-2 md:space-x-20">
                                    <Link className={`text-blue-600 font-semibold`} href={x.linkedin}>Linkedin </Link>
                                    <Link className={`text-black-600 font-bold`} href={x.github}>Github </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
}