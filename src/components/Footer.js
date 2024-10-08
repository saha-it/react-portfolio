import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
    const pathname = useLocation().pathname;
    const top_page_path = "/react-portfolio/three";

    //topページにはフッターを表示しない
    if (pathname !== top_page_path) {
        return (
            <div>
                <div>
                    <footer>
                        <div>
                            <p>All Rights Reserved 2024</p>
                            <p>©︎ hayate kawatoko</p>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer;
