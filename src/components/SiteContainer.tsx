import {PropsWithChildren} from "react";

export function SiteContainer (props: PropsWithChildren<{}>) {
    return (
        <div className="mx-auto px-32 w-full">
            {props.children}
        </div>
    )
}
