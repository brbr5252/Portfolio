import React from "react";
import './styles.scss'
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate';
import SocialLinks from "../../components/SocialLinks";

const Home = () => {


    const navigate = useNavigate();
    console.log(navigate)




    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Ibrahim Alhusaini
                    <br />
                    Full Stack Web Developer,
                    <br />
                    and Data Scientist & Machine Learning
                </h1>
            </div>

           
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateX(-700px)'
                }}
                end={{
                    transform: 'translateX(0px)'
                }}
            >
                <SocialLinks />  </Animate>
        </section>
    )
}

export default Home;