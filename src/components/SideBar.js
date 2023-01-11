import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaDev } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

function SideBar(){
    return(
        <div className="sidebar">
            <div className='sidebar-top'></div>
            <div className='sidebar-logo-container'>
                <div className='sidebar-logo'>
                    <a href="https://github.com/AndyDziabo" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                </div>
                <div className='sidebar-logo'>
                    <a href="https://www.linkedin.com/in/andrewdziabo/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                </div>
                <div className='sidebar-logo'>
                    <a href="https://dev.to/andydziabo" target="_blank" rel="noopener noreferrer"><FaDev /></a>
                </div>
                <div className='sidebar-logo'>
                <a href="#contact"><TfiEmail /></a>
                </div>
            </div>
        </div>
    )
}

export default SideBar;