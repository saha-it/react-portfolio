import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { SidebarData } from "./SidebarData";

export default (props) => {
    return (
        <div>
            <Menu {...props}>
                <ul id="">
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
            </Menu>
        </div>
    );
};
