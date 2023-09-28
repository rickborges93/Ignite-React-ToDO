import styles from './Header.module.css';

import LogoIcon from '../assets/todo-logo.svg';

export function Header() {
    return (
        <header className={ styles.header }>
            <img src={LogoIcon} alt="logotipo" />
        </header>
    )
}