import { CgCloseO } from 'react-icons/cg';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper';

function Demo({ title, imgArr, closeModal }) {

    return(
        <>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true} 
            modules={[Pagination, Navigation]}
            className="demoSwiper"
        >
            {imgArr.map((data) => 
                <SwiperSlide className='demo-slide' key={data.alt}>
                    <div className='demo-slide-container'>
                        <h2>{title}</h2>
                        <div className='demo-modal-header'>
                            <h3>{data.title}</h3>
                            <CgCloseO className='close' onClick={closeModal} />
                        </div>
                        <div className='demo-img-container'>
                            <img src={data.img} alt={data.alt} />
                        </div>
                        
                    </div>
                </SwiperSlide>)}
        </Swiper>
        </>
    )
}

export default Demo;