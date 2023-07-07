import { useRef } from 'react';
import React from 'react'
import { Container, Form, Row, Col, Button, Stack } from 'react-bootstrap';

const Contect = () => {
    const form = useRef();

    return (
        <Container>
            <h1 variant='h3' component="div" className='main-heading text-center my-5' >
                Contact
            </h1>
            <Row >
                <Col sm={12} >
                    <Container className="px-5">
                        <h3 className="contect-heading mb-5">Send Message</h3>
                        <Form ref={form}  >
                            <Form.Group className="mb-3" >
                                <Form.Control type="text" placeholder="Enter Name" name="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="email" placeholder="Enter email" name="user_email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <textarea class="form-control" rows="5" placeholder="Message" name="message" required ></textarea>
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="primary" type="submit" className="mb-5 form-control" >
                                    Send
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Contect