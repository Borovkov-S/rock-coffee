import type { ReactElement } from "react";

export function Form(): ReactElement {
    return (
        <form className="form" onSubmit={() => {}}>
            <input type="text" className="form__input" placeholder="Введите ваше имя"/>
            <input type="text" className="form__input" placeholder="Введите ваш номер телефона"/>
            <textarea className="form__input" placeholder="Ваш вопрос" />
            <button className="form__button" type='submit' >Отправить</button>
        </form>
    );
}
