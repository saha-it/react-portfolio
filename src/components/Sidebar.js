import React from "react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
    return (
        <div>
            {SidebarData.map((value, key) => {
                return (
                    <li
                        key={key}
                        onClick={() => (window.location.pathname = value.link)}
                    >
                        <div>{value.icon}</div>
                        <p>{value.title}</p>
                    </li>
                );
            })}
        </div>
    );
}

export default Sidebar;
