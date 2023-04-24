import styles from './Button.module.scss';

function Button({title, action}) {
    return ( 
        <button onClick={action} className={styles.button}>{title}</button>
     );
}

export default Button;