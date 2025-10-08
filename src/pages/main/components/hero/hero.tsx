import type { ReactElement } from "react";
import { ContentBottom, ContentTop } from "./components";
import "./hero.module.scss";

export function Hero(): ReactElement {
    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero__content">
                    <ContentTop />
                    <ContentBottom />
                </div>
            </div>
        </section>
    );
}
