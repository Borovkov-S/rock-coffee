import type { ReactElement } from "react";
import "./page.module.scss";

interface PageProps {
    children: ReactElement;
}

export function Page({ children }: PageProps) {
    return <main className="page">{children}</main>;
}
