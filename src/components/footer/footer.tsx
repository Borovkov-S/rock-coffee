import type { ReactElement } from "react";

export function Footer(): ReactElement {
    return (
        <footer className="footer">
            <p className="footer-address">г. Тольятти, ул. Южное шоссе, 30</p>
            <div className="footer-copyright">
                &copy; 2025 Rock&Coffee | Все права защищены
            </div>
        </footer>
    );
}
