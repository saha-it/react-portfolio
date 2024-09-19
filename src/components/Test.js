import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Test() {
    const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
    return (
        <div>
            <div className="swiper-container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {data.map((d, key) => (
                        <SwiperSlide key={key}>
                            <div
                                style={{ background: "grey", height: "300px" }}
                            >
                                {d}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Test;
