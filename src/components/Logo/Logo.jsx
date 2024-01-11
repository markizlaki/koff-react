import s from './Logo.module.scss';

export const Logo = () => {
    return (
        <a className={s.logo}>
            <img src="/img/logo.svg"></img>
        </a>
    );
};

export default Logo;