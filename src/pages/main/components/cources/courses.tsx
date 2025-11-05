import type { ReactElement } from "react";
import { Title } from "../../../../components";
import vocalTeacher from '../../../../assets/images/teachers/vocal-piano-teacher.png'
import drumsTeacher from '../../../../assets/images/teachers/drums-teacher.jpg'
import guitarTeacher from '../../../../assets/images/teachers/guitar-teacher.png'
import trumpetTeacher from '../../../../assets/images/teachers/trumpet-teacher.jpg'

export function Cources(): ReactElement {
    return (
        <section className="cources">
            <div className="cources-inner">
                <Title>Окунись в мир музыки с профессионалами</Title>
                <ul className="cources-list">
                    <li className="cources-item">
                        <figure>
                            <img src={vocalTeacher} alt="vocal-teacher" className="cources-image" />
                            <figcaption>Вокал, фортепиано</figcaption>
                        </figure>
                    </li>
                    <li className="cources-item">
                        <figure>
                            <img src={drumsTeacher} alt="drums-teacher" className="cources-image" />
                            <figcaption>Барабаны</figcaption>
                        </figure>
                    </li>
                    <li className="cources-item">
                        <figure>
                            <img src={guitarTeacher} alt="guitar-teacher" className="cources-image" />
                            <figcaption>Гитара</figcaption>
                        </figure>
                    </li>
                    <li className="cources-item">
                        <figure>
                            <img src={trumpetTeacher} alt="trumpet-teacher" className="cources-image" />
                            <figcaption>Труба</figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>
    );
}
