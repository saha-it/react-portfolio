import React from "react";

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
