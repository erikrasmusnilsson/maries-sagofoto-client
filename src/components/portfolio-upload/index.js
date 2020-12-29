import { useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';

import { FileInput } from '../file-input';
import { DiscreteButton } from '../buttons/discrete-button';

const PortfolioUpload = ({ onupload }) => {
    const [file, setFile] = useState('');

    const uploadPhoto = async () => {
        const data = new FormData();
        data.append('photo', file);

        await axios.post('/api/portfolio', data, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        onupload();
        setFile(null);
    };

    return (
        <div className={ styles.Form }>
            <FileInput onchange={ setFile } active={ !!file } onsubmit={ uploadPhoto } />
        </div>
    );
};

export { PortfolioUpload };