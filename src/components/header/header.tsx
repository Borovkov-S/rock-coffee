import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.module.scss";
import type { ReactElement } from "react";

export function Header(): ReactElement {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header__logo" />
            <div className="header__nav">
                <Link to={"/"} className="header__nav-link">
                    Главная
                </Link>
                <Link to={"/about-school"} className="header__nav-link">
                    О нас
                </Link>
                <Link to={"/courses"} className="header__nav-link">
                    Направления
                </Link>
                <Link to={"/teachers"} className="header__nav-link">
                    Преподаватели
                </Link>
                <Link to={"/prices"} className="header__nav-link">
                    Цены
                </Link>
                <Link to={"/contacts"} className="header__nav-link">
                    Контакты
                </Link>
            </div>
        </header>
    );
}
