import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Sales Performance Dashboard",
    category: "Data Analytics",
    tools: "Power BI, MS Excel, DAX, Data Cleaning, Data Visualization",
    image: "/images/PowerBi Dashboard Page 1.png",
  },
  {
    title: "Parallax X",
    category: "Web Project",
    tools: "HTML, CSS, JavaScript, Figma, Canva",
    image: "/images/PX.png",
  },
  {
    title: "Bitwise Learn UI",
    category: "EdTech Platform",
    tools:
      "Figma, Wireframing, Prototyping, Component Design, Auto Layout, Design System",
    image: "/images/Bitwise.png",
  },
  {
    title: "Bookstore Database Analysis",
    category: "E-Commerce",
    tools: "MySQL, Microsoft Excel, SQL Queries, Data Analysis",
    image: "/images/bookstore.png",
  },
  {
    title: "Aipanart UI",
    category: "E-Commerce",
    tools:
      "Figma, Wireframing, Prototyping, Component Design, Auto Layout, Design System",
    image: "/images/Aipanart.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
          >
            <MdArrowForward />
          </button>

          {/* Carousel */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    
                    {/* Left Info */}
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>

                        <p className="carousel-category">
                          {project.category}
                        </p>

                        <div className="carousel-tools">
                          <span className="tools-label">
                            Tools & Features
                          </span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
