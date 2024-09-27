import { skills } from "../../assets/data"

const Skill = () => (
    <div className="skill" id="skill">
        <div className="subtitle">
            <h1>Skill</h1>
        </div>
        <div className="skill-progress">
            {
                skills.map((skill, id) => (
                    <div key={id} className="col-md-6 animate-box fadeInUp animated">
                        <div className="progress-wrap">
                            <h3 className="null">{skill.skillName}</h3>
                            <div className="progress">
                                <div className={`progress-bar ${skill.color}`} style={{width: `${skill.percentage}%`}}> </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)

export default Skill