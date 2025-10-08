import type { ReactElement } from "react";
import "./content-top.module.scss";

export function ContentTop(): ReactElement {
    return (
        <div className="content-top">
            <div className="content-top__title">
                <p className="content-top__title-top">ROCK</p>
                <p className="content-top__title-bottom">& coffee</p>
            </div>
            <div className="content-top__slogan">
                <p className="content-top__slogan-top">Поставь жизнь на паузу,</p>
                <p className="content-top__slogan-bottom">а мы добавим музыки!</p>
            </div>
        </div>
    );
}
