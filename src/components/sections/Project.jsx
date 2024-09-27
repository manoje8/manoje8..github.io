import { projects } from "../../assets/data"

import { useState } from "react"

const Project = () => {
    const [isOpen , setIsopen] = useState(false)
    const handleClick = () => {
        setIsopen(!isOpen)
    }
    return (
        <div className="project" id="project">
            <div className="subtitle">
                <h1>Projects</h1>
            </div>
            <ul className="project-list animate-box fadeInUp animated">
                <li className={`${isOpen ? "open" : ""}`}>
                        <div className="link">
                           <p style={{marginBottom: 0}}>Web Projects</p>
                           <i className="bi bi-chevron-down" onClick={handleClick}></i>
                        </div>
                        <ul id="web-projects" className="sub-menu animate-box fadeInUp animated" style={{display : `${isOpen ? "block" : "none"}`}}>
                            {
                                projects.webProjects.map((project, id) => (
                                    <li key={id}>
                                        <div className="card" style={{backgroundColor: "#e1e5f2"}}>
                                                <div className="project-item">
                                                    <a target="_blank" href={project.preview} rel="noreferrer">
                                                        <div className="project-content" id="left-div">
                                                            <img className="img-fluid" src={project.image} alt="404"/>
                                                        </div>
                                                    </a>
                                                    <div className="project-content" id="right-div">
                                                        <div className="sub-heading">
                                                            <p className="project-description"> 
                                                                {project.summary}
                                                            </p>
                                                            <span className="project-source-code">
                                                                <a href={project.github} target="_blank" rel="noreferrer">Source code</a>
                                                            </span>
                                                            <div>
                                                            {
                                                                project.techStack.map((tech, id) => (
                                                                    <span key={id} className="badge badge-secondary">{tech}</span>
                                                                ))
                                                            }
                                                            </div>
                                                        </div>
                                                    </div>  
                                                </div>
                                        </div>
                                    </li>
                                ))
                            }
                            
                        </ul>
                </li>
            </ul>
        </div>
    )
}

export default Project