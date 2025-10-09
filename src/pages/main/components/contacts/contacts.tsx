import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Form } from "./components";

export function Reviews(): ReactElement {
    return (
        <section className="contacts">
            <div className="contacts-inner">
                <p className="contacts-text">
                    Подробнее о том, как с нами связаться можно узнать
                </p>
                <Link to="/contacts" className="contacts-link">
                    Здесь
                </Link>
                <p className="contacts-text">
                    Или заполните форму ниже и мы сами с вами свяжемся
                </p>
                <Form />
            </div>
        </section>
    );
}
