import Modal from 'react-modal';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

function NavBar(){
    let subtitle;
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
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }

    return(
        <>
            <nav>
                <h2 className='nav-logo'><a href="#home">Andrew Dziabo</a></h2>
                <div>
                    <ul id="navbar" className={clicked ? '#navbar' : '#navbar active'}>
                        <li><a className='nav-item' href="#about">about</a></li>
                        <li><a className='nav-item' href="#projects">projects</a></li>
                        <li><a className='nav-item' href="#skills">skills</a></li>
                        <li className='nav-item' onClick={openModal}>resume</li>
                        <li><a className='nav-item' href="#contact">contact</a></li>
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
                className="Modal"
                overlayClassName="Overlay"
            >
                <h2>Resume</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
            </Modal>
            </nav>            
        </>
    )
}

export default NavBar;