import React from "react";
import Hamburger from "./Hamburger";

/*デフォルトのstyleを修正したい場合は下記に記述*/
const styles = {
    bmMenu: {
        overflow: "hidden",
    },
    bmCrossButton: {
        right: "30px",
        width: "30px",
        height: "40px",
    },
    bmCross: {
        height: "30px",
        width: "4px",
    },
};

function Header() {
    return (
        <div>
            <header>
                <div class="header-wrapper">
                    <p class="header-name">hayate kawatoko</p>
                    <Hamburger right noOverlay styles={styles} />
                </div>
            </header>
        </div>
    );
}

export default Header;
