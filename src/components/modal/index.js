import styles from './index.module.css';

import { Backdrop } from '../backdrop';

const Modal = ({ show, onclose, children }) => {
    const classes = [ styles.Content, show ? styles.Show : styles.Hide ];

    return (
        <div className={ styles.Wrapper }>
            <div className={ classes.join(' ') }>
                { children }
            </div>
            <Backdrop show={ show } onclick={ onclose } /> 
        </div>
    );
};

export { Modal };