import type { ReactElement } from "react"
import './app-column.module.scss'

interface AppColumnProps {
    children: ReactElement[]
}

export function AppColumn ({children}: AppColumnProps) {
    return (
        <div className="app-column">
            {children}
        </div>
    )
}