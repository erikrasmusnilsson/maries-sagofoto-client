import styles from './index.module.css';

const information = () => {
    return (
        <div className={ styles.Wrapper }>
            <div className={ styles.Header }>
                <div className={ styles.HeaderContent }>
                    <h2>Information</h2>
                    <p>Här kan du läsa mer om hur våra fotograferingar går till samt vad det kostar.</p>
                </div>
            </div>
            <div className={ styles.Content }> 
                <div className={ styles.Process }>
                    <div>
                        <h1>Före</h1>
                        <h3>Designkonsultation</h3>
                        <p>
                            Efter att vi har fått din bokning så bestämmer vi tillsammans en tid för designkonsultation då vi träffas
                            och går igenom vad ni har för tankar och idéer när det gäller fotograferingen.
                            Önskar ni något speciellt tema, någon rekvisita, har ni önskemål om någon speciell plats/miljö, månad?
                        </p>
                        <h3>Kläder & Rekvisita</h3>
                        <p>
                            Vad det gäller kläder så skall ni tänka på att det fungerar allra bäst med kläder i ljusa färger utan tryck
                            och gärna kläder i olika lager.
                            Ha gärna kläder eller någon rekvisita som tar upp någon annan färg i miljön där vi fotograferar.
                            Önskar ni låna kläder eller rekvistia så lånar vi ut detta utan extra kostnad, annars går det jättebra
                            att ta egna kläder och rekvisita.
                        </p>
                        <h3>Musik</h3>
                        <p>
                            Vi önskar gärna veta vad ni eller erat barn gillar för musik/låtar då vi ofta använder oss av detta under
                            fotograferingen.    
                        </p>
                        <img alt="" src={`${process.env.PUBLIC_URL}/images/information_under.jpg`} className={ styles.Image } />
                    </div>
                    <div>
                        <h1>Under</h1>
                        <h3>Dagen för fotograferingen</h3>
                        <p>
                            Vi träffas på utsatt tid och plats taggade för dagens fotografering.
                        </p>
                        <h3>Att tänka på vid barnfotografering</h3>
                        <p>
                            Vi samarbetar med vårdnadshavaren under fotograferingen och gör allt för att barnet på ett naturligt sätt
                            ger oss den där blicken/det där léendet som gör att bilden blir extra magisk och vacker.
                        </p>
                        <h3>Kläder & Rekvisita</h3>
                        <p>
                            Förutsatt att barnet tycker att det känns bra och tycker att det är roligt, så kan vi göra 2-3 klädbyten.
                            Ev. rekvisita byts ut efter hand om så önskas.
                        </p>
                        <h3>Miljö</h3>
                        <p>
                            Vi träffas och fotograferar vid utsatt plats, men rör oss även i närområdet för att skapa variation i bilderna
                        </p>
                        <img alt="" src={`${process.env.PUBLIC_URL}/images/gucci.jpg`} className={ styles.Image } />
                    </div>
                    <div>
                        <h1>Efter</h1>
                        <h3>Bildvisning</h3>
                        <p>
                            Ca 2 veckor efter fotograferingen så träffas vi för bildvisning (om ni önskar annat alternativ pga Covid-19
                            så ordnar vi en bildvisning online).
                            Vi tittar igenom bilderna tillsammans och ni kan i lugn och ro beställa de bilder/bildpaket ni önskar.
                            Bildvisningen tar ca 30 minuter
                        </p>
                        <h3>Betalning</h3>
                        <p>
                            Betalningen för era beställningar betalas innan bilderna/produkterna levereras.
                        </p>
                        <h3>Leverans</h3>
                        <p>
                            De digitala bilderna levereras så snart betalningen är gjord.
                            Önskar ni produktbeställning så skickas dessa så snart vi kan
                        </p>
                        <h3>Tack</h3>
                        <p>
                            Vi vill tacka för erat förtroende att få hjälpa er att skapa minnen som kommer att kunna uppskattas i flera
                            generationer. Har ni några frågor så är det bara att ringa, maila eller smsa
                        </p>
                        <img alt="" src={`${process.env.PUBLIC_URL}/images/information_before.jpg`} className={ styles.Image } />
                    </div>
                </div>
                <div className={ styles.Pricing }>
                    <h1>Prislista</h1>
                    <div>
                        <h3>Paket 1 - 3800 kr</h3>
                        <p>5 digitala bilder som levereras av ett vackert USB-minne i trä</p>
                    </div>
                    <div>
                        <h3>Paket 2 - 4800 kr</h3>
                        <p>10 digitala bilder som levereras av ett vackert USB-minne i trä</p>
                    </div>
                    <div>
                        <h3>Paket 3 - 5500 kr</h3>
                        <p>15 digitala bilder som levereras av ett vackert USB-minne i trä</p>
                    </div>
                    <div>
                        <h3>Ingår i alla paket</h3>
                        <p>Designkonsultation</p>
                        <p>Förarbete</p>
                        <p>Rekvisita</p>
                        <p>Fotografering</p>
                        <p>Efterarbete med bland annat redigering</p>
                        <p>Bildvisning</p>
                        <p>* Vid genomförd fotografering debiteras 1000 kr, denna summa avdrags sedan från det valda paketets pris.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { information as Information };