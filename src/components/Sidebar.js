import React from "react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
    return (
        <div>
            <ul id="sidebar-wrapper">
                {SidebarData.map((value, key) => {
                    return (
                        <li
                            className="sidebar-link"
                            key={key}
                            onClick={() =>
                                (window.location.pathname = value.link)
                            }
                        >
                            <div>{value.icon}</div>
                            <p>{value.title}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
