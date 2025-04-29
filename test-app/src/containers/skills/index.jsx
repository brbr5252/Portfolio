import React from "react";
import './styles.scss';
import { FaCode, FaPalette, FaServer, FaBrain, FaChartLine } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';

const skills = [
  {
    icon: <FaCode size={30} color="#007bff" />,
    title: "Programming Languages",
    details: "Python, Java, C++",
  },
  {
    icon: <FaPalette size={30} color="#e34c26" />,
    title: "Frontend",
    details: "HTML, CSS, JavaScript, Vue 3, React, and Bootstrap",
  },
  {
    icon: <FaServer size={30} color="#28a745" />,
    title: "Backend",
    details: "PHP, SQL and MySQL, Node.js",
  },
  {
    icon: <FaBrain size={30} color="#6610f2" />,
    title: "Machine Learning",
    details: "Training and Testing Model, Model Evaluation",
  },
  {
    icon: <FaChartLine size={30} color="#20c997" />,
    title: "Data Science",
    details: "statistics, scientific computing, algorithms and systems to extract or extrapolate knowledge from data.",
  },
];

const Skills = () => {
  return (
    <section >
      <PageHeaderContent
        headerText='My Skills'
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="skills" id="skills"> 
      <Animate
        play
        duration={1.5}
        delay={0.2}
        start={{
          transform: 'translateX(-900px)'
        }}
        end={{
          transform: 'translateX(0px)'
        }}
      >
        <div className="skills__container">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skills__card ${index === skills.length - 1 ? "skills__card--wide" : ""}`}
            >
              <div className="skills__icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.details}</p>
            </div>
          ))}
        </div>
      </Animate>
      </div>
    </section>
  );
};

export default Skills;
