import styles from './index.module.css';

import { DiscreteButton } from '../buttons/discrete-button';

const FileInput = ({ placeholder, onchange, onsubmit, active }) => {
    const labelStyles = [styles.Label, active ? styles.ActiveLabel : null];
    const buttonStyles = [styles.Button, active ? styles.ActiveButton : null];

    return (
        <div className={ styles.Wrapper }>
            <label className={ labelStyles.join(' ') } htmlFor='file-input'>Välj en fil <i className="fas fa-upload"></i></label>
            <input id='file-input' className={ styles.Input }
                type='file'
                placeholder={ placeholder }
                onChange={ e => onchange(e.target.files[0]) } />
            <div className={ buttonStyles.join(' ') }>
                <DiscreteButton onclick={ onsubmit } content='Ladda upp' dark />
            </div>
        </div>
    );
};

export { FileInput };