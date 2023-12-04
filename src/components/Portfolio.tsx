import Portfolio from '@/assets/portfolio.png'
import Emerge from '@/assets/emerge.png'
import Ecommerce from '@/assets/ecommerce.png'
import Milkyway from '@/assets/football.png'
import Image from 'next/image';
import { ButtonLink } from './Button';
import Reveal from './Reveal';

const ProjectShowcase = () => {
  return (
    <section className="bg-transparent px-8 lg:px-14 xl:px-16">
      <div className="flex flex-col items-center justify-center text-center lg:mb-10 mb-5">
        <p className="text-md lg:text-lg font-bold uppercase text-gray-400">THE gallery</p>
        <h1 className="text-xl lg:text-4xl font-bold">Explore Our Creative Space</h1>
      </div>
        <div className="w-full">
       <Reveal effect="fadeInLeft" delay={0.15 * (0 + 1)} threshold={undefined} duration={undefined} transition={undefined} animate={undefined}>
            <div className="rounded-[10px] overflow-hidden flex flex-col lg:flex-row mb-10">
                <Image
                    src={Ecommerce}
                    alt="Pfeffer & Frost"
                    className="w-full h-[500px] object-cover object-center basis-[60%]"
                />
                <div className="p-10 basis-[40%] w-full h-[500px] border-r-2 lg:border-l-0 border-l-2 lg:border-t-2 border-b-2 border-branding-orange-500">
                    <h3 className="text-xl font-semibold mb-2">Pfeffer & Frost</h3>
                    <p className="text-accent mb-[2em]">Dive into Pfeffer Frost – a sleek JAMSTACK e-commerce website tailored for our German client. We&apos;ve woven together the power of Strapi CMS and NextJs frontend, ensuring a seamless online shopping experience. From meticulous testing to end-to-end perfection, this site is a testament to both style and functionality. Explore a digital shopping journey where every detail has been fine-tuned for a flawless encounter.</p>
                    <ButtonLink link='https://pfefferundfrost.de/en' label='View More' target='_blank' style="w-[150px] mt-5 text-center"/>
                </div>
            </div>
       </Reveal>
       <Reveal effect="fadeInLeft" delay={0.15 * (1 + 1)} threshold={undefined} duration={undefined} transition={undefined} animate={undefined}>
        <div className="rounded-[10px] overflow-hidden flex flex-col lg:flex-row mb-10">
            <Image
                src={Emerge}
                alt="Emerge Digital"
                className="w-full h-[500px] object-cover object-center basis-[60%]"
            />
            <div className="p-10 basis-[40%] w-full h-[500px] border-r-2 lg:border-l-0 border-l-2 lg:border-t-2 border-b-2 border-branding-orange-500">
                <h3 className="text-xl font-semibold mb-2">Emerge Digital</h3>
                <p className="text-accent mb-[2em]">Introducing Emerge Digital – a sassy marketing solution tailored for our esteemed client in Dubai. Crafted with JAMSTACK prowess, this platform seamlessly pulls content from WordPress and WooCommerce, ensuring a dynamic showcase of services and subscription packages. Our touch extends beyond aesthetics, enhancing security, accessibility, and speed. Empower your online presence with Emerge Digital, where style meets substance, and your services take center stage.</p>
                <ButtonLink link='https://h4wj0ppx8l7fo45zmmkk4qzhc.js.wpenginepowered.com/' label='View More' target='_blank' style="w-[150px] mt-5 text-center"/>
            </div>
        </div>
       </Reveal>
       <Reveal effect="fadeInLeft" delay={0.15 * (2 + 1)} threshold={undefined} duration={undefined} transition={undefined} animate={undefined}>
            <div className="rounded-[10px] overflow-hidden flex flex-col lg:flex-row mb-10">
                <Image
                    src={Portfolio}
                    alt="BCMS"
                    className="w-full h-[500px] object-cover object-center basis-[60%]"
                />
                <div className="p-10 basis-[40%] w-full h-[500px] border-r-2 lg:border-l-0 border-l-2 lg:border-t-2 border-b-2 border-branding-orange-500">
                    <h3 className="text-xl font-semibold mb-2">BCMS Starters Project</h3>
                    <p className="text-accent mb-[2em]">Meet BCMS Starters – our cross-platform project designed for clients running a CMS. With precision in mind, we&apos;ve crafted seven starters on both GatsbyJS and NextJs. This dual approach ensures the perfect kickstart for your users, offering a seamless and tailored experience. Elevate your CMS journey with BCMS Starters, where versatility meets user-friendly beginnings.</p>
                    <ButtonLink link='https://github.com/bcms/starters#bcms-starters' label='View More' target='_blank' style="w-[150px] mt-5 text-center"/> 
                </div>
            </div>
       </Reveal>
       <Reveal effect="fadeInLeft" delay={0.15 * (3 + 1)} threshold={undefined} duration={undefined} transition={undefined} animate={undefined}>
            <div className="rounded-[10px] overflow-hidden flex flex-col lg:flex-row mb-10">
                <Image
                    src={Milkyway}
                    alt="Milkyway"
                    className="w-full h-[500px] object-cover object-center basis-[60%]"
                />
                <div className="p-10 basis-[40%] w-full h-[500px] border-r-2 lg:border-l-0 border-l-2 lg:border-t-2 border-b-2 border-branding-orange-500">
                    <h3 className="text-xl font-semibold mb-2">Milkyway Football Team</h3>
                    <p className="text-accent mb-[2em]">Score big with Milkyway Football Team&apos;s website – a stellar creation for our football club owner client. Powered by JAMSTACK architecture, with Contentful as the CMS and NextJs as the frontend, this site goes beyond the goalpost. Now, our client effortlessly manages player information, stats, blogs, and more. Join the winning team with Milkyway Football, where we redefine the game both on and off the field.</p>
                    <ButtonLink link='https://www.milkywayfootballacademy.com/' label='View More' target='_blank' style="w-[150px] mt-5 text-center"/>
                </div>
            </div>
       </Reveal>
        </div>
    </section>
  );
};

export default ProjectShowcase;
