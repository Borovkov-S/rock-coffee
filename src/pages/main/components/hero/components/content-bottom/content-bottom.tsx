import type { ReactElement } from "react";
import "./content-bottom.module.scss";

export function ContentBottom(): ReactElement {
    return (
        <div className="content-bottom">
                <p className="content-bottom--left">Обучайся</p>
                <p className="content-bottom--center">Репетируй</p>
                <p className="content-bottom--right">Чувствуй</p>
        </div>
    );
}
