import profilePic from '../assets/profile.png';
import reactIcon from '../assets/react.png';
import reactRouterIcon from '../assets/react-router.png';
import reduxIcon from '../assets/Redux.png';
import railsIcon from '../assets/rails.png';
import postgresqlIcon from '../assets/postgresql.png';
import bcryptIcon from '../assets/bcrypt.png';
import Contact from './Contact';

function Main(){
    return(
        <div className="main">
            <div className='profile-pic'>
                <img src={profilePic} alt='profile picture' />
                <h2>Andrew Dziabo</h2>
            </div>
            <h1>About</h1>
            <div>
                
                <p>I'm a Full Stack Software Engineer with a passion for learning and a love of exploring new ideas and the unknown.</p>
            </div>
            <h1>Projects</h1>
            <div>
                
            </div>
            <h1>Skills</h1>
            <div className='skills'>
                <div className='skills-items'>
                    <img src={reactIcon} alt='react' />
                </div>
                <div className='skills-items'>
                    <img src={reactRouterIcon} alt='react-router' />
                </div>
                <div className='skills-items'>
                    <img src={reduxIcon} alt='redux' />
                </div>
            </div>
            <div className='skills'>
                <div className='skills-items'>
                    <img src={railsIcon} alt='rails' />
                </div>
                <div className='skills-items'>
                    <img src={postgresqlIcon} alt='postGreSql' />
                </div>
                <div className='skills-items'>
                    <img src={bcryptIcon} alt='bcrypt' />
                </div>
            </div>
            <h1>Contact Me</h1>
            <div>
                <Contact />
            </div>
        </div>
    )
}

export default Main;