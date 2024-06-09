import Drawer from "@material-ui/core/Drawer";
import React, { useContext, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaFolderOpen, FaUser } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { IoHomeSharp, IoMenuSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../contexts/theme-context";
import { headerData } from "../../data/header-data";
import styles from "../../styles/navbar.module.css";
import Link from "../link";
import Image from "next/image";

function Navbar() {
  const { theme, setHandleDrawer, changeTheme, isDark } =
    useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Image
          alt="My name"
          src={headerData.sig}
          width={250}
          height={200}
          style={{ filter: isDark ? "invert(100%)" : "invert(0%)" }}
        />

        <IoMenuSharp
          className={`text-3xl md:text-4xl text-[${theme.tertiary}] cursor-pointer translate-y-3 xs:text-2xl transition-colors hover:text-[${theme.primary}] `}
          onClick={handleDrawerOpen}
          aria-label="Menu"
        />
      </div>
      <Drawer
        variant="temporary"
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="right"
        open={open}
        className={styles.drawer}
        classes={{
          paper:
            "p-[1.8em] w-[12em] sm:w-[14em] text-2xl bg-[#15202B] overflow-hidden rounded-t-[40px] rounded-b-[40px] ",
        }}
        disableScrollLock={true}
      >
        <div className="text-3xl font-bold cursor-pointer text-[#1D9BF0] absolute sm:right-[40] sm:top-[40] right-[20] top-[20] transition-colors hover:text-[#EFF3F4] ">
          <AiOutlineCloseCircle
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className="text-3xl font-bold cursor-pointer text-[#1D9BF0] absolute sm:right-[40] sm:top-[40] right-[20] top-[20] transition-colors hover:text-[#EFF3F4] "
            role="button"
            tabIndex="0"
            aria-label="Close"
          />
        </div>
        <br />

        <div onClick={handleDrawerClose}>
          <div className={styles.navLinkContainer}>
            <Fade right>
              <Link href="/">
                <div style={{backgroundColor: isDark? "#15202B" : "lightgray", }} className="my-[2em] mx-auto rounded-[78.8418px] text-[#1D9BF0] sm:w-[85%] w-[100%] h-[55px] sm:h-[60px] flex items-center justify-evenly px-[25px] sm:px-[30px] box-border border-2 border-[#1D9BF0] hover:bg-[#1D9BF0] transition-colors">
                  <IoHomeSharp className="text-xl sm:text-2xl" />
                  <span className="w-6/12 text-[1.125rem] sm:text-[1.3rem] font-semibold">
                    Home
                  </span>
                </div>
              </Link>
            </Fade>

            <Fade right>
              <Link href="/#about">
                <div style={{backgroundColor: isDark? "#15202B" : "lightgray"}} className="my-[2em] mx-auto rounded-[78.8418px] text-[#1D9BF0] sm:w-[85%] w-[100%] h-[55px] sm:h-[60px] flex items-center justify-evenly px-[25px] sm:px-[30px] box-border border-2 border-[#1D9BF0] hover:bg-[#1D9BF0] transition-colors">
                  <FaUser className="text-xl sm:text-2xl" />
                  <span className="w-6/12 text-[1.125rem] sm:text-[1.3rem] font-semibold">
                    About
                  </span>
                </div>
              </Link>
            </Fade>

            <Fade right>
              <Link
                href="#"
                onClick={() => {
                  window.open("/IslemBrg.pdf", "_blank");
                }}
              >
                <div style={{backgroundColor: isDark? "#15202B" : "lightgray"}} className="my-[2em] mx-auto rounded-[78.8418px] text-[#1D9BF0] sm:w-[85%] w-[100%] h-[55px] sm:h-[60px] flex items-center justify-evenly px-[25px] sm:px-[30px] box-border border-2 border-[#1D9BF0] hover:bg-[#1D9BF0] transition-colors">
                  <HiDocumentText className="text-xl sm:text-2xl" />
                  <span className="w-6/12 text-[1.125rem] sm:text-[1.3rem] font-semibold">
                    Resume
                  </span>
                </div>
              </Link>
            </Fade>

            <Fade right>
              <div
                style={{backgroundColor: isDark? "#15202B" : "lightgray"}}
                className="my-[2em] mx-auto rounded-[78.8418px] text-[#1D9BF0] sm:w-[85%] w-[100%] h-[55px] sm:h-[60px] flex items-center justify-evenly px-[25px] sm:px-[30px] box-border border-2 border-[#1D9BF0] hover:bg-[#1D9BF0] transition-colors"
                onClick={changeTheme}
              >
                {isDark ? (
                  <BsFillSunFill className="text-xl sm:text-2xl" />
                ) : (
                  <BsFillMoonFill className="text-xl sm:text-2xl" />
                )}
                <span className="w-6/12 text-[1.125rem] sm:text-[1.3rem] font-semibold">
                  {isDark ? "Light" : "Dark"}
                </span>
              </div>
            </Fade>

           

            <Fade right>
              <Link href="/#contacts">
                <div style={{backgroundColor: isDark? "#15202B" : "lightgray"}} className="my-[2em] mx-auto rounded-[78.8418px] text-[#1D9BF0] sm:w-[85%] w-[100%] h-[55px] sm:h-[60px] flex items-center justify-evenly px-[25px] sm:px-[30px] box-border border-2 border-[#1D9BF0] hover:bg-[#1D9BF0] transition-colors">
                  <MdPhone className="text-xl sm:text-2xl" />
                  <span className="w-6/12 text-[1.125rem] sm:text-[1.3rem] font-semibold">
                    Contact
                  </span>
                </div>
              </Link>
            </Fade>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
