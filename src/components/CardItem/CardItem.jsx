import { Container } from "../../views/Container/Container";
import s from "./CardItem.module.scss";

export const CardItem = ({ data }) => (
    <article className={s.card}>
        <Container className={s.container}>Диван</Container>
    </article>
);
