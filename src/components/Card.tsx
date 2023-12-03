import {PropsWithChildren} from "react";

export function ExpertiseCard (props: PropsWithChildren<{}>) {
    return (
        <div className="rounded-[10.666px] p-4 shadow-2xl h-full flex flex-col justify-between w-full border-2 border-branding-orange-500">
            {props.children}

        </div>
    )
}

