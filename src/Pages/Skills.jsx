import Html from "../Images/html.png";
import Css from "../Images/css.png";
import React from "../Images/react.png";
import ReactR from "../Images/react-router.png";
import Redux from "../Images/redux.png";
import Javascript from "../Images/javascript.png";
import Tailwind from "../Images/tailwind.png";
import "../Styles/skills.css";

const Skills = () => {
    return (
        <div className="background">
            <div className="content">
                <div className="skills-all">
                    <div className="skills-title">
                        <h1 className="title">Habilidades</h1>
                    </div>
                    <div className="techniques">
                        <div className="techniques-title">
                            <h2 className="subtitle">Tecnicas</h2>
                        </div>
                        <div className="techniques-list">
                            <div className="list-icon">
                                <div className="icon-flex">
                                    <div className="icon">
                                        <p>HTML</p>
                                        <img src={Html} alt="icon-html" className="techniques-icon" />
                                    </div>
                                    <div className="icon">
                                        <p>CSS</p>
                                        <img src={Css} alt="icon-html" className="techniques-icon" />
                                    </div>                                        <div className="icon">
                                          <p>JavaScript</p>
                                        <img src={Javascript} alt="icon-html" className="techniques-icon" />
                                    </div>
                                    <div className="icon">
                                        <p>React</p>
                                        <img src={React} alt="icon-html" className="techniques-icon" />
                                    </div>
                                    <div className="icon">
                                        <p>React-Router</p>
                                        <img src={ReactR} alt="icon-html" className="techniques-icon" />
                                    </div>
                                    <div className="icon">
                                        <p>Redux toolkit</p>
                                        <img src={Redux} alt="icon-html" className="techniques-icon" />
                                    </div>
                                    <div className="icon">
                                        <p>Tailwindcss</p>
                                        <img src={Tailwind} alt="icon-html" className="techniques-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="soft">
                        <div className="soft-title">
                            <h2 className="subtitle">Blandas</h2>
                        </div>
                        <div className="soft-list">
                            <div className="list-mysoft">
                                <div className="mysoft-flex">
                                    <div className="mysoft">
                                        <p>🌟Adaptabilidad</p>
                                    </div>
                                    <div className="mysoft">
                                        <p>🌟Aprendizaje rápido</p>
                                    </div>
                                    <div className="mysoft">
                                        <p>🌟Trabajo en equipo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;