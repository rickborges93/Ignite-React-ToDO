import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

interface TaskComponentProps {
    id: string;
    content: string;
    isChecked: boolean;
    handleRemoveTask: (id: string) => void;
    handleCheckTask: (id: string) => void;
}

export function Task({ id, content, isChecked, handleRemoveTask, handleCheckTask }: TaskComponentProps) {
    return (
        <div className={ styles.taskContent }>            
            <label className={ styles.container }>                
                { content }
                <input type='checkbox' defaultChecked={isChecked} onChange={() => handleCheckTask(id)} />
                <span className={ styles.checkmark }></span>
            </label>
            <div className={ styles.svgContainer }>
                <Trash size={16} onClick={() => handleRemoveTask(id)} />
            </div>
        </div>
    )
}