import styles from './index.module.css';

const employee = ({ image, name, description, reversed }) => {
    
    return (
        <div className={ [styles.Wrapper, reversed ? styles.Reversed : null].join(' ') }>
            <img alt={name} src={`${process.env.PUBLIC_URL}/images/${image}`} className={ styles.Image } />
            <div className={ styles.Information }>
                <h2 className={ styles.Name }>{ name }</h2>
                <p className={ styles.Description }>{ description }</p>
            </div>
        </div>
    );
};

export { employee as EmployeeIntro };