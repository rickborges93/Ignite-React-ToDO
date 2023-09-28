import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

export function Task() {
    return (
        <div className={ styles.taskContent }>            
            <label className={ styles.container }>                
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                <input type='checkbox' />
                <span className={ styles.checkmark }></span>
            </label>
            <Trash size={16} />
        </div>
    )
}