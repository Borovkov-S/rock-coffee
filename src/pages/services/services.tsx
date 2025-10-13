import type { ReactElement } from "react";
import { ServiceCard } from "./components";
import { SERVICES_DATA } from "../../SERVICES_DATA";
import { Title } from "../../components";

export function Services(): ReactElement {
    const oneTimeSubscriptionData = SERVICES_DATA.oneTimeSubscription;
    const blueRoomData = SERVICES_DATA.blueRoom;
    const greenRoomData = SERVICES_DATA.greenRoom;
    return (
        <div className="services">
            <div className="services-inner">
                <Title>Наши услуги</Title>
                <ul className="services-list">
                    <ServiceCard
                        image={oneTimeSubscriptionData.image}
                        price={oneTimeSubscriptionData.price}
                        title={oneTimeSubscriptionData.title}
                        description={oneTimeSubscriptionData.description}
                    />
                    <ServiceCard
                        image={blueRoomData.image}
                        price={blueRoomData.price}
                        title={blueRoomData.title}
                        description={blueRoomData.description}
                    />
                    <ServiceCard
                        image={greenRoomData.image}
                        price={greenRoomData.price}
                        title={greenRoomData.title}
                        description={greenRoomData.description}
                    />
                </ul>
            </div>
        </div>
    );
}
