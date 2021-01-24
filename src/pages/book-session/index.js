import { useState } from 'react';
import styles from './index.module.css';
import { TextInput } from '../../components/text-input';
import { Textarea } from '../../components/textarea';
import { SimpleButton } from '../../components/buttons/basic-button';
import { Modal } from '../../components/modal';
import axios from 'axios';

const BookSession = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendBooking = async () => {
        if (firstName.trim() === "" || lastName.trim() === "") {
            setModalTitle("Fel vid för eller efternamn");
            setModalMessage("Vänligen inkludera ditt för och efternamn.");
            setShowModal(true);
            return;
        }
        if (email.trim() === "") {
            setModalTitle("Fel vid emailaddress.");
            setModalMessage("Vänligen inkludera din emailaddress.");
            setShowModal(true);
            return;
        }
        if (message.trim() === "") {
            setModalTitle("Fel vid meddelande.")
            setModalMessage("Vänligen inkludera ett meddelande.");
            setShowModal(true);
            return;
        }

        const response = await axios.post('/api/contact', {
            firstName,
            lastName,
            email,
            message
        });

        if (response.status !== 200) {
            setModalTitle("Oops...")
            setModalMessage(response.data);
            setShowModal(true);
        } else {
            setModalTitle("Tack!")
            setModalMessage("Tack för ditt meddelande, vi återkommer via email så snart vi kan!")
            setShowModal(true);
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
        }
    }
    
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
                <SimpleButton content="Skicka" dark onclick={ sendBooking }/>
            </div>
            <Modal show={ showModal } onclose={ e => setShowModal(false) }>
                <h2>{ modalTitle }</h2>
                <p>{ modalMessage }</p>
            </Modal>
        </div>
    )
}

export { BookSession };