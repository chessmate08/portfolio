import { use, useState } from "react";
import { useEffect } from "react";

import styles from './mlmn.module.css'

function Pages(props) {
    const [c, setc] = useState(0)

    function pageClick(event) {
        const i = parseInt(getComputedStyle(event.currentTarget).getPropertyValue('--i'))
        console.log(i);
        const orientation = event.currentTarget.firstChild.classList[0]
        console.log(orientation)
        if (c == i) {
            setc(() => i + 1)
            console.log(true);

        } else {
            console.log(false);

            setc(() => i)
        }

    }

    return (
        <>
            <div className={"book " + styles.book} style={{ '--c': c }}>
                <div className={`${styles.page} page`} id='pg1' style={{ "--i": 0 }} onClick={pageClick}>
                    <div className={styles.front + " "}>
                        <h1>The Tradition of Marathon</h1>
                        <h2>Jonah Bernard</h2>
                        <div style={{ display: "flex", justifyContent: 'center' }}></div>
                    </div>
                    <div className={styles.back + ' back'}>
                        <p>	Every year on the third Sunday of March, the LA marathon is held. The 26.2 mile run is treacherous and long; proving difficult for those who don’t prepare for it. Fortunately, Mike Bernard does. He crosses the finish line, year after year, taking home the glory of the achievement. He never wins, but instead loves the exhilaration of running the miles and proving his physique despite his senior age of seventy years old. My grandpa was a history major as well and I carry no doubt that he knows the rich history behind the sporting event. The amount of stamina my Grandpa has is astounding for a human, nonetheless being in retirement. Everyone who runs the marathon has to be physically in shape or they could drop dead at the end like their namesake!</p>
                        
                    </div>
                </div>
                <div className={`${styles.page} page`} id='pg4' style={{ "--i": 1 }} onClick={pageClick}>
                    <div className={styles.front + " front"}>
                        <p>	According to Barry Powell in his book “Classical Myth”, the tradition of the marathon started in the Archaic Period – 825 to 480 BC. The period started off strong for the Greeks thanks to the invention of the Greek alphabet; a major upgrade from the previous Linear B. The language update helped the Greeks expand Westward and create many of what was called a Polis – a city state. In turn came the concept of citizenship, which was granted solely to men. As in Greek myth, competitiveness was the citizens’ bread and butter; think of Daedalus who became jealous of his nephew Perdix and pushed him off a cliff. This was similar conceptually to capitalism, but Greece was more a city on the sea than anything else. The amount of commerce the city accrued from its base in water was astronomical; increasing ever more when coinage was developed in 600 BC. Greece devolved even more into capitalism; the money-men who could make it were called aristoi and the rest kakoi. Thankfully it didn’t devolve totally and political power was still within the kakoi’s grasp. </p>
                    </div>
                    <div className={styles.back + ' back'}>
                        <p>The thing about Persia is anyone conquered by its tyrannical king was given a choice: fulfill certain needs for the kingdom as a satrapy or suffer harsh punishment; rules made by the “king of kings” Darius. The Ionian Revolt from 499 - 494  BC caused by the tyrannical policies of Darius included the Ironian cities of Greeks vying for independence through combat. The ensuing chaos led to the burning of Sardis; an important milestone for the Greeks since it inspired others to join in the fray. However, the revolt ended tragically, but unsurprisingly, in Ionian defeat in a naval battle. While the battle was lost, important lessons were learned. The Persian force was a mesh of different kingdoms that Persia had conquered, meaning its army was quantity over quality. The end of the Ionian revolt is not the conclusion of the Greco-Persian wars; Darius would not be satisfied since, of course, he still wants to expand Persia’s influence.</p>
                    </div>
                </div>
                <div className={`${styles.page} page`} id='pg6' style={{ "--i": 2 }} onClick={pageClick}>
                    <div className={styles.front + " front"}>
                        <p>Greece was in a pickle. Any further wars absolutely required Greece to be united against the Persian threat on their terms; the problem being Greece is literally separated by water. Greece has many myths of seafaring primarily thanks to its various collection of islands (i.e. Odyssey, Argonauts). Therefore, the only way for Persia to take the islands was to have a fleet of their own. Darius underwent methods to access the Ionian fleet; Ionia was Greek too and as such had its own armada of ships. Athens and Sparta, initially at war, eventually came to the mutual understanding that Persia was a bigger threat than their political turmoil and both turned their attention to Persia.</p>
                    </div>
                    <div className={styles.back + ' back'}>
                        <p>Persia sailed over the Aegean sea to the isles of Greece with 25,000 men, applying more than enough to start the campaign for Greece. They came ashore in Euboea, capturing the polies Carystus and Eretria. Continuing on, Persia ended up on Marathon in 490 BC. Greece, in turn, sent their army to the foothills of Marathon, unbeknownst to Persia. In northeastern Attica lies Marathon; a vast plain suitable for large-scale wars. Persia usually would have zero chance of losing any battle here thanks to their cavalry and secure supply lines from Euboea, but information and strategy is the key to winning any war. Greece knew of their supposed cavalry, and strategized to beat it. Sources say different things, but the gist of the battle is the Persian cavalry either wasn’t there that day or Greece created a choke point rendering it useless. Remember this battle was over two millennia ago; sources aren’t entirely preserved or true from this far back. The Greeks surrounded the Persian army of fifteen to twenty thousand troops and beat them with their measly ten thousand. Greece had prevailed. While the Battle of Marathon wasn’t the end of the Greco-Persian wars, it was definitely a decisive one. Disregarding the immense amount of preparation Marathon took, the battle only lasted a single afternoon.</p>
                    </div>
                </div>
                <div className={`${styles.page} page`} id='pg8' style={{ "--i": 3 }} onClick={pageClick}>
                    <div className={`${styles.front} front`}>
                        <p>The Battle of Marathon was certainly a courageous bout of skill vs. brute force, but the battle itself wasn’t what gives the race its namesake; the aftermath is what really sealed the deal. Myths account for the post-credit scene as Herodotus uses the story of Pheidippides – who covered 150 miles to get help from Sparta – in tangent to the Battle of Marathon. Pheidippides’ story suggests a soldier ran from the Battle of Marathon to Athens to declare the monumental victory but died from exhaustion after the 25 mile sprint. The first Olympics in 1896 included the 25 mile marathon race that was historically won by the Greek Spyridon Louis. Eventually came the London marathon in 1906 which changed its length to 26.2 miles to end itself in front of the Royal viewing box (Britannica). The 26.2 mile distance for the marathon was deemed official as of 1924 to make all the races the same, unique number. Other races deemed “ultramarathons” were created for those that wanted to run them; the ever-popular Spartathlon would be among them with the goal of running 125 miles in under 36 hours. The current best time for a marathon is two hours and is held by the late Kelvin Kiptum; although Eliud Kipchoge did barely break under two hours in an unsanctioned marathon.</p>
                    </div>
                    <div className={styles.back + " back"} >
                        <p>My grandfather at the age of 70 doesn’t win the races he partakes in; though that isn’t his intention when entering the race. Winning is secondary to the amount of preparation involved in running the distance and getting a personal best. In addition, cardio to his degree is a very healthy habit to get into.</p>
                        <p>The tradition of the marathon is upheld amazingly, but there is one change that should be made. The best parts of any tradition are who participates, how similar it stays to its roots, and offshoots made from the tradition itself. War has chess; an ancient game made from the idea of war that has two players using sixteen troops strategically to beat their opponent. The multi-national game of Chess’ enthusiasts have made variations more commonly called chess variants: Bughouse, Jedi, Kingofthehill, just to name a few. Marathons have the traditional 26.2 mile race, but also the ultramarathons like Spartathlon that are more for fun than the traditional. The only problem I have with a marathon is its 26.2 mile distance as there is no reason to enforce that anymore. The original distance the soldier took was 25 miles so keep the 25 dang miles! Sure chess evolved for rule updates, time constraints, tournaments, etc. but its source of the metaphor would sometimes have the exact same circumstances. There was only ever one account for the run from marathon to Athens and it was 25 miles.</p>
                    </div>
                    
                    
                </div>
                <div className={styles.page + " page"} id='pg10' style={{ "--i": 4 }} >
                    <div className={`${styles.front} front`}>
                        <center><u>Works cited</u></center>
                        <div className={styles.citation}>
                            <p><strong>"Chess Variants - Chess Terms."</strong> <em>Chess.com</em>, 2020, https://www.chess.com/terms/chess-variants. Accessed 7 November 2025.</p>
                        </div>
                        <div className={styles.citation}>
                            <p><strong>"Classical Myth"</strong><em>Classical Myth,</em> by Barry B. Powell, 9th ed.,<em>Oxford University Press,</em>2021, pp. 17-27</p>
                        </div>
                        <div className={styles.citation}>
                            <p><em>Editors, Britannica.</em><strong>"Battle of Marathon | Summary, Facts, & Significance."</strong> <em>Britannica.com,</em>18 October 2025, https://www.britannica.com/event/Battle-of-Marathon. Accessed 5 November 2025</p>
                        </div>
                        <div className={styles.citation}>
                            <p><em>Editors, Britannica.</em><strong>"Greco-Persian Wars - Ionian Revolt, 499-493 BCE."</strong> <em>Britannica.com,</em>2 October 2025, https://www.britannica.com/event/Greco-Persian-Wars/The-Ionian-Revolt-499-493-bce. Accessed 5 November 2025</p>
                        </div>
                        <div className={styles.citation}>
                            <p><em>Editors, Britannica.</em><strong>"Marathon | Distance, Length, Olympics, & History"</strong> <em>Britannica.com,</em>6 November 2025, https://www.britannica.com/sports/marathon-race. Accessed 6 November 2025</p>
                        </div>
                    </div>
                    
                </div>
            </div>


        </>
    )
}
export { Pages }