import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './index.module.css';
import { Logotype } from '../logotype';
import { Backdrop } from '../backdrop';

const Navigation = ({ routes }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const links = routes.map(route => {
        const current = location.pathname === route.path;
        return (
            <li className={ [styles.Link, current ? styles.CurrentRoute : null].join(' ') } key={route.path}>
                <Link to={ route.path }>{ route.name }</Link>
            </li>
        );
    });

    let navigationBar = [];

    for (let i = 0; i < links.length; i++) {
        if (i === links.length / 2) {
            navigationBar.push(
                <li key='logotype'>
                    <Logotype />
                </li>
            );
        }
        navigationBar.push(links[i]);
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={ styles.Wrapper }>
            <ul className={ styles.Desktop }>
                { navigationBar }
            </ul>
            <div className={ styles.Mobile }>
                <a onClick={ toggleMenu } className={ styles.Burger }><i className="fas fa-bars"></i></a>
                <Logotype />
                <div className={ [styles.MobileMenu, menuOpen ? styles.MobileMenuOpen : styles.MobileMenuClosed].join(' ') }>
                    <ul>
                        { links }
                    </ul>
                </div>
                <Backdrop show={ menuOpen } onclick={ toggleMenu } />
            </div>
        </div>
    );
};

export { Navigation as Navigation };