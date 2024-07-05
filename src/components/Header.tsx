// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { useTheme } from "next-themes";
// import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
// import { DragHandleHorizontalIcon } from "@radix-ui/react-icons";
// import { Button } from "@/components/ui/button";
// import { GiSkills } from "react-icons/gi";
// import { GrAchievement } from "react-icons/gr";
// import { MdCastForEducation } from "react-icons/md";
// import { MdWorkHistory } from "react-icons/md";

// const Header = () => {
//   const { theme, setTheme } = useTheme();
//   const [navBar, setNavBar] = useState(false);
//   const navLinks = [
//     { title: "Experience", path: "/Experience" },
//     { title: "Qualification", path: "/Qualification" },
//     { title: "Achievements", path: "/Achievements" },
//     { title: "Skills", path: "/Skills" },
//   ];
//   return (
//     <>
//       {/* Mobile Nav */}

//       {/* Desktop Nav */}
//       {/* <header
//         className={`hidden md:w-full h-10 bg-background md:flex items-center gap--10  text-foreground `}>
//         {/* <h1
//           className={`text-2xl px-4 md:px-0 md:text-3xl font-semibold my-8 ${
//             theme === "dark" ? "text-foreground" : "text-muted-foreground"
//           }`}>
//           John Doe
//         </h1> */}

//         {/* <nav>
//           <ul className=" flex items-center  gap-x-10">
//             <Button variant="outline">
//               <Link href={"/Experience"}>
//                 <li className="py-2 text-foreground  hover:scale-105 transition-all ease-in">
//                   Experience
//                 </li>
//               </Link>
//             </Button>
//             <Button variant="outline">
//               <Link href={"/Qualifications"}>
//                 <li className="py-2  text-foreground  hover:scale-105 transition-all ease-in">
//                   Qualification
//                 </li>
//               </Link>
//             </Button> */}

//             {/* <hr className="w-full text-slate-500/50 " /> */}
//             {/* <Button variant="outline">
//               <Link href={"/Achievements"}>
//                 <li className="py-2  text-foreground  hover:scale-105 transition-all ease-in">
//                   Achievements
//                 </li>
//               </Link>
//             </Button>
//             <Button variant="outline">
//               <Link href={"/Skills"}>
//                 <li className="py-2 text-foreground hover:scale-105 transition-all ease-in">
//                   Skills
//                 </li>
//               </Link>
//             </Button>
//           </ul>
//         </nav>
//       </header> */} */}
//     </>
//   );
// };

// export default Header;
// {
//   /* <header className="md:hidden h-screen  flex flex-col items-center gap-y-20   text-foreground relative">
//         <div className="absolute top-4 left-6">
//           <DragHandleHorizontalIcon
//             onClick={() => setNavBar(!navBar)}
//             className={`w-7 h-7 font-bold ${
//               theme === "dark" ? "text-foreground" : "text-muted-foreground"
//             }`}
//           />
//         </div>
//         {navBar && (
//           <div className="w-20 h-screen bg-muted">
//             <ul className="absolute top-32 text-xs left-5">
//               <Link href={"/Experience"}>
//                 <li className="mx-2 my-8">
//                   <MdWorkHistory
//                     className={`w-7 h-7 ${
//                       theme === "dark"
//                         ? "text-foreground"
//                         : "text-muted-foreground"
//                     }`}
//                   />
//                 </li>
//               </Link>
//               <Link href={"/Qualifications"}>
//                 {" "}
//                 <li className="mx-2 my-8">
//                   <MdCastForEducation
//                     className={`w-7 h-7 ${
//                       theme === "dark"
//                         ? "text-foreground"
//                         : "text-muted-foreground"
//                     }`}
//                   />
//                 </li>
//               </Link>
//               <Link href={"/Achievements"}>
//                 {" "}
//                 <li className="mx-2 my-8">
//                   <GrAchievement
//                     className={`w-7 h-7 ${
//                       theme === "dark"
//                         ? "text-foreground"
//                         : "text-muted-foreground"
//                     }`}
//                   />
//                 </li>
//               </Link>
//               <Link href={"/Skills"}>
//                 {" "}
//                 <li className="mx-2 my-8">
//                   <GiSkills
//                     className={`w-7 h-7 ${
//                       theme === "dark"
//                         ? "text-foreground"
//                         : "text-muted-foreground"
//                     }`}
//                   />
//                 </li>
//               </Link>
//             </ul>
//           </div>
//         )}
//       </header> */
// }
