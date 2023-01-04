import Modal from 'react-modal';
import { useState } from 'react';
import profilePic from '../assets/profile.png';
import reactIcon from '../assets/react.png';
import reactRouterIcon from '../assets/react-router.png';
import reduxIcon from '../assets/Redux.png';
import railsIcon from '../assets/rails.png';
import postgresqlIcon from '../assets/postgresql.png';
import bcryptIcon from '../assets/bcrypt.png';
import drift from '../assets/drift/drift_world.png';
import game from '../assets/game/game.png';
import football from '../assets/football/football.png';
import flatify from '../assets/flatify/flatify.png';
import weather from '../assets/weather/weather.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCube, Navigation, Pagination } from 'swiper';

import Contact from './Contact';
import Demo from './Demo';

Modal.setAppElement(document.getElementById('root'));

function Main(){
    
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
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    return(
        <div className="main">
            <section id='about'>

                <h1>About Me</h1>
                <div className='about-container'>
                    <div id='home' className='profile-pic'>
                        <img src={profilePic} alt='profile' />
                    </div>
                        <p className='about-desc'>I'm a Full Stack Software Engineer with a passion for learning and a love of exploring new ideas and the unknown.
                            I am a very hands on type of person who enjoys learning how to do anything that involves creating or building 
                            things. I've always been intrigued by how things work, when I was young I was the kid always tearing things apart 
                            to see how they work. I have a wide variety of hobbies from restoring an old Queen Anne style home, building cars, 
                            welding, drawing and other art, and even tattooing. All of my hobbies have a couple things in common that draw 
                            me to them. They all involve building and creating, planning, and problem solving.</p>
                </div>
            </section>
            <section id='projects'>
                <h1>Projects</h1>
                    <Swiper
                        // spaceBetween={30}
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                        style={{
                            "--swiper-pagination-color": "#294466",
                            "--swiper-pagination-bullet-inactive-color": "#999999",
                            "--swiper-pagination-bullet-inactive-opacity": "0.4",
                            "--swiper-pagination-bullet-size": "16px"
                        }}
                    >
                        <SwiperSlide>
                            <h2>Adventure Game</h2>
                            <div className='swiper-description-container'>
                                <img src={require('../assets/game/game.png')} alt='adventure-game' />
                                <div className='swiper-text'>
                                    <p>Top down view adventure game with user login, new game, saved games, key settings and highscore features</p>
                                    <ul className='swiper-list'>
                                        <li>Full-stack project with a React frontend and a Rails backend</li>
                                        <li>Utilizes Redux for state management</li>
                                        <li>Single page application with multiple client-side routes using React Router</li>
                                        <li>Implemented authentication/authorization including password protection using bcrypt</li>
                                        <li>Custom CSS for character movement and animation</li>
                                    </ul>
                                    <h3>Demo</h3>
                                    <div className='vid-link'>
                                        <img src={game} alt='adventure-demo' onClick={e => handleClick('game')} />
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2>Drift World</h2>
                            <div className='swiper-description-container'>
                                <img src={drift} alt='drift-world' />
                                <div className='swiper-text'>
                                    <p>Social app for the drifting community that provides: classifieds, events, services, and media sections</p>
                                    <ul className='swiper-list'>
                                        <li>Full-stack project with a React frontend and a Rails backend</li>
                                        <li>Single page application with multiple client-side routes using React Router</li>
                                        <li>Implemented authentication/authorization including password protection using bcrypt</li>
                                        <li>Validations for new user sign up and existing user login</li>
                                        <li>User access to edit and delete resources only if they are the creator of that resource</li>
                                    </ul>
                                    <h3>Demo</h3>
                                    <div className='vid-link'>
                                        <img src={drift} alt='drift-demo' onClick={e => handleClick('drift')} />
                                    </div>
                                </div>
                            </div>
                            
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2>Fantast Football</h2>
                            <div className='swiper-description-container'>
                                <img src={football} alt='fantasy-football' />
                                <div className='swiper-text'>
                                    <p>A fantasy football app that lets you sign up the users in your league, run a draft, and then manage your team</p>
                                    <ul className='swiper-list'>
                                        <li>Utilizes ESPN API to seed the database with all the current NFL players with their information</li>
                                        <li>Sinatra API backend that uses Active Record</li>
                                        <li>React frontend that interacts with the database via the API</li>
                                        <li>Multiple models with one-to-many relationships as well as many-to-many relationships</li>
                                        <li>Full CRUD capability for the models</li>
                                    </ul>
                                    <h3>Demo</h3>
                                    <div className='vid-link'>
                                        <img src={football} alt='football-demo' onClick={e => handleClick('football')} />
                                    </div>
                                </div>
                            </div>
                            
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2>Flatify</h2>
                            <div className='swiper-description-container'>
                                <img src={flatify} alt='flatify' />
                                <div className='swiper-text'>
                                    <p>A music app for searching songs, and building playlists using the Spotify API</p>
                                    <ul className='swiper-list'>
                                        <li>Built a React single page application, implementing client-side routing</li>
                                        <li>Utilized JSON server to store users selected songs then enable them to create a playlist of songs that is uploaded to the Spotify API</li>
                                        <li>Embed a music player to play songs selected by the user</li>
                                        <li>Implemented full CRUD capability being able to read playlists, create new playlists, update playlists, and delete playlists</li>
                                        <li>Utilized JSON Web Tokens and localStorage to provide user access using their Spotify account</li>
                                    </ul>
                                    <h3>Demo</h3>
                                    <div className='vid-link'>
                                        <img src={flatify} alt='flatify-demo' onClick={e => handleClick('flatify')} />
                                    </div>
                                </div>
                            </div>
                            
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2>Weather App</h2>
                            <div className='swiper-description-container'>
                                <img src={weather} alt='weather-app' />
                                <div className='swiper-text'>
                                    <p>A weather app that allows you to get the 5 day forecast information for a given zip code</p>
                                    <ul className='swiper-list'>
                                        <li>Used HTML, CSS, and JavaScript to build a single page application</li>
                                        <li>Integrated JavaScript and an external API</li>
                                        <li>Utilized a db.json file to store the zip codes that the user has searched and the related information for those zip codes</li>
                                        <li>Manipulated API data using array methods for iteration</li>
                                    </ul>
                                    <h3>Demo</h3>
                                    <div className='vid-link'>
                                        <img src={weather} alt='weather-demo' onClick={e => handleClick('weather')} />
                                    </div>
                                </div>
                            </div>
                            
                            
                        </SwiperSlide>
                    </Swiper>
                    {/* <div className='project-items'>
                        <img src={game} alt='adventure-game' onClick={e => handleClick('game')} />
                    </div>
                    <div className='project-items'>
                        <img src={drift} alt='drift-world' onClick={e => handleClick('drift')} />
                    </div>
                    <div className='project-items'>
                        <img src={football} alt='fantasy-football' onClick={e => handleClick('football')} />
                    </div> */}
                
                {/* <div className='projects'>
                    <div className='project-items'>
                        <img src={flatify} alt='flatify' onClick={e => handleClick('flatify')} />
                    </div>
                    <div className='project-items'>
                        <img src={weather} alt='weather-app' onClick={e => handleClick('weather')} />
                    </div>
                </div> */}
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
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Demo"
                className="Modal"
                overlayClassName="Overlay"
            >
                <Demo title={title} closeModal={closeModal} />
            </Modal>
        </div>
    )
}

export default Main;