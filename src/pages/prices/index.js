import styles from './index.module.css';

const prices = () => {
    return (
        <div className={ styles.Wrapper }>
            <div className={ styles.Header }>
                <div className={ styles.HeaderContent }>
                    <h2>Priser</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    );
};

export { prices as Prices };