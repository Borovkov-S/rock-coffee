import type { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Reviews (): ReactElement {
    return (
        <div className="contacts">
            <div className="contacts-inner">
                <p className='contacts-text'>Подробнее о том, как с нами связаться можно узнать</p>
                <Link to='/contacts' className='contacts-link'>Здесь</Link>
            </div>
        </div>
    )
}