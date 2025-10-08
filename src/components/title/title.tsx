import type { ReactElement } from "react";

interface TitleProps {
    children: string
}

export function Title({children}: TitleProps): ReactElement {
    return (
        <h2>{children}</h2>
    )
}