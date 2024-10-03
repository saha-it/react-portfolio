import React from "react";
import { motion } from "framer-motion";
import prof_img_pc from "../images/prof2.jpg";
import prof_img_sp from "../images/prof5.jpg";

function About() {
    return (
        <div>
            <section>
                <div class="section-wapper" id="profile">
                    <h2 class="heading">about</h2>
                    <div class="prof-block">
                        <motion.div
                            id="prof-left-block"
                            className=""
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <img src={prof_img_pc} className="pc-only"></img>
                            <img src={prof_img_sp} className="sp-only"></img>
                        </motion.div>

                        <motion.div
                            id="prof-right-block"
                            initial={{ opacity: 0, x: +100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <h3>川床　颯</h3>
                            <p>( 鹿児島生まれ / 神奈川県横浜市在住 / 28歳 )</p>
                            <p>
                                鹿児島生まれ。 大学に入学するタイミングで上京。
                                <br></br>
                                文系の学部から新卒でITの世界に挑戦。
                                <br></br>
                                これまでの業務では主にバックエンドに携わってきました。
                                <br></br>
                                フロントエンドに転向したくなったのでただいま勉強中。
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
