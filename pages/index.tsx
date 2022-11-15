import Icon from "../components/icon"
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import CounterUp from "../components/counterUp"
import Image from "next/image"
import Link from "next/link"

export default function Index() {
  const counters = [
    {
      title: "Completed projects",
      amount: 200,
      subtitle: "+",
      icon: "totalProjects"
    },
    {
      title: "Happy customers",
      amount: 100, subtitle: "+",
      icon: "people"
    },
    {
      title: "In global business",
      amount: 7, subtitle: "+ yaers",
      icon: "success"
    },
    {
      title: "Pricing start from",
      icon: "money",
      amount: 1000, subtitle: " USD",
    }
  ]
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

  const solutions = [
    {
      title: "Software Development",
      desc: "Enterprise resource planning (ERP) refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations.",
      img: "https://www.jonesday.com/-/media/files/publications/2019/05/when-coding-is-criminal/when-coding-is-criminal.jpg?h=800&w=1600&la=en&hash=5522AA91198A168017C511FCBE77E201"
    },
    {
      title: "Enterprise Resource Planning System",
      desc: "CRM stands for “Customer Relationship Management” and is a software system that helps business owners easily track all communications and nurture relationships with their leads and clients . A CRM replaces the multitude of spreadsheets, databases and apps that many businesses patch together to track client data.",
      img: "https://images.ctfassets.net/lzny33ho1g45/best-lms-p-img/9a84fc48d84211e999615d602472690a/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
    },
    {
      title: "Learning Management System",
      desc: "LMS means learning management system . A learning management system is a digital learning environment that manages all aspects of a company's various training efforts. It also manages user information for personalized delivery including their user profile, job functions and preferences.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhlFUof49L0RowUp-UlqNW3h7NDjyoA2Lj59GHSXuo8wsNkpKMT7P40_0hoCtWw69zHWI&usqp=CAU"
    },
    {
      title: "Customer Relation Management System",
      desc: "Web hosting is the place where all the files of your website live . It is like the home of your website where it actually lives. A good way to think about this is if the domain name was the address of your house, then web hosting is the actual house that address points to. All websites on the internet, need web hosting.",
      img: "https://miro.medium.com/max/1200/1*vTWfyClVxxyH2DB7_-9gNA.jpeg"
    },
    {
      title: "Thid party and API integrations",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      img: "https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/"
    },
  ]
  const sols2 = [
    {
      title: "Digital Marketing",
      desc: "Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication . This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.",
      img: "https://www.kbrtec.com.br/blog/wp-content/uploads/2021/07/por-que-marketing-digital-e-importante-em-santos-kbr-tec-1150x650.jpg"
    },
    {
      title: "Consultancy",
      desc: "Consulting Services means the provision of expertise or strategic advice that is presented for consideration and decision-making . A Non-consulting Service Provider is an individual or a company who contracts to provide services, other than consulting services to another individual or business.",
      img: "https://thumbs.dreamstime.com/b/financial-advisory-services-group-business-advisor-showing-plan-investment-to-clients-consultancy-office-194541286.jpg"
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
        <div className="grid grid-cols-2 px-3 md:px-0 md:grid-cols-4 md:gap-4">
          {
            counters.map((x, i) => <div key={i}>
              <div className="flex items-center space-x-2 py-3">
                <div className="p-3 bg-blue-50 rounded-xs">
                  <Icon color="blue-600" path={x.icon} />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-extrabold "> <CounterUp count={x.amount} time={3} /> {x.subtitle} </h1>
                  <h1 className="text-sm md:text-lg font-semibold text-gray-600">{x.title} </h1>
                </div>
              </div>
            </div>)
          }
        </div>
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

      <section>
        <div className="p-10">
          <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block py-2">Ready to dive in?</span>
            <span className="block text-blue-600">Contact TechEthio today.</span>
          </h2>
          <div className="flex justify-center py-10">
            <div className="mt-8 flex md:space-x-20 lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-10 py-2 text-base font-medium text-white hover:bg-blue-700"
                >
                  Get started
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-10 py-2 text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
