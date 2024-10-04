import React from "react";

import { motion } from "framer-motion";
import { WorksData } from "./WorksData";

function Works() {
    return (
        <div>
            <section>
                <div className="section-wapper" id="works">
                    <h2 className="heading">works</h2>
                    <div className="works-block-wrapper">
                        {WorksData.map((value, key) => {
                            return (
                                <div className="works-block" key={key}>
                                    <motion.div
                                        initial={{ opacity: 0, y: +100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="mock-img-block">
                                            <img
                                                src={value.img_pc}
                                                className="mock-pc"
                                            ></img>
                                            <img
                                                src={value.img_sp}
                                                className="mock-sp"
                                            ></img>
                                        </div>
                                    </motion.div>
                                    <div className="works-text-block">
                                        <a target="_blank" href={value.link}>
                                            {value.link_title}
                                        </a>
                                        <p>{value.message}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Works;
