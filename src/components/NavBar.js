import Modal from 'react-modal';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Resume from './Resume';

function NavBar(){
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
        // subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }

    return(
        <>
            <nav>
                <h2 className='nav-logo'><a href="#home">Andrew Dziabo</a></h2>
                <div>
                    <ul id="navbar" className={clicked ? '#navbar' : '#navbar active'} onClick={() => setClicked(true)}>
                        <li><a className='nav-item' href="#about">about</a></li>
                        <li><a className='nav-item' href="#projects">projects</a></li>
                        {/* <li><a className='nav-item' href="#skills">skills</a></li> */}
                        <li><a className='nav-item' href="#contact">contact</a></li>
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
                    <Resume closeModal={closeModal} />
                </Modal>
            </nav>            
        </>
    )
}

export default NavBar;