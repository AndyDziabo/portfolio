import { CgCloseO } from 'react-icons/cg';

function Resume({ closeModal }) {
    
    return(
        <div className="resume">
            <h1 className="resume-name">Andrew Dziabo</h1>
            <div className="resume-contact">Cresson, PA | 814-207-0577 | 
                <span className="resume-email" onClick={(e) => {window.location.href ='mailto:jameszabo@yahoo.com';}}> jameszabo@yahoo.com</span>
            </div>
            <div className="resume-contact">
                <a href="https://www.linkedin.com/in/andrewdziabo/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
                  | 
                <a href="https://github.com/AndyDziabo" target="_blank" rel="noopener noreferrer"> GitHub </a>
                  | 
                <a href="https://dev.to/andydziabo" target="_blank" rel="noopener noreferrer"> Blog </a>
            </div>
            <br></br>
            <h3 className="resume-section-title">SOFTWARE ENGINEER</h3>
            <div className="resume-line"></div>
            <p className="resume-about">Software Engineer skilled in Ruby on Rails and JavaScript based 
                programming. Strong leadership and project management skills. 
                Comfortable taking on large challenges and diving into the unknown.
            </p>
            <br></br>
            <h3 className="resume-section-title">TECHNICAL SKILLS</h3>
            <div className="resume-line"></div>
            <div className="resume-skills">Ruby, Rails, SQL, JavaScript, React, Redux, Linux ( Ubuntu ), GitHub,  Adobe Photoshop, Adobe Freehand</div>
            <br></br>
            <h3 className="resume-section-title">TECHNICAL PROJECTS</h3>
            <div className="resume-line"></div>
            <div className="proj-title"><h3>Adventure Game</h3> - GitHub</div>
            <p>Top down view adventure game with user login, new game, saved games, key settings and highscore features.</p>
            <ul>
                <li>Full-stack project with a React frontend and a Rails backend</li>
                <li>Utilizes Redux for state management</li>
                <li>Single page application with multiple client-side routes using React Router</li>
                <li>Implemented authentication/authorization including password protection using bcrypt</li>
                <li>Custom CSS for character movement and animation</li>
            </ul>
            <br></br>
            <div className="proj-title"><h3>Drift World</h3> - GitHub</div>
            <p>Social app for the drifting community that provides: classifieds, events, services, and media sections.</p>
            <ul>
                <li>Full-stack project with a React frontend and a Rails backend</li>
                <li>Single page application with multiple client-side routes using React Router</li>
                <li>Implemented authentication/authorization including password protection using bcrypt</li>
                <li>Validations for new user sign up and existing user login</li>
                <li>User access to edit and delete resources only if they are the creator of that resource</li>
            </ul>
            <br></br>
            <div className="proj-title"><h3>Fantasy Football</h3> - GitHub - Frontend - Backend</div>
            <p>A fantasy football app that lets you sign up the users in your league, run a draft, and then manage your team. </p>
            <ul>
                <li>Using ESPN API to seed the database with all the current NFL players with their information</li>
                <li>Building a Sinatra API backend that uses Active Record</li>
                <li>Building a React frontend that interacts with the database via the API</li>
                <li>Created multiple models with one-to-many relationships as well as many-to-many relationships</li>
                <li>Implemented full CRUD capability for the models</li>
            </ul>
            <br></br>
            <h3 className="resume-section-title">PROFESSIONAL EXPERIENCE</h3>
            <div className="resume-line"></div>
            <div className="experience">
                <div><h3>Sollco</h3></div>
                <div>New Florence, PA</div>
            </div>
            <div className="experience">
                <div>Power Plant Material Processing Operator</div>
                <div>01/2005 - 07/2022</div>
            </div>
            <ul>
                <li>Troubleshooting both electrical and mechanical issues to determine repairs needed </li>
                <li>Planning out repairs and coordinating with other areas of the facility for outages</li>
                <li>As control room operator which involved controlling all the equipment in the facility, 
                    directing workers to issues that arise, coordinating down time with all areas and workers
                </li>
            </ul>
            <br></br>
            <h3 className="resume-section-title">EDUCATION</h3>
            <div className="resume-line"></div>
            <div className="experience">
                <div><h3>Flatiron School</h3></div>
                <div>Online</div>
            </div>
            <div className="experience">
                <div>Full Stack Web Development, Ruby on Rails, React, Redux and JavaScript program</div>
                <div>Graduated 11/2022</div>
            </div>
            <br></br>
            <div className="experience">
                <div><h3>Purdue University</h3></div>
                <div>West Lafayette, IN</div>
            </div>
            <div className="experience">
                <div>Bachelor’s Degree, Computer Graphics </div>
                <div>Graduated 05/2003</div>
            </div>  
        </div>
    )
}

export default Resume;