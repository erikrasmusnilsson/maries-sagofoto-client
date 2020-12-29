import styles from './index.module.css';

const logotype = () => {
    return <img alt='logotype' className={ styles.Logotype } src={`${process.env.PUBLIC_URL}/images/logotype.png`} />
};

export { logotype as Logotype };