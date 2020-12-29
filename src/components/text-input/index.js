import styles from './index.module.css';

const textInput = ({ value, placeholder, onchange, type, name }) => {
    const inputType = type || 'text';
    return (
        <input type={ inputType }
            value={ value }
            placeholder={ placeholder }
            onChange={ e => onchange(e.target.value) }
            name={ name } />
    );
};

export { textInput as TextInput };