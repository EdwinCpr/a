import MyPhoto from "../Images/My-photo.png";
import CV from "../Images/Edwin-D-CV.pdf";
const Home = () => {
    return (
        <div>
            <div className="background">
                <div className="content">
                    <div className="home-all">
                        <div className="home-my-photo">
                            <img src={MyPhoto} alt="" />
                        </div>
                        <div className="home-title">
                            <h1 className="title">Hola soy Edwin, <span className="title-color">Desarrollador Frontend!</span></h1>
                        </div>
                        <div className="home-cv">
                            <button><a href={CV} download>Descargar CV</a></button>
                        </div>
                        <div className="home-networks">
                            <div className="networks-flex">
                                <div className="networks-facebook">
                                    <a href="https://www.facebook.com/codernettt/" target="_blank"><i className="fa-brands fa-facebook-f networks"></i></a>
                                </div>
                                <div className="networks-whatsapp">
                                    <a href="http://api.whatsapp.com/send?phone=584242874025" target="_blank"><i className="fa-brands fa-whatsapp networks"></i></a>
                                </div>
                                <div className="networks-linkedin">
                                    <a href="https://www.linkedin.com/in/edwin-echeverria-9862b41b9/" target="_blank"><i className="fa-brands fa-linkedin-in networks"></i></a>
                                </div>
                                <div className="networks-email">
                                    <a href="mailto:edwindanielnow@gmail.com" target="_blank"><i className="fa-regular fa-envelope networks"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;