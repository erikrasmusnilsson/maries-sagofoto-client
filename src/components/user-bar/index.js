import styles from './index.module.css';

import { LoggedInControls } from './logged-in-controls';
import { LoggedOutControls } from './logged-out-controls';

const userBar = ({ onlogin, logout, user }) => {
    let controls;

    if (user) {
        controls = <LoggedInControls logout={ logout } user={ user } />
    } else {
        controls = <LoggedOutControls onlogin={ onlogin } />
    }

    return (
        <div className={ styles.Wrapper }>
            <div className={ styles.Controls }>
                { controls }
            </div>
        </div>
    );
};

export { userBar as UserBar };