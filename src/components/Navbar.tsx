import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/all";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");

    const handleClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const elem = e.currentTarget as HTMLAnchorElement;
        const section = elem.getAttribute("data-href");
        if (section) smoother.scrollTo(section, true, "top top");
      }
    };

    links.forEach((elem) => {
      elem.addEventListener("click", handleClick);
    });

    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", handleClick);
      });
      window.removeEventListener("resize", resizeHandler);
      smoother?.kill();
    };

  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          PT
        </a>

        <a
          href="mailto:prashantbusiness263139@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          prashantbusiness263139@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
