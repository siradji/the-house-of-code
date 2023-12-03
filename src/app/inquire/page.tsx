import {IoPeople} from "react-icons/io5";
import {MdOutlineHandshake} from "react-icons/md";
import {HiLightBulb} from "react-icons/hi";
import {ContactForm} from "@/components/ContactForm";

export default function InquirePage () {
    return (
        <div className="px-8 lg:px-20 xl:px-32 py-10">
            <div className="flex flex-col w-full items-center justify-center">
                <h1 className="lg:text-5xl text-3xl text-accent font-bold">{`Let's Collaborate!`}</h1>
                <p className="text-sm text-accent font-bold w-full md:w-1/2 text-center leading-[25px] mt-4">At The House Of Code, collaboration is at the heart of everything we do. By working together, we can unlock the full potential of your organization and craft exceptional digital experiences that leave a lasting impact</p>
            </div>
            <div className="bg-branding-blue-500 p-6 rounded-[20px] my-10">
                <div className="flex flex-row w-full justify-center">
                    <h1 className="text-3xl text-branding-orange-500">Why Work With Us?</h1>
                </div>
                <WhyWorkWithUs />
            </div>

            <div className="flex flex-col w-full items-center justify-center my-4">
                <h1 className="text-2xl text-accent font-bold">{`Let's Get Started!`}</h1>
                <p className="text-sm md:text-lg text-accent font-bold w-full md:w-1/2 text-center leading-[25px] mt-4">
                    {`Fill out the form and tell us a bit about your project or requirements. We'll get back to you in a few hours to schedule a discussion and explore how The House Of Code can bring your digital dreams to life. Together, let's embark on a transformative journey towards digital success!`}
                </p>
            </div>
            <div className="flex rounded-[20px] justify-center ">
                <ContactForm />
            </div>
        </div>
    )
}


function WhyWorkWithUs () {
    return (
        <div className="flex items-center flex-wrap">
            <div className="flex flex-col w-full md:w-1/3 my-3">
                <div className="flex flex-row items-center mb-2">
                    <IoPeople size={40} className="text-white" />
                    <h1 className="text-xl font-bold text-white">Expertise</h1>
                </div>
                <p className="text-sm text-white  w-[80%]">Our team of skilled professionals brings a wealth of expertise and creativity to every project.</p>
            </div>
            <div className="flex flex-col w-full md:w-1/3 my-3">
                <div className="flex flex-row items-center mb-2">
                    <HiLightBulb size={40} className="text-white" />
                    <h1 className="text-xl font-bold text-white">Innovation</h1>
                </div>
                <p className="text-sm text-white w-[80%]">
                    Stay ahead of the curve with our cutting-edge technology solutions.
                </p>
            </div>
            <div className="flex flex-col w-full md:w-1/3 my-3">
                <div className="flex flex-row items-center mb-2">
                    <MdOutlineHandshake size={40} className="text-white" />
                    <h1 className="text-xl font-bold text-white">Customer-Centric</h1>
                </div>
                <p className="text-sm text-white  w-[80%]">
                    Your vision is our focus. We tailor our services to meet your unique needs and goals.
                </p>
            </div>
        </div>
    )
}
