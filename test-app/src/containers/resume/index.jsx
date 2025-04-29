import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { data } from "./utils";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles.scss';
import { MdComputer } from 'react-icons/md'

const Resume = () => {
    return (
        <section className="resume" id="resume">
            <PageHeaderContent
                headerText='My Resume'
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="timeline">


                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text"> Experience </h3>

                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor="Var(--yellow-theme-main-color)"
                    >
                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline__experience__vertical__timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var( --yellow-theme-nav-background-color)',
                                    }}
                                    icon={<MdComputer />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                    }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3 className="vertical-timeline-element-title"> {item.title} </h3>
                                    </div>

                                    <div className="vertical-timeline-element-title-wrapper-subtitle"> <h4 className="vertical-timeline-element-subtitle"> {item.subTitle} </h4> </div>
                                    <div className="vertical-timeline-element-title-wrapper-ul">
                                        <ul className="vertical-timeline-element-title-wrapper-description">
                                            {item.description.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </VerticalTimelineElement>

                            ))
                        }
                    </VerticalTimeline>


                </div>

                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">
                        Education
                    </h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor="Var(--yellow-theme-main-color)"
                    >
                        {
                            data.education.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline__experience__vertical__timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var( --yellow-theme-nav-background-color)',
                                    }}
                                    icon={<MdComputer />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                    }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3 className="vertical-timeline-element-title"> {item.title} </h3>
                                    </div>

                                    <div className="vertical-timeline-element-title-wrapper-subtitle"> <h4 className="vertical-timeline-element-subtitle"> {item.subTitle} </h4> </div>
                                    <div className="vertical-timeline-element-title-wrapper-ul">
                                        <ul className="vertical-timeline-element-title-wrapper-description">
                                            {item.description.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </VerticalTimelineElement>

                            ))
                        }
                    </VerticalTimeline>

                </div>


            </div>
        </section>
    )
}

export default Resume;