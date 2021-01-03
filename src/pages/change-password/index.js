import { useState } from 'react'; 
import axios from 'axios';

import styles from './index.module.css';
import { requireLogin } from '../../hoc/require-login';
import { TextInput } from '../../components/text-input';
import { SimpleButton } from '../../components/buttons/basic-button';
import { Modal } from '../../components/modal';

const ChangePassword = ({ user }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const updatePassword = async () => {
        if (isValidInput()) {
            await axios.put('/api/admins', {
                password: newPassword
            }, {
                withCredentials: true
            });
        } else {
            alert('Oops! Antingen matchade inte dina lösenord eller så är det för kort.');
        }
    };

    const isValidInput = () => {
        const isValidPassword = newPassword.trim().length >= 5;
        const passwordsMatch = newPassword === confirmNewPassword;

        return isValidPassword && passwordsMatch;
    };

    return (
        <div>
            <div className={ styles.Header }>
                <div className={ styles.HeaderContent }>
                    <h2>Inloggad som { user.username }</h2>
                    <p>
                        Här kan uppdatera ditt lösenord. Lösenordet måste vara åtminstone sex karaktärer långt. Efter att du har ändrat lösenordet använder du det nya
                        för att logga in nästa gång.
                    </p>
                </div>
            </div>
            <div className={ styles.Content }>
                <TextInput type='password' value={ newPassword } onchange={ setNewPassword } placeholder='Nytt lösenord' />
                <TextInput type='password' value={ confirmNewPassword } onchange={ setConfirmNewPassword } placeholder='Upprepa lösenord' />
                <SimpleButton dark content='Uppdatera' onclick={ updatePassword } />
            </div>
        </div>
    );
}

const component = requireLogin(ChangePassword);

export { component as ChangePassword };