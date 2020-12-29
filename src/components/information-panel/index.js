import styles from './index.module.css';

const panel = ({ title, content }) => {
    return (
        <div className={ styles.Wrapper }>
            <h2 className={ styles.Header }>{ title }</h2>
            <p className={ styles.Content }>{ content }</p>
        </div>
    )
};

export { panel as InformationPanel };