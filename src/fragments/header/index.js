import { useState } from 'react';

import { UserBar } from '../../components/user-bar';
import { Navigation } from '../../components/navigation';
import { LoginModal } from '../../components/login-modal';

const Header = ({ user, login, logout }) => {
    const [showLogin, setShowLogin] = useState(false);

    const routes = [
        { path: '/', name: 'Hem' },
        { path: '/portfolio', name: 'Portfolio' },
        { path: '/information', name: 'Information' },
        { path: '/boka-fotografering', name: 'Boka Fotografering' },
    ];

    const toggleLoginModal = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div>
            <UserBar user={ user } onlogin={ (e) => toggleLoginModal() } logout={ logout } />
            <Navigation routes={ routes } />
            <LoginModal login={ login } show={ showLogin } onclose={ (e) => toggleLoginModal() } />
        </div>
    );  
};

export { Header };