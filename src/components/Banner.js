/*
 * @Date: 2022-09-15 16:42:40
 * @Author: Bruce
 * @Description: 
 */

import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['web Developer', 'web Designer', 'UI/UX Designer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random()*100)
    const period = 2000
    // 副作用函数
    useEffect(() => {
        let timer = setInterval(() => {
            ticker()
        }, delta)

        // 清楚定时器
        return () => { clearInterval(timer) }
    }, [text])
    const ticker = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)
        if (isDeleting) {
            setDelta(preDelta => preDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my portfile</span>
                        <h1>{`Hi, I'm webcode `} <span className='wrap'>{ text }</span>  </h1>
                        <p>hello world</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}