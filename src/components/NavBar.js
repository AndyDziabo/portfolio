import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

function NavBar(){
    const [clicked, setClicked] = useState(true);

    function handleClick(){
        setClicked(!clicked)
    }
    return(
        <>
            <nav>
                <h2>Andrew Dziabo</h2>
                <div>
                    <ul id="navbar" className={clicked ? '#navbar' : '#navbar active'}>
                        <li><a href="main.js">about</a></li>
                        <li><a href="main.js">projects</a></li>
                        <li><a href="main.js">skills</a></li>
                        <li><a href="main.js">resume</a></li>
                        <li><a href="main.js">contact</a></li>
                    </ul>
                </div>
                <div id='mobile' onClick={handleClick}>
                    {clicked ? <GiHamburgerMenu /> : <AiOutlineClose /> }
                </div>
            </nav>            
        </>
    )
}

export default NavBar;