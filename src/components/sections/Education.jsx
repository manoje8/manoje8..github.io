import { education } from "../../assets/data"
import Container from "./Container"

const Education = () => {
    return (
        <div className="education" id="education">
            <div className="subtitle">
                <h1>Education</h1>
            </div>
            <Container data={education}/>
        </div>
    )
}

export default Education