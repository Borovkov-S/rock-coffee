import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Form } from "./components";

export function FormBlock(): ReactElement {
    return (
        <section className="form-block">
            <div className="form-block-inner">
                <p className="form-block-text">
                    Подробнее о том, как с нами связаться можно узнать
                </p>
                <Link to="/contacts" className="form-block-link">
                    Здесь
                </Link>
                <p className="form-block-text">
                    Или заполните форму ниже и мы сами с вами свяжемся
                </p>
                <Form />
            </div>
        </section>
    );
}
