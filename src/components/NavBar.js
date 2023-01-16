import Modal from 'react-modal';
import Scrollbar from 'react-scrollbars-custom';
import { CgCloseO } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Resume from './Resume';

function NavBar({ setTarget }){
    const [modalIsOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState(true);

    function handleClick(){
        setClicked(!clicked)
    }

    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
    
      function closeModal() {
        setIsOpen(false);
      }

      function targetScroll(link) {
        setTarget(link);
      }

    return(
        <>
            <nav>
                <h2 className='nav-logo' onClick={() => targetScroll('home')}>Andrew Dziabo</h2>
                <div>
                    <ul id="navbar" className={clicked ? '#navbar' : '#navbar active'} onClick={() => setClicked(true)}>
                        <li className='nav-item' onClick={() => targetScroll('about')}>about</li>
                        <li className='nav-item' onClick={() => targetScroll('projects')}>projects</li>
                        {/* <li><a className='nav-item' href="#skills">skills</a></li> */}
                        <li className='nav-item' onClick={() => targetScroll('contact')}>contact</li>
                        <li className='nav-item' onClick={openModal}>resume</li>
                    </ul>
                </div>
                <div id='mobile' onClick={handleClick}>
                    {clicked ? <GiHamburgerMenu /> : <AiOutlineClose /> }
                </div>
                <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Adventure Game"
                className="resume-modal"
                overlayClassName="resume-overlay"
                >
                    <>
                        <div className="resume-header">
                            <a href={require("../assets/Dziabo_A_Resume.docx")} download="Dziabo_A_Resume">
                            <button className='download-btn'>Download</button>
                            </a>
                            <CgCloseO className='close' onClick={closeModal} />
                        </div>
                        <Scrollbar noDefaultStyles className="card__scrollbar" style={{ width: "100%", height: "95%" }}>
                            <Resume />
                        </Scrollbar>
                    </>
                </Modal>
            </nav>            
        </>
    )
}

export default NavBar;