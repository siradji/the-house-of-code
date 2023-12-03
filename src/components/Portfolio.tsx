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
       <Reveal effect="fadeInLeft"  delay={0.15 * (0 + 1)}>
            <div className="rounded-[10px] overflow-hidden flex flex-col lg:flex-row mb-10">
                <Image
                    src={Ecommerce}
                    alt="Pfeffer & Frost"
                    className="w-full h-[500px] object-cover object-center basis-[60%]"
                />
                <div className="p-10 basis-[40%] w-full h-[500px] border-r-2 lg:border-l-0 border-l-2 lg:border-t-2 border-b-2 border-branding-orange-500">
                    <h3 className="text-xl font-semibold mb-2">Pfeffer & Frost</h3>
                    <p className="text-accent mb-[2em]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, tempore quos ipsum ipsa nostrum obcaecati impedit ab rem quaerat voluptate omnis nobis maiores harum tempora? Cum, inventore. Obcaecati, beatae vitae.</p>
                    <ButtonLink link='https://pfefferundfrost.de/en' label='View More' target='_blank' style="w-[150px] mt-5 text-center"/>
                </div>
            </div>
       </Reveal>
       <Reveal effect="fadeInLeft"  delay={0.15 * (1 + 1)}>
        <div className="rounded-[10px] overflow-hidden flex flex-col lg:flex-row mb-10">
            <Image
                src={Emerge}
                alt="Emerge Digital"
                className="w-full h-[500px] object-cover object-center basis-[60%]"
            />
            <div className="p-10 basis-[40%] w-full h-[500px] border-r-2 lg:border-l-0 border-l-2 lg:border-t-2 border-b-2 border-branding-orange-500">
                <h3 className="text-xl font-semibold mb-2">Emerge Digital</h3>
                <p className="text-accent mb-[2em]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, tempore quos ipsum ipsa nostrum obcaecati impedit ab rem quaerat voluptate omnis nobis maiores harum tempora? Cum, inventore. Obcaecati, beatae vitae.</p>
                <ButtonLink link='https://h4wj0ppx8l7fo45zmmkk4qzhc.js.wpenginepowered.com/' label='View More' target='_blank' style="w-[150px] mt-5 text-center"/>
            </div>
        </div>
       </Reveal>
       <Reveal effect="fadeInLeft"  delay={0.15 * (2 + 1)}>
            <div className="rounded-[10px] overflow-hidden flex flex-col lg:flex-row mb-10">
                <Image
                    src={Portfolio}
                    alt="BCMS"
                    className="w-full h-[500px] object-cover object-center basis-[60%]"
                />
                <div className="p-10 basis-[40%] w-full h-[500px] border-r-2 lg:border-l-0 border-l-2 lg:border-t-2 border-b-2 border-branding-orange-500">
                    <h3 className="text-xl font-semibold mb-2">BCMS Starters Project</h3>
                    <p className="text-accent mb-[2em]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, tempore quos ipsum ipsa nostrum obcaecati impedit ab rem quaerat voluptate omnis nobis maiores harum tempora? Cum, inventore. Obcaecati, beatae vitae.</p>
                    <ButtonLink link='https://github.com/bcms/starters#bcms-starters' label='View More' target='_blank' style="w-[150px] mt-5 text-center"/> 
                </div>
            </div>
       </Reveal>
       <Reveal effect="fadeInLeft"  delay={0.15 * (3 + 1)}>
            <div className="rounded-[10px] overflow-hidden flex flex-col lg:flex-row mb-10">
                <Image
                    src={Milkyway}
                    alt="Milkyway"
                    className="w-full h-[500px] object-cover object-center basis-[60%]"
                />
                <div className="p-10 basis-[40%] w-full h-[500px] border-r-2 lg:border-l-0 border-l-2 lg:border-t-2 border-b-2 border-branding-orange-500">
                    <h3 className="text-xl font-semibold mb-2">Milkyway Football Team</h3>
                    <p className="text-accent mb-[2em]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, tempore quos ipsum ipsa nostrum obcaecati impedit ab rem quaerat voluptate omnis nobis maiores harum tempora? Cum, inventore. Obcaecati, beatae vitae.</p>
                    <ButtonLink link='https://www.milkywayfootballacademy.com/' label='View More' target='_blank' style="w-[150px] mt-5 text-center"/>
                </div>
            </div>
       </Reveal>
        </div>
    </section>
  );
};

export default ProjectShowcase;
