import { useState } from 'react';
import styles from './index.module.css';
import { TextInput } from '../../components/text-input';
import { Textarea } from '../../components/textarea';
import { SimpleButton } from '../../components/buttons/basic-button';

const BookSession = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div>
            <div className={ styles.Header }>
                <div className={ styles.HeaderContent }>
                    <h2>Boka Fotografering</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
            <div className={ styles.Content }>
                <div className={ styles.Row }>
                    <TextInput 
                        placeholder="Förnamn" 
                        value={ firstName }
                        onchange={ setFirstName } />
                    <TextInput 
                        placeholder="Efternamn" 
                        value={ lastName }
                        onchange={ setLastName } />
                </div>
                <TextInput 
                    placeholder="Email" 
                    value={ email }
                    onchange={ setEmail } 
                    type="email"/>
                <Textarea 
                    placeholder="Ett kort meddelande om vad du vill ha."
                    value={ message }
                    onchange={ setMessage } />
                <SimpleButton content="Skicka" dark/>
            </div>
        </div>
    )
}

export { BookSession };