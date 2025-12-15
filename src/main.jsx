import { createRoot } from "react-dom/client";

import { MLMN } from "./mlmnEnglish/main";
import { Tradition } from "./traditionEnglish/main";

function Reflection() {
    return (
        <div id="reflection">
            <h2>General Reflection</h2>
            <div>
                <ul>
                    <li>Implement culturally-specific discourses, argumentative tactics, and languages (including one’s first language and any additional languages) when negotiating a pressing social issue or relevant cultural phenomenon</li>
                    <ol>
                        <li>In the Multimodal Literacy Narrative...</li>
                        <ul>
                            <li>“The most basic program everyone makes in any language is printing ‘Hello World’ somewhere on the screen.” (bernard, 5) This is a culturally specific programming example to appeal to readers familiar with tech.</li>
                            <li>“Through my career as a coding geek, I have learned over five different languages… Through this multilingual journey presides what can only be called code meshing.” I use the different coding languages I have learned and their similarities to help explain my coding literacy.</li>
                        </ul>
                        <li>In The Traditional Marathon essay...</li>
                        <ul>
                            <li>Culturally-specific discourse is the primary force driving this essay. The culture of the marathon race is its history and the history of the race is the main topic of the essay.The two bits of history I implement are the Battle of Marathon and the 26.2 mile run from Marathon to Athens. I scrutinized over as many details of the fight as I possibly could; eventually getting to the point where I had to dial it back.</li>
                            <li>To make the argument for keeping tradition, I used argumentative tactics; the most notable of them being: tone switching and comparisons. The start of the essay was a completely formal tone suited for a text-book; the end of the essay ended up being more or less a conversation. One comparison I used was a juxtaposition with a marathon and the game of chess. The metaphor of war is not only consistent throughout the millenia but actually grew stronger. By contrast, the allusion of the marathon has only been losing its historical roots.</li>
                        </ul> 
                    </ol><br /><br />
                    <li>Appeal to audience expectations using culturally-relevant languages (including one’s first language and any additional languages), discourses, forms, conventions, and styles. </li>
                    <ol>
                        <li>In the Multimodal Literacy Narrative...</li>
                        <ul>
                            <li>To appeal to audience expectations, I use a more personal tone as a narrative would imply. I show some coding languages I have learned through these last few years, and use multimodal elements; both aligning with the expectations of a literacy-narrative driven assignment and reflective, audience-centered style.</li>
                        </ul>
                        <li>In the Traditional Marathon...</li>
                        <ul>
                            <li>The argument made in this essay is to keep to the original marathon length of 26.2 miles. Additionally, the essay itself is supposed to teach why the marathon exists in the first place. Thanks to those, the audience should expect a research-based paper explaining the entirety of the tradition. </li>
                        </ul>
                    </ol>
                    <br /><br />
                    <li>Implement the fundamental components of embodied writing practices such as invention, drafting, collaboration, revision, and reflection.</li>
                    <ol>
                        <li>In both of the projects...</li>
                        <ul>
                            <li>The first part of the project was gathering ideas for what I could write about. For the Multimodal Literacy Narrative, I ended up using both of the ideas I crafted: parental guidance and learning to code. The essay I wrote for project two (i.e. Tradiitonal Marathon) might have been about Christmas in another world.</li>
                            <li>The next step was writing a first draft befitting the prompt. I didn't do all that bad in this step, but the projects usually needed some revisions. For the Multimodal Literacy Narrative, I had the idea for the book-type format but the first draft itself was just paragraphs ideal for it. </li>
                            <li>After initial drafts came collaboration and revision. This step had my partner and I reading through each others paper for any prominent mistakes or details that could be improved upon. Of course, there were always at least some ways that the essay could be better. I implemented the suggestions from my partner that were generally a good idea to do so, but others weren't beneficial as for the entirity of the essay. </li>
                            <li>Last up to bat was the reflection; rereading and doing anything that needs to be done to the essay. This step turned the Multimodal Literacy Narrative into an actual narrative and a citations page at the end. I almost added images to the Traditional Marathon essay, but eventually thought it was better as just an essay. </li>
                        </ul>
                    </ol>
                </ul>
            </div>
        </div>
    )
}
createRoot(document.getElementsByClassName('project')[0]).render(
    <>
            <MLMN />
            <Tradition />
            <Reflection />
    </>
)