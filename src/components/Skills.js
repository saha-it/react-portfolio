import React from "react";

/*slide*/
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

/*slide data*/
import { FrontendSkillsData } from "./FrontendSkillsData";
import { BackendSkillsData } from "./BackendSkillsData";
import { OthersSkillsData } from "./OthersSkillsData";

function Skills() {
    return (
        <div>
            <section>
                <div className="section-wapper" id="skills">
                    <h2 className="heading">skills</h2>
                    <div className="skills-block-wrapper">
                        <p className="skill-type">FRONTEND</p>
                        <ul className="skills-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Tailwind</li>
                            <li>daisyUI</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>TypeScript</li>
                            <li>Vue.js</li>
                        </ul>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="skills-block"
                        >
                            {FrontendSkillsData.map((value, key) => (
                                <SwiperSlide
                                    key={key}
                                    className="slider skills-items js-slick"
                                >
                                    <li>
                                        <img src={value.image}></img>
                                        <p className="skill-title">
                                            {value.skill_name}
                                        </p>
                                        <span
                                            className="star5_rating"
                                            data-rate={value.star}
                                        ></span>
                                        <div className="skill-text-block">
                                            <p>{value.skill_description}</p>
                                        </div>
                                    </li>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <p className="skill-type">BACKEND</p>
                        <div className="skills-block">
                            <ul className="skills-list">
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>livewire</li>
                            </ul>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="skills-block"
                            >
                                {BackendSkillsData.map((value, key) => (
                                    <SwiperSlide
                                        key={key}
                                        className="slider skills-items js-slick"
                                    >
                                        <li>
                                            <img src={value.image}></img>
                                            <p className="skill-title">
                                                {value.skill_name}
                                            </p>
                                            <span
                                                className="star5_rating"
                                                data-rate={value.star}
                                            ></span>
                                            <div className="skill-text-block">
                                                <p>{value.skill_description}</p>
                                            </div>
                                        </li>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <p className="skill-type">OTHERS</p>
                        <div className="skills-block">
                            <ul className="skills-list">
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>Git</li>
                                <li>Docker</li>
                                <li>API</li>
                            </ul>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="skills-block"
                            >
                                {OthersSkillsData.map((value, key) => (
                                    <SwiperSlide
                                        key={key}
                                        className="slider skills-items js-slick"
                                    >
                                        <li>
                                            <img src={value.image}></img>
                                            <p className="skill-title">
                                                {value.skill_name}
                                            </p>
                                            <span
                                                className="star5_rating"
                                                data-rate={value.star}
                                            ></span>
                                            <div className="skill-text-block">
                                                <p>{value.skill_description}</p>
                                            </div>
                                        </li>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;
