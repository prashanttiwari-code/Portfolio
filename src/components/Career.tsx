import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Intern</h4>
                <h5>Bitwsie Learn</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              I designed website modules using Figma. 
              Created wireframes and interactive prototypes to improve
               user experience and interface design. Collaborated with the 
               development team to ensure visually consistent and user-friendly layouts across the website.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Intern</h4>
                <h5>Aditya birla Century PRivate Limited</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              I worked on analyzing IT systems and business processes. 
              Assisted in documenting workflows, identifying improvement opportunities, and supporting data analysis for operational efficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UU international hackthon</h4>
                <h5>Uttaranchal University </h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
            Worked on the project Autonomous Vehicle Development using LiDAR technology. 
            Contributed to designing and developing concepts for vehicle navigation and obstacle detection using LiDAR-based sensing. 
            Collaborated with team members to research autonomous driving systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
