import type { ReactElement } from "react";
import type { Course } from "../../../types/course.interface";

export function CourseBlock(courseData: Course): ReactElement {
    return (
        <li className="course-block">
            <img
                src={courseData.image}
                alt="instrument"
                className="course-block__image"
            />
            <div className="course-block__info">
                <h3 className="course-block__info-title">{courseData.title}</h3>
                <p className="course-block__info-age">
                    Возраст: <b>{courseData.age}</b>
                </p>
                <p className="course-block__info-duration">
                    Количество занятий: <b>{courseData.duration}</b>
                </p>
                <p className="course-block__info-teacher">
                    Преподаватель: <b>{courseData.teacher}</b>
                </p>
                <p className="course-block__info-price">
                    Цена: <b>{courseData.price} ₽</b>
                </p>
                <p className="course-block__info-description">
                    {courseData.description}
                </p>
            </div>
        </li>
    );
}
