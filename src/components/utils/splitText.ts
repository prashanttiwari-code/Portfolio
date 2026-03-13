
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const setSplitText = () => {
  const paragraphs = document.querySelectorAll(".para-split");
  const titles = document.querySelectorAll(".title-split");

  paragraphs.forEach((para) => {
    const split = new SplitText(para as HTMLElement, {
      type: "words",
    });

    if (split.words) {
      gsap.from(split.words, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  });

  titles.forEach((title) => {
    const split = new SplitText(title as HTMLElement, {
      type: "chars",
    });

    if (split.chars) {
      gsap.from(split.chars, {
        opacity: 0,
        y: 40,
        stagger: 0.03,
        duration: 1,
        ease: "power3.out",
      });
    }
  });
};

export default setSplitText;