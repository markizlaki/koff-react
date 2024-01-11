import { Copyright } from "../../components/Copyright/Copyright.jsx";
import { Logo } from "../../components/Logo/Logo.jsx";
import { Phone } from "../../components/Phone/Phone.jsx";
import { Contacts } from "../../components/Contacts/Contacts.jsx";
import { Container } from "../Container/Container.jsx";
import s from "./Footer.module.scss";
import { Developer } from "./../../components/Developer/Developer.jsx";

export const Footer = () => (
  <footer className={s.footer}>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.phone}>
        <Phone />
      </div>
      <div className={s.contacts}>
        <Contacts />
      </div>
      <div className={s.developer}>
        <Developer />
      </div>
      <div className={s.copyright}>
        <Copyright />
      </div>
    </Container>
  </footer>
);
