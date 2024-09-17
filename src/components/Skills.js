import React from "react";

function Skills() {
    return (
        <div>
            <section>
                <div class="section-wapper" id="skills">
                    <h2 class="heading">skills</h2>
                    {/* <div class="skills-block-wrapper">
                        <p class="skill-type">FRONTEND</p>
                        <ul class="skills-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Tailwind</li>
                            <li>daisyUI</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>TypeScript</li>
                            <li>Vue.js</li>
                        </ul>
                        <div class="skills-block">
                            <ul class="slider skills-items js-slick">
                                <li>
                                    <img src="images/HTML.png"></img>
                                    <p class="skill-title">HTML</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="4"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>
                                            フロントエンドに転向を決めてから勉強を続けています。
                                            適切なタグやidとclassを使い分けるのはもちろん、
                                            可読性の高いコーディングを意識しています。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/CSS.png"></img>
                                    <p class="skill-title">CSS</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="4"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>
                                            こちらも日々勉強中です。
                                            ただページの体裁を整えるだけではなく、
                                            できる限り簡潔に記述できるように心がけています。
                                            また、レスポンシブデザインも可能です。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/tailwind.png"></img>
                                    <p class="skill-title">Tailwind</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="4"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>
                                            以前のプロジェクトで使用していました。
                                            <br></br>
                                            基本的なものでしたらクラス名を見ただけスタイルの内容も理解できます。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/daisyUI.png"></img>
                                    <p class="skill-title">daisyUI</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="4"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>
                                            簡単なカスタマイズでしたら可能です。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/javascript.png"></img>
                                    <p class="skill-title">JavaScript</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="4"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>
                                            Webサイトでよく見るハンバーガーメニューやフェードインなどの
                                            基本的な動作は実装できます。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/jQuery.png"></img>
                                    <p class="skill-title">jQuery</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="3"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>
                                            時間があるときはjQueryのプラグインを調べています。
                                            理想の動きをスムーズに実装できるように
                                            引き出しを増やしている最中です。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/Typescript.png"></img>
                                    <p class="skill-title">Typescript</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="2"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>
                                            データの型など最低限のルールは把握しています。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/Vuejs.png"></img>
                                    <p class="skill-title">Vue.js</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="3"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>
                                            ハンバーガーメニューやスライダーなどの
                                            コンポーネントを作成した経験があります。
                                            人気のあるモダンなフレームワークなのでこちらも勉強中です。
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <p class="skill-type">BACKEND</p>
                        <div class="skills-block">
                            <ul class="skills-list">
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>livewire</li>
                            </ul>
                            <ul class="slider skills-items js-slick">
                                <li>
                                    <img src="images/php.png"></img>
                                    <p class="skill-title">PHP</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="4"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>
                                            約2年ほど実務経験があります。
                                            MVCモデルやルーティングの理解はできています。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/Laravel.png"></img>
                                    <p class="skill-title">Laravel</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="4"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>
                                            こちらも2年ほどの実務経験があります。
                                            DBの操作に加え、エンドポイントの作成、
                                            APIの呼び出しなども可能です。
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/Livewire.png"></img>
                                    <p class="skill-title">livewire</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="3"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>
                                            動的なページをPHPのみで可能にするライブラリです。
                                            1年ほど実務経験があります。
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <p class="skill-type">OTHERS</p>
                        <div class="skills-block">
                            <ul class="skills-list">
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>Git</li>
                                <li>Docker</li>
                                <li>API</li>
                            </ul>
                            <ul class="slider skills-items js-slick">
                                <li>
                                    <img src="images/MySQL.png"></img>
                                    <p class="skill-title">MySQL</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="3"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>基本的な操作は可能です。</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/PostgreSQL.png"></img>
                                    <p class="skill-title">PostgreSQL</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="3"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>基本的な操作は可能です。</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/git.png"></img>
                                    <p class="skill-title">Git</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="3"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>基本的な操作は可能です。</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/docker.png"></img>
                                    <p class="skill-title">docker</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="3"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>基本的な操作は可能です。</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/API.png"></img>
                                    <p class="skill-title">API</p>
                                    <span
                                        class="star5_rating"
                                        data-rate="3"
                                    ></span>
                                    <div class="skill-text-block">
                                        <p>基本的な操作は可能です。</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Skills;
