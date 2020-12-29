import styles from './index.module.css';

const Card = ({ children }) => {
    return (
        <div className={ styles.Card }>
            { children }
        </div>
    )
}

export { Card };