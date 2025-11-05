import type { ReactElement } from "react";
import vkIcon from "../../assets/images/vk-icon.svg";
import tgIcon from "../../assets/images/tg-icon.svg";
import wuIcon from "../../assets/images/wu-icon.svg";
import { Title } from "../../components";

export function Contacts(): ReactElement {
    return (
        <div className="contacts">
            <div className="contacts-inner">
                <div className="contacts-info">
                    <Title>Свяжитесь с нами!</Title>
                    <p>по номеру телефона:</p>
                    <a href="tel:+7 (927) 895-16-65" className="contacts-phone">
                        +7 (927) 895-16-65 - Максим
                    </a>
                    <p>Или через соцсети:</p>
                    <div className="contacts-socials">
                        <a href="https://vk.com/rockcoffeetlt" target="_blank">
                            <img src={vkIcon} alt="vk-icon" />
                        </a>
                        <a href="https://t.me/makezisme">
                            <img src={tgIcon} alt="tg-icon" />
                        </a>
                        <a href="https://t.me/makezisme">
                            <img src={wuIcon} alt="what+
                            +-icon" />
                        </a>
                    </div>
                </div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A1f416d741a95cc1832c65d3bdb7fc44b7f4f0df2a3f5f1b8a7f48d4f04a4dd5a&amp;source=constructor"
                    width="100%"
                    height="500px"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
}
