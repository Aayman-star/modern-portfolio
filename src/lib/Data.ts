import { GiSkills } from "react-icons/gi";
import { GrAchievement } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { HomeIcon } from "@radix-ui/react-icons";
import { IconType } from "react-icons";
import { HiHome } from "react-icons/hi";

export const navLinks: Array<{
  name: string;
  link: string;
  linkIcon: IconType;
}> = [
  { name: "Home", link: "/", linkIcon: HiHome },
  { name: "Experience", link: "/Experience", linkIcon: MdWorkHistory },
  {
    name: "Qualifications",
    link: "/Qualifications",
    linkIcon: MdCastForEducation,
  },
  { name: "Achievements", link: "/Achievements", linkIcon: GrAchievement },
  { name: "Skills", link: "/Skills", linkIcon: GiSkills },
];

export const Title = "Your Name";
export const Subtitle = "Your Occupation";
export const AboutText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
export const experience = [
  {
    institute: "ABC ,city",
    position: "XYZ",
    duration: "20XX-20XX",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },

  {
    institute: "ABC,City",
    position: "XYZ",
    duration: "20XX-20XX",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    institute: "ABC,City",
    position: "XYZ",
    duration: "20XX-20XX",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const qualification = [
  {
    institute: "ABC,City",
    degree: "XYZ",
    duration: "20XX",
  },

  {
    institute: "ABC,City",
    degree: "XYZ",
    duration: "20XX",
  },
  {
    institute: "ABC,City",
    degree: "XYZ",
    duration: "20XX",
  },
  {
    institute: "ABC,City",
    degree: "XYZ",
    duration: "20XX",
  },
  {
    institute: "ABC",
    degree: "XYZ",
    duration: "20XX",
  },
  {
    institute: "ABC,City",
    degree: "XYZ",
    duration: "20XX",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const skills = [
  {
    id: 1,
    title: "First Skill",
  },
  {
    id: 2,
    title: "Second Skill",
  },
  {
    id: 3,
    title: "Third Skil",
  },
  {
    id: 4,
    title: "Fourth Skill",
  },
];
export const contactLinks = [
  { id: 1, email: "mailto:emailto:" },
  { id: 2, linkedin: "https://www.linkedin.com/" },
];
