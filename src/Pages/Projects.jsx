import ToDo from "../Images/tasks.png";
import Rick from "../Images/rick.png";
import "../Styles/projects.css";

const Projects = () => {
    return (
        <div className="background">
            <div className="content projects">
                <div className="projects-all">
                    <div className="projects-title">
                        <h1 className="title">Proyectos</h1>
                    </div>
                    <div className="projects-project">
                        <div className="project-title">
                            <h2 className="subtitle">Lista de tareas</h2>
                        </div>
                        <div className="project-img">
                            <a href="https://cruuddd.netlify.app/#/" target="_blank"><img src={ToDo} alt="todo-img" className="img" /></a>
                        </div>
                        <div className="project-github">
                            <a href="https://github.com/EdwinCpr/ToDo"><i class="fa-brands fa-github icon-git"></i>Codigo</a>
                        </div>
                    </div>
                    <div className="projects-project">
                        <div className="project-title">
                            <h2 className="subtitle">Rick y Morty</h2>
                        </div>
                        <div className="project-img">
                            <a href="https://rickproject.netlify.app/" target="_blank"><img src={Rick} alt="todo-img" className="img" /></a>
                        </div>
                        <div className="project-github">
                            <a href="https://github.com/EdwinCpr/rick"><i class="fa-brands fa-github icon-git"></i>Codigo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;