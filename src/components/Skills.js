import React from "react";

import SkillsSlide from "./SkillsSlide";

/*slide*/
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCards } from "swiper/modules";
import "swiper/css/effect-cards";

/*slide data*/
import { FrontendSkillsData } from "./FrontendSkillsData";
import { BackendSkillsData } from "./BackendSkillsData";
import { OthersSkillsData } from "./OthersSkillsData";
import { transform } from "framer-motion";
import { style } from "framer-motion/client";

const styles = {
    /* swiperSlide: {
        transform: "unset",
    }, */
    swiperButtonPrev: {
        left: "0",
    },
};

function Skills() {
    return (
        <div>
            <section>
                <div className="section-wapper" id="skills">
                    <h2 className="heading">skills</h2>
                    <div className="skills-block-wrapper">
                        <div className="skills-block">
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
                            <SkillsSlide
                                SkillsDataObject={FrontendSkillsData}
                            />
                        </div>

                        <div className="skills-block">
                            <p className="skill-type">BACKEND</p>
                            <ul className="skills-list">
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>livewire</li>
                            </ul>
                            <SkillsSlide SkillsDataObject={BackendSkillsData} />
                        </div>

                        <div className="skills-block">
                            <p className="skill-type">OTHERS</p>
                            <ul className="skills-list">
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>Git</li>
                                <li>Docker</li>
                                <li>API</li>
                            </ul>
                            <SkillsSlide SkillsDataObject={OthersSkillsData} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;
