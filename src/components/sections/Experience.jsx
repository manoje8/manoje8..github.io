import { experience } from "../../assets/data"
import Container from "./Container"

const Experience = () => {
    return (
        <div className="experience" id="experience">
            <div className="subtitle">
                <h1>Experience</h1>
            </div>
            <Container data = {experience}/>
        </div>
    )
}

export default Experience