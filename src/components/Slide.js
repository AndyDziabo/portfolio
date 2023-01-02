import game from '../assets/game/game_mainmenu.png';

function Slide({ handleClick }) {
    return(
        <>
            <h2>Adventure Game</h2>
            <div className='swiper-description-container'>
                <img src={game} alt='adventure-game' />
                <div className='swiper-text'>
                    <p>Top down view adventure game with user login, new game, saved games, key settings and highscore features</p>
                    <ul className='swiper-list'>
                        <li>Full-stack project with a React frontend and a Rails backend</li>
                        <li>Utilizes Redux for state management</li>
                        <li>Single page application with multiple client-side routes using React Router</li>
                        <li>Implemented authentication/authorization including password protection using bcrypt</li>
                        <li>Custom CSS for character movement and animation</li>
                   </ul>
                     <img className='vid-link' src={game} alt='adventure-demo' onClick={e => handleClick('game')} />
                </div>
            </div>
        </>
    )
}

export default Slide;