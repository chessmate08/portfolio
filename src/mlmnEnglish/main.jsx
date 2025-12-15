
import { createRoot } from 'react-dom/client'
import styles from './mlmn.module.css'
import { Pages } from './pages.jsx'


function MLMN() {
    return (
        <>
        <div className={styles.title}>
            <h3>Project 1:</h3>
            <h3>Multimodal Literacy Narrative</h3>
        </div>
        <div className={styles.wrap}>
            <Pages />
        </div>
        
        <div className={styles.cliffnotes}>
            <div className={styles.revisions}>
                <h2>Revisions</h2>
                    
                <ul>
                    
                    <li>The images have citations relatively in MLA format.</li>
                    <li>There are two extra pages added to the end of the book: </li>
                    <li>There is now a reference to Deborah Brandt's article about literacy sponsorship with MLA citation.</li>
                    <li>A citations page has been included in accordance to MLA format. </li>
                </ul>
            </div>
            <div className={styles.reflection}> 
                <h2>Reflection</h2>
                <ol>
                    <li>Utilize writing technologies that are best suited for negotiating audience expectations and rhetorical situations.</li>
                    <ul><li>When seeing this outcome, I wanted to include this project specifically for its book element. The entire essay I crafted was supposed to be about my story of literacy, so turning it into a literal story-book was a great metaphor to instill that idea into the mind of the reader.</li></ul>

                    <li>Reflect on the material effects of writing practices as they unfold in time and space.</li>
                    <ul><li>The narrative reflects on how repeated physical writing exercises, keyboarding, and debugging shaped your embodied literacy to what it is now.</li></ul>
                </ol>
                
                
            </div>
        </div>
        </>
    )
}
export {MLMN}


// helper functions -->

