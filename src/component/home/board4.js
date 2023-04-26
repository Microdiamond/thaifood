import React from 'react'
import './board.css';
import { Col, Container, Row, Image } from 'react-bootstrap'
import larb from './larb.jpg'
import larb2 from './larb2.jfif'

const board4 = () => {
    return (

        <Container className='boardCon'>
            <Row className='board2Row'>
                <Col className='board4Col' xl={6}>
                    <div>Larb</div>
                </Col>
                <Col className='board4Col2' xl={6}>
                    <div className='imgB4Col1'>
                        <Image src={larb}></Image>
                    </div>
                </Col>
            </Row>
            <Row className='board4Row'>
                <Col className='board4Col3'>
                    <div className='imgB4Col2'>
                        <Image src={larb2}></Image>
                    </div>
                </Col>
                <Col className='board4Col4'>
                    <div>Larb (ลาบ) is a traditional and popular meat salad.
                        the dish is typically made with minced or chopped meat,
                        usually pork or chicken, which is mixed with toasted ground rice,
                        fresh herbs such as mint and cilantro, chopped onions, lime juice,
                        fish sauce, and chili flakes. The mixture is then served on a bed
                        of lettuce leaves and garnished with more herbs and sliced vegetables.
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default board4