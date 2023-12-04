import {IoPeople} from "react-icons/io5";
import {MdOutlineHandshake} from "react-icons/md";
import {HiLightBulb} from "react-icons/hi";
import {ContactForm} from "@/components/ContactForm";
import Portfolio from "@/components/Portfolio";

export default function InquirePage () {
    return (
        
        <Portfolio />
   
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
