import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Top() {
    return (
        <div>
            <div id="top">
                <div className="top-name-block">
                    <p className="top-name">hayate kawatoko</p>
                </div>
                <div id="info-wrapper">
                    <h3>本サイトの紹介</h3>
                    <div className="info-block">
                        <p>
                            <FontAwesomeIcon
                                icon={faPlay}
                                className="info-title"
                            />
                            概要
                        </p>
                        <p>ポートフォリオサイト</p>
                    </div>
                    <div className="info-block">
                        <p>
                            <FontAwesomeIcon
                                icon={faPlay}
                                className="info-title"
                            />
                            制作期間
                        </p>
                        <p>約1週間</p>
                    </div>
                    <div className="info-block">
                        <p>
                            <FontAwesomeIcon
                                icon={faPlay}
                                className="info-title"
                            />
                            使用ツール/スキル
                        </p>
                        <ul>
                            <li>・VisualStudioCode</li>
                            <li>・React</li>
                            <li>・node.js</li>
                            <li>・Github</li>
                        </ul>
                    </div>
                    <div className="info-block">
                        <p>
                            <FontAwesomeIcon
                                icon={faPlay}
                                className="info-title"
                            />
                            目的
                        </p>
                        <p>
                            せっかくならまだ経験したことのないReactで実装しようと
                            思いました。<br></br>
                            それに伴いjQueryは使わず、可能な限りReactのライブラリを
                            使用するように意識しました。
                        </p>
                    </div>
                    <div className="info-block">
                        <p>
                            <FontAwesomeIcon
                                icon={faPlay}
                                className="info-title"
                            />
                            工夫した点
                        </p>
                        <ul>
                            <li>
                                ・元々はHTML/CSS/JSで作っていたサイトをReactで書き直しました。
                            </li>
                            <li>
                                ・jQueryで記述していたフェードインなどの簡易的な
                                アニメーションをframer-motionというReactのライブラリに変更。
                                (ABOUTページ)
                            </li>
                            <li>
                                ・スライドショーをslick.jsからswiperという
                                Reactのライブラリに変更。(SKILLSページ)
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="info-block">
                        <p>
                            <FontAwesomeIcon
                                icon={faPlay}
                                className="info-title"
                            />
                            苦労した点
                        </p>
                        <ul>
                            <li>
                                ①適切なライブラリの選択<br></br>
                                例えばスライドショーを実装する際に元々はReact-slickというライブラリを使用していましたが、
                                拡張性や使いやすさを考慮し最終的にはswiperを選択しました。
                            </li>
                            <li>
                                ②ルーティング<br></br>
                                今まではLarevelのルーティングしか
                                実装したことがなかったため、Reactでルーティングを実装する方法や
                                必要なライブラリを1から勉強しました。
                            </li>
                            <li>
                                ③Reactにおけるstyle属性の記述方法<br></br>
                                Reactでは文字列ではなくオブジェクトを使用します。しかし、公式ドキュメントでは動的なスタイル以外に
                                使用するのは非推奨ともされています。ただ私の場合はアニメーションのライブラリを使用する際はデフォルトで
                                スタイルが適用されている場合が多かったので、その箇所を修正する際に必要な知識となりました。
                            </li>
                        </ul>
                    </div>
                    <div className="info-block">
                        <p>
                            <FontAwesomeIcon
                                icon={faPlay}
                                className="info-title"
                            />
                            課題
                        </p>
                        <ul>
                            <li>
                                ・デザインをもう少し改善できると思います。
                                私自身これまでにバックエンドの業務が
                                メインでしたので、デザインに関する知識は
                                これから身に付けていきたいです。
                            </li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top;
