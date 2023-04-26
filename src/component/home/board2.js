import React from 'react'
import './board.css';
import { Col, Container, Row, Image } from 'react-bootstrap'
import papaya4 from './papaya4.jpg'
import papaya6 from './papaya6.jpg'

const board2 = () => {
    return (
        <Container className='boardCon'>
            <Row className='board2Row'>
                <Col xl={6} className='board2Col'>
                    <div className='imgB2Col1'>
                        <Image src={papaya4}></Image>
                    </div>
                </Col>
                <Col xl={6}>
                    <div className='imgB2Col2'>
                        <Image src={papaya6}></Image>
                    </div>
                </Col>
            </Row>
            <Row className='board2Row2'>
                <Col xl={6}>
                    <div>About Me.</div>
                </Col>
                <Col  xl={6}>
                    <div className='col2detail'>"Somtam Pa Toi" is a popular street food vendor in Thailand that specializes in somtam, a traditional Thai salad, Larb, nam tok, chicken grilled, sticky rices</div>
                </Col>
            </Row>
        </Container>
    )
}

export default board2