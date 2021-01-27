import styles from './index.module.css';
import { PortfolioGrid } from '../../components/portfolio-grid';

const Portfolio = () => {
    return (
        <div className={ styles.Wrapper }>
            <div className={ styles.Header }>
                <div className={ styles.HeaderContent }>
                    <div className={ styles.Introduction }>
                        <h2>Portfolio</h2>
                        <h3>Din fotograf i Varberg/Falkenberg</h3>
                        <p>
                        Vi älskar att med hjälp av kameran skapa magiska bilder från sagans värld.
                        Det är bara fantasin som sätter gränser brukar man säga, men här finns nog inga gränser.
                        Vi gör allt för att få till de där konstverken på dig, en älskad vän, släkting, barn, hund som ni önskar.
                        Välkomna att låta er inspireras i vårat galleri av bilder.
                        </p>
                    </div>
                </div>
            </div>
            <PortfolioGrid />
        </div>
    );
};

export { Portfolio };