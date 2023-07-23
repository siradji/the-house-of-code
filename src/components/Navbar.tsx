"use client"

import Image from 'next/image'
import Link from "next/link";
import {ButtonLink} from "@/components/Button";
import {BiMenuAltRight} from "react-icons/bi";
import {useState} from "react";
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
        link: 'partners',
        label: 'partners'
    },
    {
        link: 'portfolio',
        label: 'portfolio'
    },
    {
        link: 'careers',
        label: 'careers'
    },
]


export function SiteNavBar () {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="bg-branding-blue-100 py-4 lg:py-6">
                <div className="hidden md:flex flex-row w-full items-center justify-between px-12 lg:px-20 xl:px-32">
                            <Image
                                className="flex-shrink"
                                src="/site-logo.png"
                                width={150}
                                height={52}
                                alt="The house of code Nigeria Logo"
                            />
                        <div className="hidden md:flex bg-branding-white rounded-[20px]  bg-white  flex-row items-center space-x-3 lx:space-x-5 px-3 py-5">
                            {NavbarLinks.map(({link, label}, index) => (
                                <LinkComponent isActivePage={pathname.includes(link)} link={link} label={label} key={link + (Math.random() * index).toLocaleString()} />
                            ))}
                            <div>
                                <ButtonLink link='/inquire' label="Get in touch" style="ml-4 xl:ml-12" />
                            </div>
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
    isActivePage?: boolean
}
function LinkComponent (props: NavbarLinkProps) {
    return (
        <Link className={classNames("font-bold text-black capitalize  text-xl md:text-base", props.isActivePage && 'text-branding-orange-500 font-extrabold')} href={props.link}>{props.label}</Link>
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
                <BiMenuAltRight className="text-black" size={30} />
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
