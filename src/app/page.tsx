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

import Contentful from '@/assets/contentful.svg'
import Sanity from '@/assets/sanity.svg'
import Wordpress from '@/assets/wordpress.svg'
import Strapi from '@/assets/strapi.svg'
import Storyblock from '@/assets/storyblocksvg.svg'

import Gatsby from '@/assets/gatsby.svg'
import Nextjs from '@/assets/nextjs.svg'
import Remix from '@/assets/remix.svg'
import Nuxt from '@/assets/nuxt.svg'
import Gridsome from '@/assets/gridsome.svg'

import Netlify from '@/assets/netlify.svg'
import Vercel from '@/assets/vercel.svg'
import Aws from '@/assets/aws.svg'
import Azure from '@/assets/azure.svg'
import Firebase from '@/assets/firebase.svg'
import {FaArrowDown} from "react-icons/fa";
import Reveal from "@/components/Reveal";
import Portfolio from '@/components/Portfolio';



export default function Home() {
  return (
    <>
        <section className="mb-24 flex w-full justify-between items-center flex-col lg:flex-row px-8 lg:px-14 xl:px-16">
            <div className="text-white flex flex-col mt-10 lg:basis-[60%]">
                <h1 className="text-2xl md:text-3xl lg:text-7xl leading-8 break-words font-bold capitalize">Software Solution <br /> <span className="text-branding-orange-500">For organizations.</span></h1>
                <p className="text-base lg:text-xl break-words  mt-10">Enhance your organization initiatives with our exclusive team of skilled software engineers, designers and managers.</p>
                <ButtonLink link='/inquire' label='Get in touch!' style="w-[150px] mt-5 text-center"/>
            </div>
            <div className="lg:basis-[40%]">
                <Image
                    className=""
                    src={HeroImage}
                    alt="The house of code nigeria working"
                />
            </div>
        </section>
        <section className="px-8 lg:px-20 xl:px-32 py-5">
           <div className="">
               <div className="flex flex-col w-full justify-center items-center text-center">
                <p className="text-md lg:text-lg font-bold uppercase text-gray-400">Our Services</p>
                <h1 className="text-2xl lg:text-4xl capitalize font-bold">Results we provide for companies</h1>
               </div>
               {/* <div className="mt-10 w-4/5">
                   <p className="text-base md:text-xl font-bold">
                       {`${`
                       Experience the power of Nigeria's top 1% tech talent at The House Of Code. We deliver exceptional software engineering solutions for governments and organisations, combining local expertise, innovation, and unwavering commitment to excellence.
                       `}`}
                   </p>

               </div> */}
               <div className="grid-cols-1 grid lg:grid-cols-3 lg:gap-4 gap-10 mt-16">
                   <Reveal effect={undefined}  threshold={undefined} duration={undefined} delay={undefined} transition={undefined} animate={undefined}>
                       <ExpertiseCard>
                           <Image
                               src={ServiceImage3}
                               alt="House Of Code - Services"
                               width={150}
                           />
                           <div className="">
                               <h2 className="font-bold text-2xl mb-3 ">Software Engineering & Development</h2>
                               <p>Our Software Engineering & Development service is at the core of our technical expertise. We specialize in crafting cutting-edge software solutions that cater to your unique business needs. Our team of experienced developers, architects, and engineers are dedicated to turning your innovative ideas into robust, scalable, and user-friendly software applications.</p>
                           </div>
                           <ButtonLink link='/softwere-engineering' label='Learn More' style="w-[150px] mt-5 text-center"/>
                       </ExpertiseCard>
                   </Reveal>
                   <Reveal effect={undefined} threshold={undefined} duration={undefined} delay={undefined} transition={undefined} animate={undefined}>
                       <ExpertiseCard>
                           <Image
                               src={ServiceImage2}
                               alt="House Of Code - Services"
                               width={150}
                           />
                           <div className="">
                               <h2 className="font-bold text-2xl mb-3 ">Branding Identity & Design</h2>
                               <p>Elevate your brand&apos;s visual presence and make a lasting impression with our Branding Identity & Design service. We&apos;re passionate about helping businesses stand out in a crowded marketplace through compelling and cohesive branding strategies.</p>

                           </div>
                           <ButtonLink link='#' label='Learn More' style="w-[150px] mt-5 text-center"/>
                       </ExpertiseCard>
                   </Reveal>
                   <Reveal effect={undefined} threshold={undefined} duration={undefined} delay={undefined} transition={undefined} animate={undefined}><ExpertiseCard>
                       <Image
                           src={ServiceImage1}
                           alt="House Of Code - Services"
                           width={150}
                       />
                       <div className="">
                           <h2 className="font-bold text-2xl mb-3">Consultation</h2>
                           <p>Are you seeking expert guidance to overcome challenges, make informed decisions, or drive your business to new heights? Our Consultation service is tailored to provide you with valuable insights, strategies, and solutions.</p>

                       </div>
                       <ButtonLink link='#' label='Learn More' style="w-[150px] mt-5 text-center"/>
                   </ExpertiseCard></Reveal>
               </div>

           </div>
        </section>
        <section className="my-40">
            <div className="flex w-full flex-col lg:px-14 xl:px-16">
                <div className="flex flex-col bg-branding-blue-500 rounded-[10px] w-full px-8 lg:px-20 xl:px-32 py-20">
                    <div className="flex flex-col w-full text-center">
                        <p className="text-md lg:text-lg font-bold uppercase text-gray-400 mb-2">THE INGREDIENTS</p>
                        <h1 className="text-2xl lg:text-4xl font-bold">What We Mix And Cook Your Website</h1>
                    </div>
                    <div className="lg:mt-10 mt-5">
                        <h1 className="text-base md:text-xl text-white text-center font-bold">
                            We have partnered with the best tech providers and keyholders to bring your ideas to life.
                        </h1>

                    </div>
                    <div className="w-full lg:mt-14 mt-7">
                        <div className="rounded-[10px] p-10 shadow-2xl flex flex-col items-center justify-center
                     w-full border-2 border-branding-orange-500">
                            <p className="text-md lg:text-lg font-bold uppercase text-branding-orange-500 mb-10">Headless cms</p>
                            <div className="flex flex-wrap items-center justify-center gap-10">
                                <Image
                                    src={Contentful}
                                    alt="House Of Code - Contentful"
                                    width={150}
                                />
                                <Image
                                    src={Strapi}
                                    alt="House Of Code - Strapi"
                                    width={150}
                                />
                                <Image
                                    src={Storyblock}
                                    alt="House Of Code - Storyblock"
                                    width={150}
                                />
                                <Image
                                    src={Wordpress}
                                    alt="House Of Code - Wordpress"
                                    width={150}
                                />
                                <Image
                                    src={Sanity}
                                    alt="House Of Code - Sanity"
                                    width={150}
                                />
                            </div>
                        </div>
                       <div className="my-10 flex flex-col w-full items-center justify-center">
                           <FaArrowDown className="animate-bounce" color="#FD9613" size={60} />
                       </div>
                        <div className="rounded-[10px] p-10 shadow-2xl flex flex-col items-center justify-center
                     w-full border-2 border-branding-orange-500">
                            <p className="text-md lg:text-lg font-bold uppercase text-branding-orange-500 mb-10">Frontend Frameworks</p>
                            <div className="flex flex-wrap items-center justify-center gap-10">
                                <Image
                                    src={Nextjs}
                                    alt="House Of Code - Nextjs"
                                    width={150}
                                />
                                <Image
                                    src={Gatsby}
                                    alt="House Of Code - Gatsby"
                                    width={150}
                                />
                                <Image
                                    src={Nuxt}
                                    alt="House Of Code - Nuxt"
                                    width={150}
                                />
                                <Image
                                    src={Gridsome}
                                    alt="House Of Code - Gridsome"
                                    width={150}
                                />
                                <Image
                                    src={Remix}
                                    alt="House Of Code - Remix"
                                    width={150}
                                />
                            </div>
                        </div>
                        <div className="my-10 flex flex-col w-full items-center justify-center">
                            <FaArrowDown className="animate-bounce" color="#FD9613" size={60} />
                        </div>
                        <div className="rounded-[10px] p-10 shadow-2xl flex flex-col items-center justify-center
                     w-full border-2 border-branding-orange-500">
                            <p className="text-md lg:text-lg font-bold uppercase text-branding-orange-500 mb-10">Deployment Platforms</p>
                            <div className="flex flex-wrap items-center justify-center gap-10">
                                <Image
                                    src={Aws}
                                    alt="House Of Code - Aws"
                                    width={150}
                                />
                                <Image
                                    src={Azure}
                                    alt="House Of Code - Azure"
                                    width={150}
                                />
                                <Image
                                    src={Vercel}
                                    alt="House Of Code - Vercel"
                                    width={150}
                                />
                                <Image
                                    src={Netlify}
                                    alt="House Of Code - Netlify"
                                    width={150}
                                />
                                <Image
                                    src={Firebase}
                                    alt="House Of Code - Firebase"
                                    width={150}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className="my-40">
            <div className="flex w-full flex-col px-8 lg:px-20 xl:px-32 py-5">
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
                    <div className="w-[150px] h-[100px]">
                    <svg width="115" height="28" viewBox="0 0 115 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M0.101562 27.2433H13.8161C20.3916 27.2433 23.7733 23.8379 23.7733 19.4866C23.7733 16.7622 22.5333 15.1352 21.2183 14.2271C20.4667 13.6974 19.6401 13.319 18.7008 13.0541V12.865C19.4523 12.6379 20.1286 12.2974 20.7674 11.8433C21.7819 11.0487 22.8339 9.64874 22.8339 7.37845C22.8339 3.78386 19.7904 0.756836 14.1919 0.756836H0.101562V27.2433ZM7.05278 10.973V6.43252H12.6889C14.6052 6.43252 15.5069 7.37845 15.5069 8.70276C15.5069 10.0271 14.6052 10.973 12.6889 10.973H7.05278ZM7.05278 21.5676V16.2704H13.0647C15.5069 16.2704 16.6342 17.4055 16.6342 18.919C16.6342 20.4325 15.5069 21.5676 13.0647 21.5676H7.05278Z" fill="#2E2E2E"></path>
                            <path d="M25.293 14C25.293 21.9459 31.3048 28 39.9469 28C45.6582 28 49.1527 25.2757 51.1815 22.5135C52.3841 20.9243 53.2859 19.1081 53.8494 17.027H46.7105C46.4472 17.8973 45.9963 18.6541 45.4327 19.2973C44.4182 20.4703 42.8025 21.5676 39.9469 21.5676C35.6259 21.5676 32.6199 18.5405 32.6199 14C32.6199 9.45947 35.6259 6.43244 39.9469 6.43244C42.502 6.43244 44.1176 7.41622 45.1321 8.43785C45.7333 9.00541 46.1842 9.68651 46.5223 10.4054H53.6617C53.1352 8.47569 52.2714 6.77297 51.1064 5.22163C49.1151 2.64865 45.6206 0 39.9469 0C31.3048 0 25.293 6.05407 25.293 14Z" fill="#2E2E2E"></path>
                            <path d="M56.3008 27.2433H63.252V12.1082L62.6885 8.70276H63.0643L68.1369 21.1893H75.8393L80.9118 8.70276H81.2876L80.7241 12.1082V27.2433H87.6754V0.756836H77.9061L72.4577 14.3785H71.5184L66.07 0.756836H56.3008V27.2433Z" fill="#2E2E2E"></path>
                            <path d="M89.9219 18.7297C90.4103 20.4703 91.162 22.0216 92.2139 23.3838C94.0175 25.6919 97.1363 28 102.509 28C109.986 28 113.781 23.8378 113.781 19.2973C113.781 13.3189 107.657 11.9189 103.148 10.8216C100.367 10.1784 98.1883 9.45947 98.1883 7.94593C98.1883 7 99.0901 6.05407 101.757 6.05407C103.674 6.05407 104.726 6.62163 105.327 7.18919C105.665 7.52971 105.928 7.90809 106.079 8.32431H113.218C112.879 6.77297 112.241 5.37297 111.302 4.16216C109.724 2.08108 106.83 0 101.757 0C94.8443 0 90.8612 3.93513 90.8612 8.32431C90.8612 13.1297 94.7312 14.9459 98.6767 16.0433C102.584 17.0649 106.455 17.6703 106.455 19.6757C106.455 20.8487 105.327 21.9459 102.509 21.9459C100.255 21.9459 98.8644 21.1513 98.0757 20.3567C97.6248 19.9027 97.2865 19.373 97.0608 18.7297H89.9219Z" fill="#2E2E2E"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                            <rect width="114" height="28" fill="white" transform="translate(0.101562)"></rect>
                            </clipPath>
                        </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section> */}

        <Portfolio />
        <section className="px-8 lg:px-14 xl:px-16 lg:py-20 py-10 ">
            <div className="flex flex-col flex-wrap justify-center items-center text-center">
                <div className="w-full">
                    <div className="flex flex-col w-full text-center">
                        <p className="text-md lg:text-lg font-bold uppercase text-gray-400 mb-2">Get Intouch</p>
                        <h1 className="text-2xl lg:text-4xl font-bold">Have a project? Let us bring your idea to life.</h1>
                    </div>
                    <div>
                        <p className="my-10">
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
