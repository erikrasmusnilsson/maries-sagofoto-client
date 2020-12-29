import { useState, useEffect } from 'react';
import styles from './index.module.css';
import axios from 'axios';

import { SimpleButton } from '../../components/buttons/basic-button';
import { Backdrop } from '../../components/backdrop';
import { ScrollFadeIn } from '../../components/scroll-fade-in';

const Portfolio = () => {
    const [photos, setPhotos] = useState([]);
    const [magnified, setMagnified] = useState();

    const fetchPortfolio = async () => {
        const response = await axios.get('/api/portfolio');
        setPhotos(response.data);
    }

    useEffect(() => fetchPortfolio(), []);

    const focusedPhoto = magnified ? (
        <div className={ styles.Magnified }>
            <div style={{ background: `url(${axios.defaults.baseURL}/static/portfolio/${magnified})` }}></div>
        </div>
    ) : null;

    const magnify = (photo) => {
        setMagnified(photo);
    }

    const demagnify = () => {
        setMagnified(null);
    }

    const portfolio = photos.map(photo => {
        return (
            <ScrollFadeIn direction='to-top' offset={0}>
                <div className={ styles.Column } key={ photo }>
                    <img src={`${axios.defaults.baseURL}/static/portfolio/${photo}`} />
                    <div className={ styles.Overlay }>
                        <SimpleButton content='Förstora' onclick={() => magnify(photo)} />
                    </div>
                </div>
            </ScrollFadeIn>
        );
    });

    return (
        <div className={ styles.Wrapper }>
            { focusedPhoto }
            <div className={ styles.Grid }>
                { portfolio }
            </div>
            <Backdrop show={magnified} onclick={ demagnify } />
        </div>
    );
};

export { Portfolio };