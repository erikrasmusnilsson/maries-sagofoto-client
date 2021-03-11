import styles from './index.module.css';
import { useHistory } from 'react-router-dom';

const Logotype = () => {
    const history = useHistory();

    const onClick = () => history.push("/")

    return <img onClick={ onClick } alt='logotype' className={ styles.Logotype } src={`${process.env.PUBLIC_URL}/images/logotype.png`} />
};

export { Logotype };