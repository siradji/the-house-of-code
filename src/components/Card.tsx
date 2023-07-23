import {PropsWithChildren} from "react";

export function ExpertiseCard (props: PropsWithChildren<{label: string}>) {
    return (
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 px-0 md:px-2">
            <div className="rounded-[20px] shadow-2xl ">
                {props.children}
            </div>
            <div className="my-4">
                <h2 className="font-bold text-2xl text-center">{props.label}</h2>
            </div>
        </div>
    )
}

