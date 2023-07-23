import {PropsWithChildren} from "react";
import Image from "next/image";
import IdeaImage from '@/assets/idea.png'
import classNames from "classnames";
import {ButtonLink} from "@/components/Button";
export default function AboutPage () {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
          <div className="flex bg-branding-blue-500 flex-col min-h-screen w-full lg:w-1/2 px-6 text-white lg:px-12 xl:px-20 py-10">
                <h1 className="text-2xl md:text-5xl font-bold">Unlocking Possibilities, One Line at a Time.</h1>
                <AboutSection heading="About The House Of Code">
                    <p className="text-sm text-white font-medium leading-[30px]">
                        Welcome to The House Of Code! A premier nearshore web development and brand identity agency, we offer comprehensive software engineering solutions designed to empower organizations across various industries. Our commitment to excellence and cutting-edge technology drives us to deliver innovative and secure digital solutions tailored to your unique needs.
                    </p>
                </AboutSection>
              <AboutSection heading="Who We Are">
                  <p className="text-sm text-white font-medium leading-[30px]">
                      At The House Of Code, we take pride in being a team of passionate professionals with extensive experience in the software engineering landscape. Our diverse skill set, combined with a customer-centric approach, enables us to provide top-notch services to businesses of all verticals and governments.
                  </p>
              </AboutSection>
              <AboutSection heading="Our Services">
                  <p className="text-sm text-white font-medium leading-[30px]">
                      With a holistic approach to software engineering, we offer a wide range of services to enhance your digital presence and drive growth. From developing robustly secure websites and applications to crafting captivating brand identities, our talented team of developers, designers, and strategists collaborates seamlessly to exceed your expectations.
                  </p>
              </AboutSection>
          </div>
            <div className="flex bg-white min-h-screen w-full lg:w-1/2">
                <div className="px-6 text-white lg:px-12 xl:px-20 py-10">
                    <div className="w-full">
                        <Image src={IdeaImage} alt="The house of code - Idea" />
                    </div>
                    <div className="flex flex-col w-full">
                        <AboutSection heading="Your Growth is Our Success" style="text-branding-blue-500">
                            <p className="text-sm text-black font-medium leading-[30px]">
                                Our primary goal is to support your success. Whether you are a startup looking to make a powerful entry into the market or an established enterprise seeking to enhance your digital capabilities, The House Of Code is here to propel your growth and achieve your business objectives
                            </p>
                        </AboutSection>
                        <AboutSection heading="Collaborative Partnerships" style="text-branding-blue-500">
                            <p className="text-sm text-black font-medium leading-[30px]">
                                At The House Of Code, we believe in the power of collaboration. We work closely with our clients to gain valuable insights into their goals and challenges. By understanding your vision, we align our solutions with your business objectives, ensuring a perfect fit for your brand and target audience.
                            </p>
                        </AboutSection>
                        <AboutSection heading="Get In Touch" style="text-branding-blue-500">
                            <p className="text-sm text-black font-medium leading-[30px]">
                                {` Ready to embark on a transformative journey of digital growth? We're thrilled to connect with you. Reach out to our team today, and let's collaborate to bring your vision to life and make an impactful mark in the digital landscape.`}
                            </p>
                            <ButtonLink link='/inquire' label="Start a project" style="mt-5 w-[200px] text-center" />
                        </AboutSection>
                    </div>
                </div>
            </div>
        </div>
    )
}


function AboutSection ({heading, children, style}: PropsWithChildren<{heading: string, style?:string}>) {
    return (
        <div className="mt-5 flex flex-col w-full">
            <div className="flex flex-col w-full  mb-3 ">
                <h2 className={classNames('font-bold text-2xl', style)}>{heading}</h2>
                <div className="bg-branding-orange-500 w-[40px] h-[5px] rounded" />
            </div>
            {children}
        </div>
    )
}
