import styles from './EmptyList.module.css';

import ClipboardIcon from '../assets/clipboard.svg';
export function EmptyList() {
    return (
        <div className={ styles.content }>
            <img src={ClipboardIcon} alt="clipboard icon" />
            <div className={ styles.boldText }>Você ainda não tem tarefas cadastradas</div>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}