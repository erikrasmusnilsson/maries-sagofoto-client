import styles from './index.module.css';

const loggedOutControls = ({ onlogin }) => {
    const loginClicked = (event) => {
        event.preventDefault();
        onlogin();
    }

    return (
        <div className={ styles.Wrapper }>
            <i className={["fas fa-user", styles.Icon].join(' ')}></i>
            <a href='' onClick={ e => loginClicked(e) }>Logga in</a>    
        </div>
    );
};

export { loggedOutControls as LoggedOutControls };