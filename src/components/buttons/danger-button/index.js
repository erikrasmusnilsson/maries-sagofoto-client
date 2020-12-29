import styles from './index.module.css';

const button = ({ content, onclick, dark }) => {
    const clicked = (event) => {
        event.preventDefault();
        onclick();
    }

    return (
        <div className={ styles.Wrapper }>
            <button className={ styles.Button } onClick={ (e) => clicked(e) }>{ content }</button>
        </div>
    );
};

export { button as DangerButton };