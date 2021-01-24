import styles from './index.module.css';

const footer = () => {
    return (
        <div className={ styles.Wrapper }>
            <div className={ styles.ContactInformation }>
                <h2>Kontakt</h2>
                <ul>
                    <li><i className="fas fa-envelope"></i> kontakt@mariessagofoto.se</li>
                    <li><i className="fas fa-phone"></i> 073 505 01 82</li>
                    <li><i className="fas fa-phone"></i> 070 822 76 42</li>
                    <li><i className="fas fa-location-arrow"></i> Nordvära 20, 432 65, Väröbacka</li>
                </ul>
            </div>
            <div className={ styles.Copyright }>
                <p>Copyright 2020, all rights reserved.</p>
            </div>
        </div>
    );
};

export { footer as Footer };