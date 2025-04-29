import React from 'react';
import './styles.scss';
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.jpeg";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";


const CardExample = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Project"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='cards'>
    <CCard className="card-example">
      <CCardImage className="card-image" orientation="top" src={ImageThree} />
      <CCardBody className="card-body">
        <CCardTitle className="card-title">Graduation Project</CCardTitle>
        <CCardText className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>

        <CButton className="card-button" href="https://graduation-project-ebon.vercel.app/">
         Visit
        </CButton>
      </CCardBody>
    </CCard>

    <CCard className="card-example">
      <CCardImage className="card-image" orientation="top" src={ImageFive} />
      <CCardBody className="card-body">
        <CCardTitle className="card-title">Gym Mentor</CCardTitle>
        <CCardText className="card-text">
          App mobile by using java on android studio, to learn people the right form of each exercise.
        </CCardText>

        <CButton className="card-button" href="https://github.com/brbr5252/GymMentor">
         Visit
        </CButton>
      </CCardBody>
    </CCard>

    <CCard className="card-example">
      <CCardImage className="card-image" orientation="top" src={ImageFour} />
      <CCardBody className="card-body">
        <CCardTitle className="card-title">VNAT Research</CCardTitle>
        <CCardText className="card-text">
        VPN/NONVPN NETWORK APPLICATION TRAFFIC DATASET by using machine learning algorithms.
        </CCardText>

        <a href= "..//..//Final Course Project Report Selected .pdf" download>
        <CButton className="card-button" >
         Visit
        </CButton>
        </a>
      </CCardBody>
    </CCard>

    <CCard className="card-example">
      <CCardImage className="card-image" orientation="top" src={ImageTwo} />
      <CCardBody className="card-body">
        <CCardTitle className="card-title">Loan Approval Prediction</CCardTitle>
        <CCardText className="card-text">
          Loan approval prediction research by using machine learning algorthims.
        </CCardText>
        
        <a href= "..//..//Loan Approval Predication By Using Machine Lerning Algorithm.pdf" download>
        <CButton className="card-button">
         Visit
        </CButton>
        </a>

      </CCardBody>
    </CCard>

    <CCard className="card-example">
      <CCardImage className="card-image" orientation="top" src={ImageOne} />
      <CCardBody className="card-body">
        <CCardTitle className="card-title">Gym Exercise</CCardTitle>
        <CCardText className="card-text">
          A small web site to show the form for each exercise on all types of muslce, and also calculate some need 
        </CCardText>

        <CButton className="card-button" href="#">
         Visit "on process"
        </CButton>
      </CCardBody>
    </CCard>



    

    </div>

    </section>
  );
};


export default CardExample;
