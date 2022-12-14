/*
 * @Date: 2022-09-15 17:57:46
 * @Author: Bruce
 * @Description: 
 */
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superlargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items:3
        },tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },mobile: {
            breakpoint: { max: 464, min: 0 },
            items:1
        }}
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>My name is Bruce <br></br>You can call me XuKai</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="items">
                                    <img src={meter1} alt="img" />
                                    <h5>Web Developer1</h5>
                                </div>
                                <div className="items">
                                    <img src={meter2} alt="img" />
                                    <h5>Web Developer2</h5>
                                </div>
                                <div className="items">
                                    <img src={meter3} alt="img" />
                                    <h5>Web Developer3</h5>
                                </div>
                                <div className="items">
                                    <img src={meter1} alt="img" />
                                    <h5>Web Developer4</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}