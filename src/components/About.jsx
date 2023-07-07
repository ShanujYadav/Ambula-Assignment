import React from 'react'
import { Container, Form, Row, Col, Button, Stack } from 'react-bootstrap';
import { Typography } from '@mui/material';
const About = () => {
    return (
        <Container className="my-5 py-5" >

            <Row >
                <Col sm={6} >
                    <div className="" style={{ backgroundColor: '' }}>
                        <Typography variant='h2' component="div" className='main-heading my-5' style={{color: '#cc0000',fontWeight:'bold'}}>
                            About Ambula
                        </Typography>
                        <Typography variant='h6' component="div" className='my-5' style={{ justifyContent: 'center' }}>
                            Ambula is an App based on UHI(Unified Health Interface) popularly known as 'Ayushman Bharat Digital Mission' envisioned by our honourable Prime Minister which connects patients live with the unified health network across India for all healthcare needs. Ambula is committed to bridge all the communication gaps prevalent in healthcare delivery and Ambula will impart it's contribution to this Noble Vision.
                            We are always available there for you if you find any discomfort of health. Your trust empowers us to serve you more.
                        </Typography>
                    </div>
                </Col>
                <Col sm={6} style={{ backgroundColor: '' }}>
                    <Row className='my-5'>
                        <Col sm={2}>
                            <Typography variant='h2' component="div" className=' mt-5' style={{ fontWeight: 'bold', fontSize: 70 ,color:'#ff8080'}}>5.0
                            </Typography>
                        </Col>
                        <Col sm={10}>
                            <Typography variant='h5' component="div" className=' mt-5' style={{ fontWeight: 'bold', paddingTop: 20, fontSize: 28 }}>
                                Review average at our Google profile
                            </Typography>
                        </Col>
                        <Typography variant='h5' component="div" className='' style={{ fontWeight: '', }}>
                            Our viewers have shown enormous trust in our product
                        </Typography>
                    </Row>
                    <Row className='my-5'>
                        <Col sm={3}>
                            <Typography variant='h2' component="div" className=' mt-5' style={{ fontWeight: 'bold', fontSize: 70 ,color:'#ff8080'}}>24*7
                            </Typography>
                        </Col>
                        <Col sm={9}>
                            <Typography variant='h5' component="div" className=' mt-5' style={{ fontWeight: 'bold', paddingTop: 20, fontSize: 28 }}>
                                live online connectivity                            </Typography>
                        </Col>
                        <Typography variant='h5' component="div" className='' style={{ fontWeight: '', }}>
                        Get to know available live healthcare services near you all the time.
                        </Typography>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default About