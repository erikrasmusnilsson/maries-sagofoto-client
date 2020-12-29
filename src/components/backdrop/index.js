import styles from './index.module.css';

const backdrop = ({ show, onclick }) => {
    return (
        <div onClick={ onclick } className={ [styles.Wrapper, show ? styles.Show : styles.Hide ].join(' ') }></div>
    );
};

export { backdrop as Backdrop };