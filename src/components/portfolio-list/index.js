import { useState, useEffect } from 'react';
import styles from './index.module.css';
import axios from 'axios';

import { Card } from '../../components/card';
import { Modal } from '../../components/modal';
import { DangerButton } from '../../components/buttons/danger-button';

const PortfolioList = ({ photos, ondelete }) => {
    const [selectedPhoto, setSelectedPhoto] = useState('');
    const [showModal, setShowModal] = useState(false);

    const deleteSelectedPhoto = async () => {
        await axios.delete(`/api/portfolio/${selectedPhoto}`, { withCredentials: true });
        closeModal();
        ondelete(selectedPhoto);
    }

    const selectPhoto = (photo) => {
        setSelectedPhoto(photo);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const portfolio = photos.map(photo => {
        return (
            <Card key={ photo }>
                <div className={ styles.Photo } style={{ background: `url(${axios.defaults.baseURL}/portfolio/${photo})` }}></div>
                <DangerButton content='Ta bort' onclick={ () => selectPhoto(photo) } />
            </Card>
        );
    });

    return (
        <div className={ styles.Wrapper }>
            <Modal onclose={ closeModal } show={ showModal }>
                <h2>Är du säker på att du vill ta bort fotot?</h2>
                <DangerButton content='Ja, ta bort det' onclick={ deleteSelectedPhoto } />
            </Modal>
            <div className={ styles.Grid }>
                { portfolio }
            </div>
        </div>
    );
};

export { PortfolioList };