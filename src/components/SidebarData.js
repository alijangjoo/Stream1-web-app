import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
//import {Accounts, Live, LiveHistory, CreateAccount, ManageAccount, Plans} from './pages/Instagram'
export const SidebarData = [
    {
        title: "Instagram",
        path: "/Index",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Accounts",
                path: "/Instagram/Accounts",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Create Account",
                path: "/Instagram/CreateAccount",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Live",
                path: "/Instagram/Live",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Live History",
                path: "/Instagram/LiveHistory",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Manage Account",
                path: "/Instagram/ManageAccount",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Plans",
                path: "/Instagram/Plans",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "About Us",
        path: "/about-us",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Our Aim",
                path: "/about-us/aim",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Our Vision",
                path: "/about-us/vision",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Services",
        path: "/services",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Service 1",
                path: "/services/services1",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Service 2",
                path: "/services/services2",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Service 3",
                path: "/services/services3",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Events",
        path: "/events",
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Event 1",
                path: "/events/events1",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Event 2",
                path: "/events/events2",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Support",
        path: "/support",
        icon: <IoIcons.IoMdHelpCircle />,
    },
];