import Modal from 'react-modal';
import { useState } from 'react';
import profilePic from '../assets/profile.png';
import reactIcon from '../assets/react.png';
import reactRouterIcon from '../assets/react-router.png';
import reduxIcon from '../assets/Redux.png';
import railsIcon from '../assets/rails.png';
import postgresqlIcon from '../assets/postgresql.png';
import bcryptIcon from '../assets/bcrypt.png';
import drift from '../assets/drift/drift_login.png';
import game from '../assets/game/game_mainmenu.png';
import football from '../assets/football/football_draft_select.png';
import flatify from '../assets/flatify/flatify_main.png';
import weather from '../assets/weather/weather_main.png';

import Contact from './Contact';

Modal.setAppElement(document.getElementById('root'));

function Main(){
    
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');

    function handleClick(proj) {
        if(proj === 'game'){
            setTitle('Adventure Game');
        }else if(proj === 'drift'){
            setTitle("Drift World");
        }else if(proj === 'football'){
            setTitle("Fantasy Football");
        }else if(proj === 'flatify'){
            setTitle("Flatify");
        }else if(proj === 'weather'){
            setTitle("Weather App");
        }
        openModal();
    }
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    return(
        <div className="main">
            <div id='home' className='profile-pic'>
                <img src={profilePic} alt='profile picture' />
                <h2>Andrew Dziabo</h2>
            </div>
            <section id='about'>
                <h1>About</h1>
                <div>
                    
                    <p>I'm a Full Stack Software Engineer with a passion for learning and a love of exploring new ideas and the unknown.</p>
                </div>
            </section>
            <section id='projects'>
                <h1>Projects</h1>
                <div className='projects'>
                    <div className='project-items'>
                        <img src={game} alt='adventure-game' onClick={e => handleClick('game')} />
                    </div>
                    <div className='project-items'>
                        <img src={drift} alt='drift-world' onClick={e => handleClick('drift')} />
                    </div>
                    <div className='project-items'>
                        <img src={football} alt='fantasy-football' onClick={e => handleClick('football')} />
                    </div>
                </div>
                <div className='projects'>
                    <div className='project-items'>
                        <img src={flatify} alt='flatify' onClick={e => handleClick('flatify')} />
                    </div>
                    <div className='project-items'>
                        <img src={weather} alt='weather-app' onClick={e => handleClick('weather')} />
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Adventure Game"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <h2>{title}</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                </Modal>
            </section>
            <section id='skills'>
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
            </section>
            <section id='contact'>
                <h1>Contact Me</h1>
                <div>
                    <Contact />
                </div>
            </section>
        </div>
    )
}

export default Main;