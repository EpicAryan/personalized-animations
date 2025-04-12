"use client";

import Link from "next/link";
import React, { useState } from "react"; // Import useState
import {
    // HomeIcon,
    // InformationCircleIcon,
    // // BriefcaseIcon,
    // EnvelopeIcon,
    // Squares2X2Icon,
    ChevronDownIcon,
    ChevronUpIcon,
    ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";

type NavLinkType = {
    href: string;
    label: string;
    // icon?: React.ComponentType<React.ComponentProps<typeof Squares2X2Icon>>;
};

type NavSectionType = {
    title: string;
    links: NavLinkType[];
};

// Define your navigation sections
const navSections: NavSectionType[] = [
    {
        title: "Buttons",
        links: [
            { href: "/components/buttons/radiant-button", label: "Radiant Button"},
        ],
    },
    {
        title: "Cards",
        links: [
            { href: "/components/cards/ghost-card", label: "Ghost Card"},
        ],
    },
    // {
    //     title: "Essential Components",
    //     links: [
    //         {
    //             href: "/components/buttons",
    //             label: "Buttons",
    //             icon: Squares2X2Icon,
    //         }, // Example components
    //         { href: "/components/cards", label: "Cards", icon: Squares2X2Icon },
    //         { href: "/components/forms", label: "Forms", icon: Squares2X2Icon },
    //     ],
    // },
    // {
    //     title: "Advanced Components",
    //     links: [
    //         {
    //             href: "/components/modals",
    //             label: "Modals",
    //             icon: Squares2X2Icon,
    //         }, // More example components
    //         {
    //             href: "/components/carousels",
    //             label: "Carousels",
    //             icon: Squares2X2Icon,
    //         },
    //         {
    //             href: "/components/animations",
    //             label: "Animations",
    //             icon: Squares2X2Icon,
    //         }, // Example using a different icon
    //     ],
    // },
    // {
    //     title: "Utility Pages",
    //     links: [
    //         { href: "/services", label: "Services Page", icon: BriefcaseIcon },
    //     ],
    // },
];

const Sidebar = () => {
    const [collapsedSections, setCollapsedSections] = useState<{
        [key: string]: boolean;
    }>({});

    const toggleSection = (title: string) => {
        setCollapsedSections((prevState) => ({
            ...prevState,
            [title]: !prevState[title],
        }));
    };

    return (
        <aside className="fixed top-0 left-0 h-full border-r-1 border-l-0 border-t-0 border-b-0 border-gray-700/50 text-white w-64 overflow-y-auto"
        style={{ boxShadow: '5px 0 20px 0px rgba(0, 0, 0, 0.15)' }} >
            <div className="p-6 flex justify-start items-center">     
                <Link
                    href="/"
                    className="flex items-center hover:text-blue-300 transition-colors duration-200 "
                >
                    <ArrowUturnLeftIcon className="h-5 w-5 text-gray-400 transition-colors duration-200 hover:text-blue-300" />
                </Link>
                <div className="text-center flex-grow">
                    <span className="text-xl font-bold tracking-tight">
                        <span className="text-blue-500">Animated</span>
                        <span className="text-white">UI</span>
                    </span>
                </div>
            </div>
            <nav className="mt-4">
                <div className="text-md text-gray-200  px-4">Components</div>
                <hr className="text-gray-700 m-2" />
                {navSections.map((section) => (
                    <div key={section.title} className="mb-4">
                        <SectionHeader
                            title={section.title}
                            isCollapsed={!!collapsedSections[section.title]}
                            onToggle={() => toggleSection(section.title)}
                        />
                        <SectionLinks
                            links={section.links}
                            isCollapsed={!!collapsedSections[section.title]}
                        />
                    </div>
                ))}
            </nav>
        </aside>
    );
};

// Section Header Component (Collapsible Title)
const SectionHeader = ({
    title,
    isCollapsed,
    onToggle,
}: {
    title: string;
    isCollapsed: boolean;
    onToggle: () => void;
}) => {
    return (
        <button
            className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
            onClick={onToggle}
            aria-expanded={!isCollapsed}
            aria-controls={`${title
                .replace(/\s+/g, "-")
                .toLowerCase()}-section`}
        >
            <span className="font-semibold text-sm">{title}</span>
            {isCollapsed ? (
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            ) : (
                <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            )}
        </button>
    );
};

// Section Links Component (Conditionally Rendered)
const SectionLinks = ({
    links,
    isCollapsed,
}: {
    links: NavLinkType[];
    isCollapsed: boolean;
}) => {
    if (isCollapsed) {
        return null;
    }

    return (
        <ul
            className="mt-1"
            id={`${links[0]?.label
                ?.replace(/\s+/g, "-")
                .toLowerCase()}-section`}
            aria-hidden={isCollapsed}
        >
            {links.map((link) => (
                <li key={link.href} className="mb-1 px-2">
                    <NavItem link={link} />
                </li>
            ))}
        </ul>
    );
};

// Reusable NavItem Component (unchanged from previous version, but adjusted padding)
const NavItem = ({ link }: { link: NavLinkType }) => {
    const { href, label } = link;

    return (
        <Link
            href={href}
            className="flex items-center ml-4 py-1.5 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200 text-xs"
        >
            {/* {Icon && <Icon className="h-4 w-4 text-gray-400" />} */}
            <span className="font-medium">{label}</span>
        </Link>
    );
};

export default Sidebar;
