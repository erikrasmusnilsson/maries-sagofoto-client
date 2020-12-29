import styles from './index.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const loggedInControls = ({ user, logout }) => {

    const logoutClicked = async (event) => {
        event.preventDefault();

        await axios.post('/api/admins/logout', {}, { withCredentials: true });
        logout();
    }

    return (
        <div className={ styles.Wrapper }>
            <div className={ styles.User }>
                <Link to='/admin-panel'>{ user.username }</Link>
                <i className={["fas fa-user", styles.Icon].join(' ')}></i>
            </div>

            <div className={ styles.Logout }>
                <a onClick={ e => logoutClicked(e) } href='#'>Logga ut</a>
                <i className="fas fa-sign-out-alt"></i>
            </div>    
        </div>
    );
};

export { loggedInControls as LoggedInControls };