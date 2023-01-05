
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
                    <div>
                        <h2>{title}</h2>
                        <div className='demo-modal-header'>
                            <h3>{data.title}</h3>
                            <button onClick={closeModal}>close</button>
                        </div>
                        <img src={data.img} alt={data.alt} />
                    </div>
                </SwiperSlide>)}
            
            {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
        </>
    )
}

export default Demo;