import type { ReactElement } from "react";
import type { Service } from "../../../../types/service.interface";

export function ServiceCard (serviceData: Service): ReactElement {
    return (
        <li className="service-card">
            <img src={serviceData.image} alt="service-image" className="service-card__image" />
            <div className='service-card__info'>
                <p className="service-card__info-price"><b>{serviceData.price}</b></p>
                <p className="service-card__info-title"><b>{serviceData.title}</b></p>
                <p className="service-card__info-description">{serviceData.description}</p>
            </div>
        </li>
    )
}