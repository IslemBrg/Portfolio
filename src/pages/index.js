import React from "react";
import {
  About,
  Blog,
  Contacts,
  Education,
  Experience,
  Landing,
  Navbar,
  Projects,
  Skills,
} from "../components";
import BackToTop from "../components/back-to-top/back-to-top";
import ChangeTheme from "../components/change-theme/change-theme";
import { ToastContainer } from "react-toastify";

function HomePage() {
  return (
    <>
      <BackToTop />
      <ChangeTheme />
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contacts />
      <ToastContainer />
    </>
  );
}

export default HomePage;
