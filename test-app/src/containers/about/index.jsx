import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import {FaDev, FaDatabase,FaLaptopCode} from "react-icons/fa"
import {DiPython} from "react-icons/di"
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './styles.scss'


const personalDetails = [
    {
        label: "Name",
        value: "Ibrahem Adnan Alhusaini"
    },
    {
        label: "Age",
        value: "23"
    },
    {
        label: "Address",
        value: "Saudi Arabia"
    },
    {
        label: "Email",
        value: "ibrahimalhusaini21@gmail.com"
    },
];

const jobSummary = "Full Stack Web Developer with hands-on experience in building dynamic, responsive, and scalable web applications using modern technologies such as JavaScript, React, Node.js, and Vue 3. Skilled in both front-end and back-end development. Currently expanding expertise in the field of Machine Learning and Data Science, with a keen interest in applying data-driven solutions to real-world problems. Passionate about continuous learning, problem-solving, and building impactful digital experiences."








const About = () => {
    return (
        <section className="about" id="about">
            <PageHeaderContent
                headerText='About me'
                icon={<BsInfoCircleFill size={49} />}
            />

            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={0.2}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >

                        <h3> Full stack Web Developer, and Data Scientist & Machine Learning </h3>
                        <p>{jobSummary}</p>


                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={0.2}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >

                        <h3 className="peronalInformationHeaderText"> Personal Information </h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label} </span>
                                        <span className="value">{item.value} </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>

               
                <div className="about__content__servicesWrapper">

                <Animate
                        play
                        duration={1.5}
                        delay={0.2}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                    <div className="about__content__servicesWrapper__innerContent">
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiPython size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaLaptopCode size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                    </Animate>
                </div>

            </div>
        </section>
    )
}

export default About;