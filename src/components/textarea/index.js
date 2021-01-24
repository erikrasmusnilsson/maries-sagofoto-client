import styles from './index.module.css';

const Textarea = ({ value, placeholder, onchange }) => {
    return (
        <textarea 
            value={ value } 
            placeholder={ placeholder } 
            onChange={ e => onchange(e.target.value) }></textarea>
    )
}

export { Textarea };