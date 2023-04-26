import React from 'react'
import './board.css';
import { Col, Container, Row, Image } from 'react-bootstrap'
import papaya5 from './papaya5.jpg'
import papaya7 from './papaya7.jpg'

const board3 = () => {
    return (
        <Container className='boardCon'>
            <Row className='board2Row'>
                <Col className='board3Col' xl={6}>
                    <div>Somtam</div>
                </Col>
                <Col className='board3Col2' xl={6}>
                    <div className='col3detail'>Somtam is a popular salad dish from Thailand. It's a dish that is known for its bold and fresh flavors, and it's a staple in Thai cuisine.</div>
                </Col>
            </Row>
            <Row className='board2Row'>
                <Col>
                    <div className='imgB3Col1'>
                        <Image src={papaya5}></Image>
                        <Image src={papaya7}></Image>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default board3