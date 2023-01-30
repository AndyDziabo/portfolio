import { CgCloseO } from 'react-icons/cg';

function Video({ title, demoObj, closeModal }) {
    return(
        <div className='demo-slide-container'>
            <h2>{title}</h2>
            <div className='demo-modal-header'>
                <h3>{demoObj.title}</h3>
                <CgCloseO className='close' onClick={closeModal} />
            </div>
            <div className='demo-img-container'>
                <video className='video' width={"90%"} height={"90%"} controls >
                    <source src={demoObj.vid} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default Video;