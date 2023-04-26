import React from 'react'
import './board.css';
import { Col, Container, Row, Image } from 'react-bootstrap'
import namtok from './namtok.jpg'
import namtok2 from './namtok2.webp'

const board5 = () => {
    return (
        <Container className='boardCon'>
            <Row className='board2Row'>
                <Col xl={6} className='board2Col'>
                    <div className='imgB2Col1'>
                        <Image src={namtok}></Image>
                    </div>
                </Col>
                <Col xl={6}>
                    <div className='imgB2Col2'>
                        <Image src={namtok2}></Image>
                    </div>
                </Col>
            </Row>
            <Row className='board2Row2'>
                <Col xl={6}>
                    <div>Namtok</div>
                </Col>
                <Col xl={6}>
                    <div className='col2detail'>Namtok (น้ำตก) is a popular dish in Thai cuisine that is often translated as "waterfall beef" or "waterfall pork". It is a type of spicy meat salad that is similar to larb, but with a few key differences.</div>
                </Col>
            </Row>
        </Container>
    )
}

export default board5