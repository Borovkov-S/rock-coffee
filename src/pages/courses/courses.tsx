import type { ReactElement } from "react";
import { Title } from "../../components";
import { CourseBlock } from "./components";
import { SERVICES_DATA } from "../../SERVICES_DATA.ts";

export function Courses(): ReactElement {
    const guitarCourseData = SERVICES_DATA.guitar;
    const drumsCourseData = SERVICES_DATA.drums;
    const vocalCourseData = SERVICES_DATA.vocal;
    const pianoCourseData = SERVICES_DATA.piano;
    const trumpetCourseData = SERVICES_DATA.trumpet;
    return (
        <div className="courses">
            <div className="courses-inner">
                <Title>Направления</Title>
                <ul className="courses__list">
                    <CourseBlock
                        title={guitarCourseData.title}
                        image={guitarCourseData.image}
                        age={guitarCourseData.age}
                        duration={guitarCourseData.duration}
                        teacher={guitarCourseData.teacher}
                        price={guitarCourseData.price}
                        description={guitarCourseData.description}
                    />
                    <CourseBlock
                        title={drumsCourseData.title}
                        image={drumsCourseData.image}
                        age={drumsCourseData.age}
                        duration={drumsCourseData.duration}
                        teacher={drumsCourseData.teacher}
                        price={drumsCourseData.price}
                        description={drumsCourseData.description}
                    />
                    <CourseBlock
                        title={vocalCourseData.title}
                        image={vocalCourseData.image}
                        age={vocalCourseData.age}
                        duration={vocalCourseData.duration}
                        teacher={vocalCourseData.teacher}
                        price={vocalCourseData.price}
                        description={vocalCourseData.description}
                    />
                    <CourseBlock
                        title={pianoCourseData.title}
                        image={pianoCourseData.image}
                        age={pianoCourseData.age}
                        duration={pianoCourseData.duration}
                        teacher={pianoCourseData.teacher}
                        price={pianoCourseData.price}
                        description={pianoCourseData.description}
                    />
                    <CourseBlock
                        title={trumpetCourseData.title}
                        image={trumpetCourseData.image}
                        age={trumpetCourseData.age}
                        duration={trumpetCourseData.duration}
                        teacher={trumpetCourseData.teacher}
                        price={trumpetCourseData.price}
                        description={trumpetCourseData.description}
                    />
                </ul>
            </div>
        </div>
    );
}
