import styles from './index.module.css';
import { InformationPanel } from '../../components/information-panel';
import { EmployeeIntro } from '../../components/employee-intro';
import { SimpleButton } from '../../components/buttons/basic-button';
import { ScrollFadeIn } from '../../components/scroll-fade-in';

const home = () => {
    return (
        <div className={ styles.Wrapper }>
            <div className={ styles.HeaderImage } style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/header.png)` }}></div>
            <div className={ styles.Introduction }>
                <InformationPanel title='Sagolika fotografier' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
                <div className={ styles.IntroductionImage } style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/introduction.png)` }}></div>
            </div>
            <div className={ styles.EmployeeIntros }>
                <ScrollFadeIn offset={-200} direction='to-right'>
                    <EmployeeIntro name='Julia Marie Nilsson' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve.' image='lauren.png' />
                </ScrollFadeIn>
                <ScrollFadeIn offset={0} direction='to-left'>
                    <EmployeeIntro reversed name='Susanne Marie Lindahl Hjerpe' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve.' image='lauren.png' />
                </ScrollFadeIn>
            </div>
            <div className={ styles.ViewPortfolio }>
                <ScrollFadeIn offset={0} direction='to-top'>
                    <SimpleButton content='Se portfolion' dark/>
                </ScrollFadeIn>
            </div>
        </div>
    );
};

export { home as Home };