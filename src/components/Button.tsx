import {MouseEventHandler, ReactNode} from "react";
import Link from "next/link";
import className from "classnames";
interface BaseButtonProps {
    label: string
    children?: ReactNode
    target?: string
    style?: string
}

interface ButtonProps extends BaseButtonProps{
    onClick: (e: MouseEventHandler<HTMLButtonElement> | any) => void
}

interface ButtonLinkProps extends BaseButtonProps {
    link: string
}

export function  Button (props: ButtonProps ) {
    return (
        <button onClick={(e) => props.onClick(e)}>
            {props.label}
        </button>
    )
}

export function ButtonLink (props: ButtonLinkProps) {
    return (
        <Link href={props.link} target={props.target} className={className("bg-branding-orange-500 rounded-[6.666px] text-white shadow-2xl py-3 px-4", props.style)}>{props.label}</Link>
    )
}
