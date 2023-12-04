import  Image from 'next/image'
import Link from "next/link";
import {PropsWithChildren} from "react";
import classNames from "classnames";


const FooterSiteMap = {
    company: [
        {
            link: '/careers',
            label: 'careers'
        },
        {
            link: '/about',
            label: 'about us'
        },
        {
            link: '/partners',
            label: 'partners'
        }
    ],
    social: [
        {
            link: '/ig',
            label: 'Instagram'
        },
        {
            link: '/facebook',
            label: 'Facebook'
        },
        {
            link: '/Twitter',
            label: 'twitter'
        },
        {
            link: '/medium',
            label: 'medium'
        },
    ],
    contact: [
        {
            link: '#',
            label: '+2348107641933'
        },
        {
            link: '#',
            label: 'hello@thehouseofcode.ng'
        },
    ]
}
export function SiteFooter () {
    return (
        <footer className="px-8 text-white lg:px-20 xl:px-32 py-10 bg-branding-blue-500">
            <div className="flex justify-between flex-col lg:flex-row w-full">
                <div className="flex flex-col h-full w-full flex-shrink mb-5 lg:mb-0">
                    <div className="flex flex-col">
                        <Image
                            src={'/site-logo-white.png'}
                            alt='House of code logo'
                            width={150}
                            height={52}
                        />
                        <h1 className="font-medium text-lg lg:text-xl mt-5 lg:w-1/2">Bring your ideas to live with our team of skilled engineers and designers.</h1>
                    </div>
                    <div className="mt-[50px]">
                        <p>Copyright @ The House Of Code 2023.</p>
                    </div>
                </div>
                <div className="flex flex-wrap w-full flex-grow">
                    <FooterLinkWrapper heading="Contact"  style="mr-3 md:mr-10">
                        {FooterSiteMap.contact.map(link => (
                            <FooterLink label={link.label}  contact={true} key={link.link} href={link.link} />
                        ))}
                    </FooterLinkWrapper >
                    <FooterLinkWrapper style="mr-3 md:mr-10" heading="Company" >
                        {FooterSiteMap.company.map(link => (
                            <FooterLink label={link.label}  key={link.link} href={link.link} />
                        ))}
                    </FooterLinkWrapper>
                    <FooterLinkWrapper style="mr-3 md:mr-10" heading="Socials" >
                        {FooterSiteMap.social.map(link => (
                            <FooterLink label={link.label} key={link.link} href={link.link} />
                        ))}
                    </FooterLinkWrapper>
                </div>
            </div>
        </footer>
    )
}

interface FooterLinkProp {
    label: string
    href: string

    isExternal?: boolean
    contact?: boolean
}
function FooterLink (props: FooterLinkProp) {
    return (
        <div className="py-2">
            <Link className={classNames("font-bold", !props.contact && 'capitalize')} href={props.href}>{props.label}</Link>
        </div>
    )
}

function FooterLinkWrapper ({heading, style, children}: PropsWithChildren<{heading: string, style: string}>) {
    return (
        <div className={classNames("flex flex-col", style)}>
            <div className="flex flex-col w-full">
                <h1 className="capitalize font-bold text-2xl">{heading}</h1>
            </div>

            <div className="mt-2">
                <ul>
                    {children}
                </ul>
            </div>
        </div>
    )
}
