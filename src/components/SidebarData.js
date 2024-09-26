import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUser,
    faLaptopCode,
    faBriefcase,
    faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const APP_NAME = "react-portfolio";

export const SidebarData = [
    {
        title: "TOP",
        icon: <FontAwesomeIcon icon={faHouse} />,
        link: APP_NAME + "/",
    },
    {
        title: "ABOUT",
        icon: <FontAwesomeIcon icon={faUser} />,
        link: APP_NAME + "/about",
    },
    {
        title: "SKILLS",
        icon: <FontAwesomeIcon icon={faLaptopCode} />,
        link: APP_NAME + "/skills",
    },
    {
        title: "WORKS",
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        link: APP_NAME + "/works",
    },
    {
        title: "CONTACT",
        icon: <FontAwesomeIcon icon={faSquareEnvelope} />,
        link: APP_NAME + "/works",
    },
];
