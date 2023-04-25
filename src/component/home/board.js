import React from 'react'
import './board.css';
import { Col, Container, Row, Image } from 'react-bootstrap'
import papaya from './papaya.jpg'
import papaya2 from './papaya2.jpg'

const board = () => {
    return (
        <Container className='boardCon'>
            <Row className='boardRow'>
                <Col xl={6}>
                    <div className='imgCol1'>
                        <Image src={papaya}></Image>
                    </div>
                </Col>
                <Col xl={6}>
                    <div className='imgCol2'>
                        <Image src={papaya2}></Image>
                    </div>
                </Col>
            </Row>
            <Row className='boardRow2'>
                <Col xl={6}>
                    <p>Somtam Pa Toi</p>
                    <div>since 1997</div>
                </Col>
            </Row>
        </Container>
    )
}

export default board