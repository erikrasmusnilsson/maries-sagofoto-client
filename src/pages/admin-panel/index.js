import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styles from './index.module.css';
import axios from 'axios';

import { PortfolioUpload } from '../../components/portfolio-upload';
import { PortfolioList } from '../../components/portfolio-list';
import { DiscreteButton } from '../../components/buttons/discrete-button';
import { requireLogin } from '../../hoc/require-login';

const AdminPanel = ({ user }) => {
    const [portfolioPage, setPortfolioPage] = useState(0);
    const [portfolioPhotos, setPortfolioPhotos] = useState([]);
    const history = useHistory();

    const fetchPortfolio = async () => {
        const response = await axios.get(`/api/portfolio?page=${portfolioPage}`);
        setPortfolioPhotos(response.data);
    };

    useEffect(() => {
        fetchPortfolio();
    }, [portfolioPage]);

    useEffect(() => {
        if (!user) history.push('/');
    }, [user]);

    const nextPortfolioPage = () => {
        setPortfolioPage(portfolioPage + 1);
    }

    const previousPortfolioPage = () => {
        const newPortfolioPage = portfolioPage - 1 >= 0 ? portfolioPage - 1 : portfolioPage;
        setPortfolioPage(newPortfolioPage);
    }

    return (
        <div>
            <div className={ styles.Header }>
                <div className={ styles.HeaderContent }>
                    <h2>Inloggad som { user.username }</h2>
                    <p>Här kan du ladda upp bilder till portfolion med mer funktioner som kommer snart.</p>
                </div>
            </div>
            <div className={ styles.Content }>
                <PortfolioUpload onupload={ fetchPortfolio } />
                <PortfolioList page={ portfolioPage } photos={ portfolioPhotos } ondelete={ fetchPortfolio } />
                <div className={ styles.PortfolioNavigation }>
                    <DiscreteButton onclick={ previousPortfolioPage } content={ <i className="fas fa-arrow-left"></i> } />
                    <DiscreteButton onclick={ nextPortfolioPage } content={ <i className="fas fa-arrow-right"></i> } />
                </div>
                <div className={ styles.MegaButtons }>
                    <Link to='/add-admin'><i class="fas fa-user-plus"></i></Link>
                    <Link to='/change-password'><i className="fas fa-user-cog"></i></Link>
                </div>
            </div>
        </div>
    );
};

const component = requireLogin(AdminPanel);

export  { component as AdminPanel };