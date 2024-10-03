import React from "react";

/*swiper*/
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SkillsSlide(props) {
    return (
        <div>
            <Swiper
                effect={"cards"}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation, EffectCards]}
                className="swiper-container"
            >
                {props.SkillsDataObject.map((value, key) => (
                    <SwiperSlide key={key} className="skills-items">
                        <div>
                            <img src={value.image}></img>
                            <p className="skill-title">{value.skill_name}</p>
                            <span
                                className="star5_rating"
                                data-rate={value.star}
                            ></span>
                            <div className="skill-text-block">
                                <p>{value.skill_description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
