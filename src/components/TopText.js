import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Top() {
    return (
        <div>
            <div id="top">
                <div className="top-name-block">
                    <p className="top-name">hayate kawatoko</p>
                </div>

                <div id="info-wrapper">
                    <p>ポートフォリオをご覧いただきありがとうございます。</p>
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
                        <p>約2週間</p>
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

                    <motion.div
                        initial={{ opacity: 0, y: +100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-block">
                            <p>
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    className="info-title"
                                />
                                目的
                            </p>
                            <p>
                                転職活動のため、また自分の現時点のスキルの総括として作成しました。
                                <br></br>
                                さらにせっかくならまだ経験したことのない技術に挑戦したかったので、Reactで実装しました。
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: +100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
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
                                    ・可能な限りReactのライブラリを使用し、アニメーション表示の練習をするように心がけました。
                                </li>
                                <li>
                                    ・TOPはスクロールアニメーション、ABOUTは3Dオブジェクトの表示、SKILLSはスライドショーといったように
                                    各ページに特徴的なアニメーションを実装しました。
                                </li>
                                <li>
                                    ・react
                                    routerを活用するために、1ページで完結するのではなくルーティングを設定してページを切り替えて表示する仕様にしました。
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: +100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-block">
                            <p>
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    className="info-title"
                                />
                                苦労した点
                            </p>
                            <ul className="difficult-block">
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
                                <li>
                                    ④3Dオブジェクトの読み込みが重すぎて他のアニメーションに影響がでてしまいました。
                                    そのためlazyを用いて3Dオブジェクトの読み込みを遅らせ、UXの改善を試みました。
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: +100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
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
                                    ・デザインはまだまだ改善できると思います。
                                    私自身これまでにバックエンドの業務が
                                    メインでしたので、デザインに関する知識は
                                    これから身に付けていきたいです。
                                </li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Top;
