import React from "react";

function Works() {
    return (
        <div>
            <section>
                <div class="section-wapper" id="works">
                    <h2 class="heading">works</h2>
                    <div class="works-block-wrapper">
                        <div class="works-block">
                            <img src="brand-images/clothing.jpg"></img>
                            <a href="./brand.html">
                                中古ハイブランド買取サイト(架空サイト)
                            </a>
                            <p>プロジェクトで実装したページの再現です。</p>
                        </div>
                        <div class="works-block">
                            <img src="LP/cafe/images/TOP.jpg"></img>
                            <a href="LP/cafe/cafe.html">cafe</a>
                        </div>
                        <div class="works-block">
                            <div class="mock-img-block">
                                <img
                                    src="images/mock-company-pc.png"
                                    class="mock-pc"
                                ></img>
                                <img
                                    src="images/mock-company-sp.png"
                                    class="mock-sp"
                                ></img>
                            </div>
                            <div class="works-text-block">
                                <a href="LP/company/company.html">
                                    架空企業サイト(架空サイト)
                                </a>
                                <p>デザインの勉強として作成しました。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Works;
