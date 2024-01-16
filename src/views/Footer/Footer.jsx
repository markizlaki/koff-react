import { Container } from "../Container/Container.jsx";
import s from "./Footer.module.scss";
import { Logo } from "./../../components/Logo/Logo";
import { Contacts } from "../../components/Contacts/Contacts.jsx";
import { Developers } from "./../../components/Developers/Developers";

export const Footer = () => (
    <footer className={s.footer}>
        <Container className={s.container}>
            <div className={s.logo}>
                <Logo />
            </div>

            <div className={s.contacts}>
                <Contacts />
            </div>

            <div className={s.developers}>
                <Developers />
            </div>

            <p className={s.copyright}>© Koff, 2024</p>
        </Container>
    </footer>
);
