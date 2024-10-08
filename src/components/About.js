import React from "react";
import { motion } from "framer-motion";
import prof_img_pc from "../images/about/prof2.jpg";
import prof_img_sp from "../images/about/prof5.jpg";

function About() {
    return (
        <div>
            <section>
                <div class="section-wapper" id="profile">
                    <h2 class="heading">about</h2>
                    <div class="prof-block">
                        <motion.div
                            id="prof-left-block"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <img src={prof_img_sp}></img>
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
                            <p>
                                実装機能→CMS、テスター、フロントデザイン改修、エンドポイント作成
                                （職務経歴書みたいな）
                            </p>
                            <p>
                                詳しい分野→チョコレート、カフェ、スイーツ、サッカー、ハイブランド、ゲーム、e-sport、フランス文学
                            </p>
                            <p></p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
