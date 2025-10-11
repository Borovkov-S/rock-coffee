import type { ReactElement } from "react";
import { WhyUs } from "./components";
import { Title } from "../../components";

export function AboutSchool(): ReactElement {
    return (
        <div className="about-school">
            <div className="about-school-inner">
                <Title>Так вот...</Title>
                <p className="about-school__history">
                    Наша история началась в 2024 году, и мы уже пишем ее новыми
                    ритмами. Мы — команда молодых музыкантов-профессионалов,
                    которые знают, с чего начинается большой путь: с
                    качественного инструмента, увлеченного наставника и своего
                    угла для репетиций. Поэтому мы создали не просто школу, а
                    творческий хаб. У нас вы получите сильные знания, найдете
                    единомышленников и всегда будете иметь доступ к идеальному
                    пространству для звука — и для уроков, и для ваших
                    собственных репетиций. Присоединяйтесь к нам. Давайте
                    играть!
                </p>
                <WhyUs />
                <ul className="about-us__gallery"></ul>
            </div>
        </div>
    );
}
