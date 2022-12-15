import {BsGithub} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {TfiEmail} from 'react-icons/tfi';

function SideBar(){
    return(
        <div className="sidebar">
            <div className='sidebar-top'></div>
            <div className='sidebar-logo'>
                <BsGithub />
            </div>
            <div className='sidebar-logo'>
                <AiFillLinkedin />
            </div>
            <div className='sidebar-logo'>
                <TfiEmail />
            </div>
        </div>
    )
}

export default SideBar;