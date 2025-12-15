import { use, useState } from "react";
import { useEffect } from "react";
import readme from './assets/readme.png'
import tree from './assets/famTree.png'
import styles from './mlmn.module.css'

function Pages(props) {
    const [c, setc] = useState(0)
    const [imgUrl, setImgUrl] = useState('https://image.shutterstock.com/image-vector/megaphone-attention-job-vacancy-announcement-260nw-2536789123.jpg')
    // Example usage


    const  imgs = [
        'https://static.vecteezy.com/system/resources/thumbnails/068/911/079/small/bright-yellow-rubber-duck-floating-in-calm-water-creates-a-playful-atmosphere-png.png',
        imgUrl,
        readme
    ]
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
                    <div className={styles.front + " front"}>
                        <h1>The Best Sponsors Of Life</h1>
                        <h2>Jonah Bernard</h2>
                        <div style={{ display: "flex", justifyContent: 'center' }}><img src={tree} width={'90%'} /></div>
                    </div>
                    <div className={styles.back + ' back'}>
                        <p>My story in literacy begins before I was born in my parents' lives. My parents’ experience with their respective families influenced how they raised me- their only child. Most of my life- including childhood- ended up being about learning thanks to them.</p>
                        <p>When they were kids, my father and mother had two and six siblings respectively. While I am an only child, they did want me to have a brother or sister too because they usually become lifelong friends; they just didn’t have the money to do so until I was too old and thus too late. Since they couldn’t give me a sibling, they instead gave me a cat and dog. Like siblings do, they kept, and still keep me, sane enough to deal with school every weekday without burning out; I love them like they’re family themselves.</p>
                    </div>
                </div>
                <div className={`${styles.page} page`} id='pg4' style={{ "--i": 1 }} onClick={pageClick}>
                    <div className={styles.front + " front"}>
                        <p>In elementary school, my family never had that much money. We had to change residency more than the average Joe because of problems with a house, its landlord, the area, and more. Fortunately, my parents realized that moving schools would have been even worse on their only child’s mental health and motivation towards school itself. Due to their foresight, I ended up staying in the same school district of Scottsdale until eventually aging out of it. The only time I deviated from the regular school path was going to Saguaro High School instead of Arcadia. Although that was purely a choice I made for prospects of a better education in the STEM field. There, I was able to graduate early with my four years of English done in three.</p>
                    </div>
                    <div className={styles.back + ' back'}>
                        <p>When it comes to schooling, I was definitely given more attention than my guardians were in relation to their childhood education. My mother made damn sure I was doing well in school and would drill me in subjects I did not do well in. For instance, I always had a rough time writing anything legibly onto a piece of paper and specifically remember a time I had to stay up until midnight rewriting a kindergarten assignment. Another time was when I took a keyboarding class and she made me do assignments multiple times until I could do them with my eyes closed. I’m definitely grateful for the help since I can write legibly enough so people know what I say on paper. My dad, on the other hand, would purely help with anything english related. I didn’t ask for it a lot of the time, but his help was valuable for he writes poems as a hobby. While most of the attention to my education was probably due in part to being an only child, none of my grandparents were invested in their kids' education beyond C’s and D’s.</p>
                    </div>
                </div>
                <div className={`${styles.page} page`} id='pg6' style={{ "--i": 2 }} onClick={pageClick}>
                    <div className={styles.front + " front"}>
                        <p>Currently, my stake in the technological world is around the area of web development. I have been well nurtured by everyone I came in contact with; although no one holds a candle to the financial support my parents have given me. Usually I learn from free videos, but more recently I started a certificate program into a development framework I enjoy using. As my background would suggest I suck at designing a site but I can develop relatively anything I put my mind to; especially if it's math related. Any site I develop is put on github down here. &#8659;</p>
                        <img src={ imgs[2]} alt="" width='100%' height='fit-content' />
                        <center>
                            <p>("Hello World!")</p>
                        </center>
                    </div>
                    <div className={styles.back + ' back'}>
                        <p>Through my career as a coding geek, I have learned over five different languages that reside within English standards thanks to the actual language itself and subsequent coding languages like Python. Through this multilingual journey presides what can only be called code meshing. There are several ways to say the same thing across multiple languages. For example, the most basic program everyone makes in any language is printing “Hello World” somewhere on the screen. Coding has a benefit of showing meaning behind words besides their first look; like “\n”. This string of characters effectively represents the enter key by creating a new line instead of just the characters. Additionally, integration between languages is a monumental concept used literally everywhere. Every website uses HTML as a base, CSS for styling, and Javascript for functionality. The top bar in slides uses HTML for all the icons, CSS for styling both the icons and bar itself, and Javascript to declare what each button does when clicked. YouTube additionally uses Django; A web development framework which meshes Python and SQL into the mix with all of the other languages. The understanding of these concepts (allegedly) helped me to change between different styles of writing in essays. Debugging has certainly changed how I read by the megabytes of code I have to search through.</p>
                    </div>
                </div>
                <div className={`${styles.page} page`} id='pg8' style={{ "--i": 3 }} onClick={pageClick}>
                    <div className={`${styles.front} front`}>
                        <p>My parents in contrast to me know little about higher mathematics and even less about computer programming as a whole. When they try and talk to me about it, I have a rough experience trying to explain what I do through technical phrasing. Eventually, I end up figuring out how to rephrase into layman's terms to better relay the information. Doing that time and again has since proved useful in retaining what I learn because I am now able to code with little to no mistakes; algebraically at least. It is rather similar to the Feinyman principle, where talking to a rubber duck helps one to remember what is being talked about.</p>
                        <p>My parents have always been there when I needed them most and am proud to name them as sponsors to the entirety of my education. I literally wouldn’t have schooling without them and it definitely wouldn’t be as fun without them! They have my utmost respect in all regards for helping throughout my entire educational journey and I hope I can give them the child worthy of their numerous affections.</p>
                    </div>
                    <div className={styles.back + " back"} id='pg9' style={{ display: 'flex', flexDirection: 'column', alignItems: "center", padding: '0%', justifyContent: 'space-evenly', }}>

                        
                            <div style={{ width: "50%", overflow: "hidden" }}>
                                <img src={ imgs[1]} alt="loudspeaker" width='100%' height={'120%'} />
                            </div>
                            <center>
                                <p>("Loudspeaker in use")</p>
                            </center>

                        
                        <div style={{ width: "50%" }}>

                            <img src={ imgs[0]} alt="duck" width='100%' />
                            
                        </div>
                        <center>
                            <p>("Rubber ducky")</p>
                        </center>
                    </div>
                    
                    
                </div>
                <div className={styles.page + " page"} id='pg9' style={{ "--i": 4 }} onClick={pageClick}>
                        <div className={`${styles.front} front`}>
                            <p>Deborah Brandt has a definition for literacy sponsors: "Sponsors, as I have come to think of them, are any agents, local or distant, concrete or abstract, who enable, support, teach, model, as well as recruit, regulate, suppress, or withhold literacy--and gain advantage by it in some way." (Brandt, 166) This flipbook has proved beyond a shadow of a doubt that my parents enabled my abundant access to educational materials. They don't really get a clear "advantage" per sé for their sponsorship, but they do have a child who can make a fully functional website in less than ten minutes. That must count for something.</p>
                        </div>
                        <div className={`${styles.back} back`} >
                            <center><u>Works cited</u></center>
                            <div className={styles.citation}>
                                <p><em>Bernard, Jonah.</em> <strong>"Hello World!"</strong> <em>Github.com</em>, 12 March 2026, https://github.com/chessmate08/readme.</p>
                            </div>
                            <div className={styles.citation}>
                                <p><em>Brandt, Deborah.</em><strong>"Sponsors of Literacy." </strong><em>College Composition and Communication, </em>12 March 2026, 1998</p>
                            </div>
                            <div className={styles.citation}>
                                <p><strong>"Loudspeaker in use"</strong> <em>Shutterstock.com</em>, 12 March 2026, { imgs[1]}.</p>
                            </div>
                            <div className={styles.citation}>
                                <p><strong>"Rubber ducky"</strong> <em>Vecteezy.com</em>, 12 March 2026, { imgs[0]}.</p>
                            </div>
                        </div>
                </div>
            </div>


        </>
    )
}
export { Pages }