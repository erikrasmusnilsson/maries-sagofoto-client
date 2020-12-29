import { useState } from 'react';
import axios from 'axios';

import { TextInput } from '../text-input';
import { Modal } from '../modal';
import { SimpleButton } from '../buttons/basic-button';

const LoginModal = ({ show, onclose, login }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginClicked = async () => {
        const response = await axios.post('/api/admins/login', { username, password }, { withCredentials: true });
        login(response.data);
        onclose();
    }

    return (
        <Modal show={ show } onclose={ onclose }>
            <h2>Logga in</h2>
            <TextInput name='username'
                placeholder='Username'
                value={ username }
                onchange={ setUsername } />
            <TextInput name='password'
                placeholder='Password'
                value={ password }
                onchange={ setPassword }
                type='password' />
            <SimpleButton dark content='Logga in' onclick={ loginClicked } />
        </Modal>
    );  
};

export { LoginModal };