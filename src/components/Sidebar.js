import React from "react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
    return (
        <div>
            <ul id="sidebar-wrapper" className="pc-only">
                {SidebarData.map((value, key) => {
                    return (
                        <li
                            className="sidebar-link"
                            key={key}
                            onClick={() =>
                                (window.location.pathname = value.link)
                            }
                        >
                            <div className="sidebar-block">
                                <div>{value.icon}</div>
                                <p>{value.title}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
