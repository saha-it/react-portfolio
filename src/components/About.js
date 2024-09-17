import React from "react";

function About() {
    return (
        <div>
            <section>
                <div class="section-wapper" id="profile">
                    <h2 class="heading">about</h2>
                    <div class="prof-block">
                        <div class="prof-left-block fadein">
                            <img src="images/prof2.jpg"></img>
                        </div>
                        <div class="prof-right-block fadein">
                            <h3>川床　颯</h3>
                            <p>( 鹿児島生まれ / 神奈川県横浜市在住 / 28歳 )</p>
                            <p>
                                鹿児島生まれ。 大学に入学するタイミングで上京。
                                <br></br>
                                文系の学部から新卒でITの世界に挑戦。<br></br>
                                これまでの業務では主にバックエンドに携わってきました。
                                <br></br>
                                フロントエンドに転向したくなったのでただいま勉強中。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
