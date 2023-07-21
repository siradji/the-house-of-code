import Image from 'next/image'
import Link from "next/link";
import {ButtonLink} from "@/components/Button";

type NavbarLinksP = {
    link: string,
    label: string
}
const NavbarLinks: NavbarLinksP[] = [
    {
        link: 'solutions',
        label: 'solutions'
    },
    {
        link: 'about',
        label: 'about us'
    },
    {
        link: 'clients',
        label: 'client'
    },
    {
        link: 'partners',
        label: 'partners'
    },

    {
        link: 'cases',
        label: 'case study'
    }
]


export function SiteNavBar () {
    return (
        <div className="bg-branding-blue-100 py-6 fixed w-full z-40">
                <div className="flex flex-row w-full items-center justify-between px-32">
                            <Image
                                className="flex-shrink"
                                src="/site-logo.png"
                                width={200}
                                height={70}
                                alt="The house of code Nigeria Logo"
                            />
                        <div className="bg-branding-white rounded-[20px]  bg-white flex flex-row items-center space-x-5 px-3 py-5">
                            {NavbarLinks.map(({link, label}, index) => (
                                <LinkComponent link={link} label={label} key={link + (Math.random() * index).toLocaleString()} />
                            ))}
                            <div>
                                <ButtonLink link='/inquire' label="Get in touch" style="ml-12" />
                            </div>
                        </div>
                </div>
        </div>
    )
}

interface NavbarLinkProps {
    link: string,
    label: string
}
function LinkComponent (props: NavbarLinkProps) {
    return (
        <Link className="font-bold text-black capitalize font-white" href={props.link}>{props.label}</Link>
    )
}
