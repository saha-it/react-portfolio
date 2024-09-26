import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUser,
    faLaptopCode,
    faBriefcase,
    faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
    {
        title: "TOP",
        icon: <FontAwesomeIcon icon={faHouse} />,
        link: "/react-portfolio",
    },
    {
        title: "ABOUT",
        icon: <FontAwesomeIcon icon={faUser} />,
        link: "/about",
    },
    {
        title: "SKILLS",
        icon: <FontAwesomeIcon icon={faLaptopCode} />,
        link: "/skills",
    },
    {
        title: "WORKS",
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        link: "/works",
    },
    {
        title: "CONTACT",
        icon: <FontAwesomeIcon icon={faSquareEnvelope} />,
        link: "/works",
    },
];
