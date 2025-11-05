import type { ReactElement } from "react";
import imageIndividual from '../../../../assets/images/main/individual.jpg'
import imageConcert from '../../../../assets/images/main/Concert.jpg'
import imageCollective from '../../../../assets/images/main/Collective.jpg'
import imageLeisure from '../../../../assets/images/main/Leisure.jpg'
import { Title } from "../../../../components";

export function Advantages(): ReactElement {
    return (
        <section className="advantages">
            <div className="advantages-inner">
                <Title>У нас вы сможете</Title>
                <div className="advantages-block">
                    <p>Получить индивидуальные занятия с педагогом</p>
                    <img src={imageIndividual} alt="individual-lesson-image" className="advantages__individual-image" />
                </div>
                <div className="advantages-block">
                    <img src={imageConcert} alt="concert-image" className="advantages__concert-image" />
                    <p className="advantages--right-text">
                        Быть зрителем или даже участником концертов и
                        выступлений
                    </p>
                </div>
                <div className="advantages-block">
                    <p>
                        Ощутить всю заботу, поддержку и внимание наших
                        замечательных преподавателей
                    </p>
                    <img src={imageCollective} alt="group-lesson-image" className="advantages__collective-image" />
                </div>
                <div className="advantages-block">
                    <img src={imageLeisure} alt="chill-image" className="advantages__leisure-image" />
                    <p className="advantages--right-text">
                        Просто приятно провести время в кругу единомышленников
                    </p>
                </div>
            </div>
        </section>
    );
}
