import { MdOutlineAttachMoney, MdOutlineLeaderboard } from "react-icons/md";
import { RiSpeakAiLine, RiRobot3Line } from "react-icons/ri";
import { GrTask } from "react-icons/gr";
import { LuUserCog, LuFolderSync } from "react-icons/lu";
import { TbDeviceAnalytics } from "react-icons/tb";
import { GiUpgrade } from "react-icons/gi";
import { IoAnalytics } from "react-icons/io5";

export const Menuitems = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About Us",
    href: "/about-us",
  },
  {
    id: 3,
    title: "Features",
    column: 4,
    href: "/features",
    children: [
      {
        id: 4,
        title: "Customer Management",
        href: "#",
        icon: IoAnalytics,
      },
      {
        id: 5,
        title: "Lead Management",
        href: "#",
        icon: MdOutlineLeaderboard,
      },
      {
        id: 6,
        title: "Sales Pipeline Management",
        href: "#",
        icon: MdOutlineAttachMoney,
      },
      {
        id: 7,
        title: "Marketing Automation",
        icon: RiSpeakAiLine,
        href: "#",
      },
      {
        id: 8,
        title: "Task & Workflow Automation",
        icon: GrTask,
        href: "#",
      },
      {
        id: 9,
        title: "Customer Support Tools",
        icon: LuUserCog,
        href: "#",
      },
      {
        id: 10,
        title: "Reports & Analytics",
        icon: TbDeviceAnalytics,
        href: "#",
      },
      {
        id: 11,
        title: "Integration Capabilities",
        icon: LuFolderSync,
        href: "#",
      },
      {
        id: 12,
        title: "AI Powered Features",
        icon: RiRobot3Line,
        href: "#",
      },
      {
        id: 13,
        title: "Advanced Automation",
        icon: GiUpgrade,
        href: "#",
      },
    ],
  },
  {
    id: 14,
    title: "How it Works",
    href: "/how-it-works",
  },
];
