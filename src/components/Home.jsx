import React from 'react'
import { Container, Form, Row, Col, Button, Stack } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { AiFillApple,AiFillAndroid } from 'react-icons/ai';
import heart from '../img/heart.png'
const Home = () => {
    return (
        <Container className='px-5 ' style={{ justifyContent: 'center', textAlign: 'center' }}>

            <img src={heart} alt="" style={{width:160,height:150}} className='mt-5'/>
            <Typography variant='h2' component="div" className='main-heading my-5' style={{ color: '#cc0000', fontWeight: 'bold' }}>
                Our Mission
            </Typography>
            <Container style={{ width: '70%', }}>
                <Typography variant='h6' component="div" className='' style={{ textAlign: 'justify' }}>
                    At Ambula, we are deeply committed to the belief that every person deserves access to high-quality healthcare services.
                    We believe in a democratic approach to health, and through the use of technology, we strive to make emergency and trauma
                    care assistance more transparent, easily accessible, and user-friendly for all individuals in India. By bridging the communication
                    gap in healthcare delivery, we hope to empower individuals to take control of their health and well-being.
                </Typography>
                <Row className='my-5'>
                    <Col sm={6} className='px-5' style={{}}>
                        <div style={{ backgroundColor: 'black', height: 50, borderRadius: 10 }}>
                            <h5 style={{ color: '#fff', paddingTop: 10 }}><AiFillApple style={{paddingRight:5}} size={30}/>Download for IOS</h5>
                        </div>
                    </Col>
                    <Col sm={6} className='px-5'>
                        <div style={{ backgroundColor: 'black', height: 50, borderRadius: 10 }}>
                            <h4 style={{ color: '#fff', paddingTop: 10 }}><AiFillAndroid />Download for Android</h4>
                        </div>            </Col>
                </Row>

            </Container>
        </Container>
    )
}

export default Home