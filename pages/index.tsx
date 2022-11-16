
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

import Link from "next/link"
import RichUsButtons from '../components/RichUsButtons'
import StatusCount from "../components/statusCount"
import Team from '../components/team'
import { sols2, solutions } from '../utils/services.list'

export default function Index() {

  const features = [
    {
      name: 'Competitive Innovations',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GlobeAltIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ScaleIcon,
    },
    {
      name: 'Customer value',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: BoltIcon,
    },
    {
      name: 'Trusted partner',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: DevicePhoneMobileIcon,
    },
  ]

  

  return (
    <div>
      <section>
        <div className="relative overflow-hidden bg-white px-3">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="mx-auto max-w-7xl pt-20">
              <div className="sm:text-center lg:text-left">
                <h1 data-aos="fade-down" data-aos-duration="3000" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">We are here to help </span>{' '}
                  <span className="block text-blue-600 xl:inline">grow your business </span>
                </h1>
                <p data-aos="fade-up" data-aos-duration="3000" className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  We are dedicated to creating the highest quality softwareproducts with exceptional brands of any size. Our goal is toconsistently provide our customers with extraordinary services, offering fast, reliable turnarounds with low minimums and high volume capacity.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3 text-base font-medium text-blue-700 hover:bg-blue-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Main Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src="https://1.bp.blogspot.com/-Ri_u1jpr6DY/XqAh_QwLW6I/AAAAAAAABW4/uZiudzVo9GEKY9aBhJ28uZvTb73EtujZACLcBGAsYHQ/s1600/Art_Direction-106.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="pt-12" data-aos="zoom-in-up" data-aos-duration="3000">
        <StatusCount/>
      </section>

      <section>
        <div className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="sm:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better partner to work with
              </p>
              <p className="mx-auto  mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Work with a company that solve your problems and help you accelerate your business!
              </p>
            </div>

            <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
              <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                {features.map((feature) => (
                  <div data-aos="zoom-in-up" data-aos-duration="3000" key={feature.name} className="relative flex items-center md:items-start  gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white sm:shrink-0">
                      <feature.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <div className="sm:min-w-0 sm:flex-1">
                      <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                      <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-3">
        <div className="md:flex md:space-x-20">
          <div className="md:w-1/2 px-3">
            <h1 className="text-xl md:text-5xl font-extrabold py-3">Learn what TechEthio can help you.</h1>
            <p className="py-3 pb-10">
              TechEthio develops apps and websites that simple to use, powerful, and affordable that will fit your business needs. We will provide you platforms that will engineering the rails on which businesses because we believe a secure, trusted, reliable, consistent, and affordable business network will act as a catalyst to unlock business opportunities everywhere.At the core of what we do is a better user experience and connectivity.
            </p>
            <img className="max-h-[800px]" src="https://blog.vantagecircle.com/content/images/2020/08/technology-in-the-workplace.png" alt="" />
            {
              sols2.map((x, i) => <div key={i} data-aos="zoom-in-down" data-aos-duration="3000" className="py-1">
                <div className="md:flex items-center md:space-x-4">
                  <img className="w-32 h-32  hidden md:block rounded object-cover" src={x.img} alt="Sunset in the mountains" />
                  <div>
                    <div className="md:px-6 py-4">
                      <div className="font-extrabold text-lg mb-2">{x.title} </div>
                      <p className="text-gray-700">
                        {x.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)
            }
          </div>
          <div className="md:w-1/2 px-3">
            {
              solutions.map((x, i) => <div key={i} data-aos="zoom-in-down" data-aos-duration="3000" className="py-1">
                <div className="md:flex items-center md:space-x-4">
                  <img className="w-32 h-32 hidden md:block rounded object-cover" src={x.img} alt="Sunset in the mountains" />
                  <div>
                    <div className="md:px-6 py-4">
                      <div className="font-extrabold text-lg mb-2">{x.title} </div>
                      <p className="text-gray-700">
                        {x.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>

      </section>

      <section className='py-20'>
        <Team/>
      </section>

      {/* <section>
       <RichUsButtons/>
      </section> */}
    </div>
  )
}
