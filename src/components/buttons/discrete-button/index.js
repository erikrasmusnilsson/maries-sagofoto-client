import styles from './index.module.css';

const button = ({ content, onclick }) => {
    return (
        <div className={ styles.Wrapper }>
            <button className={ styles.Button } onClick={ (e) => onclick(e) }>{ content }</button>
        </div>
    );
};

export { button as DiscreteButton };