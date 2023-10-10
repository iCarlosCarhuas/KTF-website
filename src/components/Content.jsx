import Introduction from './Introduction.jsx';
import Objectives from './Objectives.jsx';
import Posts from './Posts.jsx';
import Projects from './Projects.jsx';


function Content(){
    return(
    <section className="smooth-container">
    <div className="blank"></div>
        <Introduction></Introduction>
        <Objectives></Objectives>
        <Posts></Posts>
        <Projects></Projects>
    </section>
    )
}
export default Content;