"use client"

import Image from 'next/image'
import Link from "next/link";
import {ButtonLink} from "@/components/Button";
import {BiMenuAltRight} from "react-icons/bi";
import {useState, useEffect} from "react";
import classNames from "classnames";
import {MdOutlineClose} from "react-icons/md";
import {usePathname} from "next/navigation";

type NavbarLinksP = {
    link: string,
    label: string
}
const NavbarLinks: NavbarLinksP[] = [
    {
        link: 'about',
        label: 'about us'
    },
    {
        link: 'portfolio',
        label: 'portfolio'
    },
    {
        link: 'inquire',
        label: 'contact'
    },
]


export function SiteNavBar () {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 350) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = `py-4 lg:py-4 top-0 w-full z-10 ease-in transition-all ${
        isSticky ? 'shadow-md bg-white text-black fixed navbar slide-in ease-in transition-all' : ''
    }`;

    return (
        <div className={navbarClasses}>
                <div className="hidden md:flex  flex-row w-full items-center justify-between px-8 lg:px-14 xl:px-16">
                        <Link href="/">
                            <Image
                                className="flex-shrink"
                                src="/site-logo.png"
                                width={100}
                                height={50}
                                alt="The house of code Nigeria Logo"
                            />
                        </Link>
                        <div className="hidden md:flex bg-transparent rounded-[20px]  flex-row items-center space-x-5 lx:space-x-5 px-3 py-5">
                            {NavbarLinks.map(({link, label}, index) => (
                                <LinkComponent isActivePage={pathname.includes(link)} link={link} isSticky={isSticky} label={label} key={link + (Math.random() * index).toLocaleString()} />
                            ))}

                        </div>
                    <div>
                        <ButtonLink link='/inquire' label="Get in touch" style="ml-4 xl:ml-12" />
                    </div>
                </div>
            <div className="flex md:hidden flex-row w-full items-center justify-between px-6">
                <Image
                    className="flex-shrink"
                    src="/site-logo.png"
                    width={80}
                    height={28}
                    alt="The house of code Nigeria Logo"
                />
                <MobileNavbar isOpen={isOpen} toogleMenu={() => setIsOpen(prev => !prev)} />

            </div>
        </div>
    )
}


interface NavbarLinkProps {
    link: string,
    label: string,
    isActivePage?: boolean,
    isSticky?: boolean,
}
function LinkComponent (props: NavbarLinkProps) {
    return (
        <Link className={classNames("font-bold capitalize text-xl md:text-base", props.isSticky ? "text-black" : "lg:text-white text-black", props.isActivePage && 'text-branding-orange-500 font-extrabold')} href={props.link}>{props.label}</Link>
    )
}

interface MobileNavbarProps {
    isOpen: boolean,
    toogleMenu: () => void
}
export function MobileNavbar (props: MobileNavbarProps) {
    return (
        <div>
            <button onClick={props.toogleMenu}>
                <BiMenuAltRight className="text-dark" size={30} />
            </button>
            {props.isOpen && (
                <div className="absolute p-4 top-0 left-0 bg-white border-b-[1px] border-gray-200 shadow w-full">
                    <button onClick={props.toogleMenu} className="flex w-full justify-end">
                        <MdOutlineClose  size={40} className="text-black"/>
                    </button>

                        <ul>
                            {NavbarLinks.map(({link, label}, index) => (
                                <li key={link + (Math.random() * index).toLocaleString()}  className={classNames("py-4", index !== (NavbarLinks.length - 1) && 'border-b-[0.5px] border-gray-300')}><LinkComponent link={link} label={label}/></li>
                            ))}
                        </ul>
                        <div className="flex justify-center w-full">
                            <ButtonLink link="/inquire" label="Get in touch" style="flex w-full my-4 justify-center font-bold" />
                        </div>

                </div>
            )}
        </div>
    )
}
