import Image from 'next/image'

import {ButtonLink} from "@/components/Button";
import {ExpertiseCard} from "@/components/Card";

import HeroImage from '@/assets/hero-image.png';

import ServiceImage1 from '@/assets/service-1.png';
import ServiceImage2 from '@/assets/service-2.png';
import ServiceImage3 from '@/assets/service-3.png';
import Link from "next/link";
import ImagyneLogo from "@/assets/imagyne.png";
import ShopifyLogo from "@/assets/shopify.png";
import Creative from '@/assets/creativ e.png'
import WorkLogo from '@/assets/work.png'
export default function Home() {
  return (
    <>
        <section className="mb-24 flex w-full justify-between items-center flex-col lg:flex-row px-12 lg:px-20 xl:px-32">
            <div className="text-black flex flex-col mt-10 ">
                <h1 className="text-2xl md:text-3xl lg:text-5xl leading-8 break-words font-bold">Complete Software engineering solution for organizations.</h1>
                <p className="text-base lg:text-xl break-words  mt-10">Enhance your organization initiatives with our exclusive team of skilled software engineers, designers and managers.</p>
                <ButtonLink link='/inquire' label='Get in touch!' style="w-[150px] mt-5 text-center"/>
            </div>
            <div>
                <Image
                    className="basis-3/5"
                    src={HeroImage}
                    alt="The house of code nigeria working"
                />
            </div>
        </section>
        <section className="bg-branding-blue-100 px-12 lg:px-20 xl:px-32 py-5">
           <div className="bg-white rounded-[40px] p-10">
               <div className="flex flex-col w-full">
                   <h1 className="text-xl lg:text-4xl font-bold">What we do</h1>
                   <div className="bg-branding-orange-500 w-[70px] h-[20px] rounded" />
               </div>
               <div className="mt-10 w-4/5">
                   <h1 className="text-base md:text-xl font-bold">
                       {`${`
                       Experience the power of Nigeria's top 1% tech talent at The House Of Code. We deliver exceptional software engineering solutions for governments and organisations, combining local expertise, innovation, and unwavering commitment to excellence.
                       `}`}
                   </h1>

               </div>
               <div className="flex flex-row flex-wrap items-center justify-between mt-16">
                    <ExpertiseCard label="Software Engineering & Development">
                        <Image
                            src={ServiceImage3}
                            alt="House Of Code - Services"
                        />
                    </ExpertiseCard>
                   <ExpertiseCard label="Branding Identity & Design">
                       <Image
                           src={ServiceImage2}
                           alt="House Of Code - Services"
                       />
                   </ExpertiseCard>
                   <ExpertiseCard label="Consultation">
                       <Image
                           src={ServiceImage1}
                           alt="House Of Code - Services"
                       />
                   </ExpertiseCard>
               </div>
               <div className="flex justify-end w-full my-10">
                   <Link href="#" className="text-branding-orange-500  hover:opacity-70 underline font-bold text-xl" >Learn more about what we offer</Link>
               </div>
           </div>
        </section>
        <section className="my-20">
            <div className="flex w-full flex-col px-12 lg:px-20 xl:px-32 py-5">
                <div className="flex flex-col w-full">
                    <h1 className="text-xl lg:text-4xl font-bold">Our Partners</h1>
                    <div className="bg-branding-orange-500 w-[70px] h-[20px] rounded" />
                </div>
                <div className="mt-10 w-4/5">
                    <h1 className="text-base md:text-xl font-bold">
                        We have partnered with the best tech providers and keyholders to bring your ideas to life.
                    </h1>

                </div>
                <div className="flex flex-row w-full justify-center  md:items-center space-x-20 flex-wrap mt-14 ">
                    <div className="w-[150px] h-[100px]">
                        <Image src={ImagyneLogo} alt="House of code partners" />
                    </div>
                    <div className="w-[150px] h-[100px]">
                        <Image src={ShopifyLogo} alt="House of code partners" />
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-branding-blue-100 px-12 lg:px-20 xl:px-32 py-10">
            <div className="bg-white rounded-[40px] p-10">
                    <div className="flex flex-col w-full">
                        <h1 className="text-xl lg:text-4xl font-bold">Portfolio</h1>
                        <div className="bg-branding-orange-500 w-[70px] h-[20px] rounded" />
                    </div>
                    <div className="flex flex-row flex-wrap">
                        <div className="flex flex-col mt-7 w-full lg:w-1/3">
                            <h1 className="font-bold text-2xl">Explore our</h1>
                            <h2 className="text-5xl font-bold my-4">
                                <span className=" text-branding-blue-500">Creative</span>
                                <span className="text-branding-orange-500">{" "} Space</span>
                            </h2>
                            <p className="my-4 text-sm">
                                We have worked on world class projects for ambitious client from all over the world. Germany, Nigeria, United kingdom. Our reputation in delivering the best engineering solution is undisputable.
                            </p>
                            <ButtonLink link="/portfolio" label="View our work"  style="w-[150px]"/>
                        </div>
                        <div className="w-full lg:w-2/3 mt-5 md:mt-0">
                            <Image src={Creative} alt="House of code - Portfolio" />
                        </div>
                    </div>
                </div>
        </section>
        <section className="px-12 lg:px-20 xl:px-32 py-10">
            <div className="flex flex-wrap">
                <div className="w-full md:w-2/3 mt-10 mt:mb-0">
                    <Image src={WorkLogo} alt="House of code" />
                </div>
                <div className="w-full md:w-1/3">
                   <div className="font-bold text-5xl mb-5">
                       <h1 className="text-branding-blue-500">Have a project?</h1>
                       <h1 className="text-branding-orange-500">Let us bring your idea to life.</h1>
                   </div>
                    <div>
                        <p className="my-5">
                            {` Ready to embark on a transformative journey of digital growth and drive transformative change? We're thrilled to connect with you. Reach out to our team today, and let's collaborate to bring your vision to life and make an impactful mark in the digital landscape.`}
                        </p>
                        <ButtonLink link='/inquire' label='Schedule a call' style="w-[200px]" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
