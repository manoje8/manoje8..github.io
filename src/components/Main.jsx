import "./Main.css"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Project from "./sections/Project"
import Skill from "./sections/Skill"

const Main = () => {
    return (
        <div className="main">
            <div className="content">
                <About />
                <Skill />
                <Project />
                <Experience />
                <Education />
                <Contact />
             </div>
        </div>
    )
}

export default Main