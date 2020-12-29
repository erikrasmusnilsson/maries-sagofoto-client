import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.css';
import axios from 'axios';

import { TextInput } from '../../components/text-input';
import { SimpleButton } from '../../components/buttons/basic-button';
import { requireLogin } from '../../hoc/require-login';

const AddAdmin = ({ user }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();

    const auth = () => {
        if (!user.id) {
            history.push('/');
        }
    };

    useEffect(auth, []);

    const createUser = async () => {
        if (!validateInput()) {
            alert('Viss input var inkorrekt, kontrollera att lösenorden är samma.');
        } else {
            await axios.post('/api/admins', { 
                username,
                password
            }, { withCredentials: true });
        }
    }

    const validateInput = () => {
        const validUsername = username.trim() !== '';
        const validPassword = password.trim() !== '';
        const passwordsMatches = password.trim() === confirmPassword.trim();

        return validUsername && validPassword && passwordsMatches;
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
                <TextInput value={ username } onchange={ setUsername } placeholder='Användarnamn' />
                <TextInput type='password' value={ password } onchange={ setPassword } placeholder='Lösenord' />
                <TextInput type='password' value={ confirmPassword } onchange={ setConfirmPassword } placeholder='Upprepa lösenord' />
                <SimpleButton dark content='Skapa användare' onclick={ createUser } />
            </div>
        </div>
    );
};

const panel = requireLogin(AddAdmin);

export { panel as AddAdmin };