import s from "./Developer.module.scss";

export const Developer = () => (
  <div>
    <ul className={s.list}>
      <li className={s.item}>
        Designer:
        <a
          className={s.link}
          target="_blank"
          href="https://t.me/Mrshmallowww">
          Anastasia Ilina
        </a>
      </li>
      <li className={s.item}>
        Developer:
        <a
          className={s.link}
          target="_blank"
          href="#">
          Max Pog
        </a>
      </li>
    </ul>
  </div>
);
