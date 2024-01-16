import s from "./Developers.module.scss";

export const Developers = () => (
    <ul className={s.developers}>
        <li className={s.item}>
            Designer:&nbsp;
            <a
                className={s.link}
                href="https://t.me/Mrs"
                target="_blank"
                rel="noreferrer">
                Anastasia Ilina
            </a>
        </li>
        <li className={s.item}>
            Developer:&nbsp;
            <a
                className={s.link}
                href="https://t.me/Max"
                target="_blank"
                rel="noreferrer">
                Max Pog
            </a>
        </li>
    </ul>
);
