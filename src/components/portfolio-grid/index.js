import { useState, useEffect } from 'react';
import styles from './index.module.css';
import axios from 'axios';

import { SimpleButton } from '../buttons/basic-button';
import { Backdrop } from '../backdrop';
import { ScrollFadeIn } from '../scroll-fade-in';
import { Modal } from '../modal';

const PortfolioGrid = () => {
    const [photos, setPhotos] = useState([]);
    const [magnified, setMagnified] = useState('');

    const fetchPortfolio = async () => {
        const response = await axios.get('/api/portfolio');
        setPhotos(response.data);
    }

    useEffect(() => fetchPortfolio(), []);

    const focusedPhoto = magnified ? (
        <Modal show={ magnified } onclose={ () => demagnify() }>
            <div className={ styles.Magnified } style={{ background: `url(${axios.defaults.baseURL}/static/portfolio/${magnified})` }}></div>
        </Modal>
    ) : null;

    const magnify = (photo) => {
        setMagnified(photo);
    }

    const demagnify = () => {
        setMagnified('');
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
            <Modal show={ magnified } onclose={ demagnify }>
                <div className={ styles.Magnified } style={{ background: `url(${axios.defaults.baseURL}/static/portfolio/${magnified})` }}></div>
            </Modal>
            <div className={ styles.Grid }>
                { portfolio }
            </div>
            { /*<Backdrop show={magnified} onclick={ demagnify } /> */ }
        </div>
    );
};

export { PortfolioGrid };