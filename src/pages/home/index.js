import { useHistory } from 'react-router-dom';
import styles from './index.module.css';
import { InformationPanel } from '../../components/information-panel';
import { EmployeeIntro } from '../../components/employee-intro';
import { SimpleButton } from '../../components/buttons/basic-button';
import { ScrollFadeIn } from '../../components/scroll-fade-in';

const Home = () => {
    const history = useHistory();

    const navigateToPortfolio = () => {
        history.push("/portfolio")
    }

    return (
        <div className={ styles.Wrapper }>
            <div className={ styles.HeaderImage } style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/header.png)` }}></div>
            <div className={ styles.Introduction }>
                <InformationPanel title='Sagolika fotografier i Halland' content={`
                Vi erbjuder dig en förstklassig upplevelse och gör allt för att dokumentera dina relationer, minnen, dina barn, dig och förvandla det till vackra konstverk att hänga på väggen, ställa i hyllan eller ge bort som den vackraste gåvan till någon som betyder otroligt mycket för dig.
                Vi på Maries Sagofoto har val att specialisera oss på Magiska sagobilder och vill på ett professionellt och lekfullt sätt fånga ögonblicket som gör bilden till något alldeles extra i ditt hem.
                Efter att du har bokat din fotografering här på hemsidan så kommer vi överens om tid och plats för en Designkonsultation då vi träffas och planerar allt inför fotograferingen. Varje fotosession är helt anpassad efter just dina tankar, idéer och önskemål.
                Vi vill att du skall titta på dina fotografier och minnas din fotografering med stor glädje.
                `} />
                <div className={ styles.IntroductionImage } style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/introduction.png)` }}></div>
            </div>
            <div className={ styles.EmployeeIntros }>
                <ScrollFadeIn offset={-200} direction='to-right'>
                    <EmployeeIntro 
                        name='Julia Marie Nilsson' 
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve.' 
                        image='julia_nilsson.png' />
                </ScrollFadeIn>
                <ScrollFadeIn offset={0} direction='to-left'>
                    <EmployeeIntro 
                        reversed 
                        name='Susanne Marie Lindahl Hjerpe' 
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve.' 
                        image='susanne_lindahl_hjerpe.png' />
                </ScrollFadeIn>
            </div>
            <div className={ styles.ViewPortfolio }>
                <ScrollFadeIn offset={0} direction='to-top'>
                    <SimpleButton content='Se portfolion' dark onclick={ navigateToPortfolio }/>
                </ScrollFadeIn>
            </div>
        </div>
    );
};

export { Home };