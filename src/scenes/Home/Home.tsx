import { Link } from "react-router-dom"
import Button from '../../Components/Button'
import Project from '../../scenes/Project/scene'
import Education from '../../scenes/Education/scene'
// import About from '../../scenes/About/scene'
// import Contact from '../../scenes/Contact/scene'
import Social_media from '../../Components/social_media'

const Home = () => {
    return (
    <div>
        <h1>Welcome to my <br/>Portfolio</h1>
        <div className="center">
            <h2>Hi,</h2>
            <p>I am Jérémy Armijo, a passionate developer currently studying at Epitech Paris. Proficient in various programming languages such as C, TypeScript, JavaScript, and SQL. My project experience includes creating an AI auto-pilot, an online todo list, and modeling air traffic. I also excel in managing IT projects, utilizing agile methods and development tools like GitHub and Git. Currently in my second year of studies, I aim to achieve a diploma in Information Technology Expertise and a title of Software Engineering Expert at level 7. I am dedicated to enhancing my skills and contributing to innovative projects in the field of computer science</p>
            <br/>
            <div className="button-container">
                {/* <Link to="/about"><Button color_label="white" label="About" backgroundImage="about.jp" onClick={About}/></Link> */}
                <Link to="/project"><Button color_label="white" label="Projects" backgroundImage="project.png" onClick={Project}/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</Link>
                <Link to="/education"><Button color_label="black" label="Education" backgroundImage="education.jpg" onClick={Education}/></Link>
                {/* <Link to="/contact"><Button color_label="white" label="Contact" backgroundImage="contact.pn" onClick={Contact}/></Link> */}
            </div>
        </div>
        <Social_media/>
        <div className='edition'>Email: jeremy.armijo@epitech.eu<br/>© 2024 | Jérémy Armijo</div>
    </div>
    )
}

export default Home;
