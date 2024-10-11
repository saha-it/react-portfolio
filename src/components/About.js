import React from "react";
import { lazy } from "react";
import { motion } from "framer-motion";
import prof_img_pc from "../images/about/prof2.jpg";
import prof_img_sp from "images/about/prof.png";

//3Dmodel
const ChocolateModel = lazy(() => import("./ChocolateModel"));
const EarthModel = lazy(() => import("./EarthModel"));
const BookModel = lazy(() => import("./BookModel"));

function About() {
    return (
        <div>
            <section>
                <div class="section-wapper" id="profile">
                    <h2 class="heading">ABOUT</h2>
                    <div class="prof-block">
                        <motion.div
                            id="prof-left-block"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, delay: 2 }}
                        >
                            <img src={prof_img_sp}></img>
                        </motion.div>

                        <div className="about-content-wrapper">
                            <p className="about-heading">PROFILE</p>
                            <div className="about-content">
                                <div className="about-3d-block">
                                    <motion.div
                                        initial={{ opacity: 0, x: +100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 2, delay: 2 }}
                                    >
                                        <EarthModel />
                                    </motion.div>
                                </div>
                                <div className="about-text-block">
                                    <h3>川床　颯</h3>
                                    <p>
                                        ( 鹿児島生まれ / 神奈川県横浜市在住 /
                                        28歳 )
                                    </p>
                                    <p>
                                        鹿児島生まれ。
                                        大学に入学するタイミングで上京。
                                        <br></br>
                                        文系の学部から新卒でITの世界に挑戦。
                                        <br></br>
                                        これまでの業務では主にバックエンドに携わってきました。
                                        <br></br>
                                        フロントエンドに転向したくなったのでただいま勉強中。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="about-content-wrapper">
                            <p className="about-heading">INTEREST</p>
                            <div className="about-content">
                                <div className="about-3d-block">
                                    <motion.div
                                        initial={{ opacity: 0, x: +100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 2, delay: 2 }}
                                    >
                                        <ChocolateModel />
                                    </motion.div>
                                </div>
                                <div className="about-text-block">
                                    <p>
                                        ・チョコレート<br></br>
                                        ・カフェ<br></br>
                                        ・スイーツ<br></br>
                                        ・サッカー<br></br>
                                        ・ゲーム<br></br>
                                        ・e-sport<br></br>
                                        ・フランス文学<br></br>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="about-content-wrapper">
                            <p className="about-heading">STRONG POINT</p>
                            <div className="about-content">
                                <div className="about-3d-block">
                                    <motion.div
                                        initial={{ opacity: 0, x: +100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 2, delay: 2 }}
                                    >
                                        <BookModel />
                                    </motion.div>
                                </div>
                                <div className="about-text-block">
                                    <p>
                                        好奇心旺盛で新しいことに挑戦する気持ちが強い
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
