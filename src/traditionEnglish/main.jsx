
import { createRoot } from 'react-dom/client'
import styles from './mlmn.module.css'
import { Pages } from './pages.jsx'


function Tradition() {
    return (
        <>
        <hr />
            <div className={styles.title}>
                <h3>Project 2:</h3>
                <h3>Traditional Marathon</h3>
            </div>
            <div className={styles.wrap}>
                <Pages />
            </div>
            
            <div className={styles.cliffnotes}>
                
                <div className={styles.reflection} style={{width: '100%'}}> 
                    <h2>Reflection</h2>
                    <ol>
                        <li>Define an argumentative purpose that addresses a pressing social issue or cultural phenomenon</li>
                        <ul><li>The argument is about the cultural phenomenon of marathons and calls for a return to the original 25 mile distance.</li></ul>
                        
                        <li>Identify rhetorical situations that frame a pressing social issue or relevant cultural phenomenon.</li>
                        <ul><li>I used the marathon as the rhetorical situation that frames the issue of its length.</li></ul>

                        <li>Exhibit flexible organizational tactics when defining, analyzing, and addressing a pressing social issue or relevant cultural phenomenon.</li>
                        <ul><li>I first defined what the essay would be about, then consequently provided historical context in the events that occurred; finally was the integration of them both to support the argument. </li></ul>
                    
                    </ol>
                    
                </div>
            </div>
            <hr />
        </>
    )
}
export {Tradition}