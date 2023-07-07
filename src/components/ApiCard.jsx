import React from "react";
import Card from 'react-bootstrap/Card';
import { Container, Stack } from "react-bootstrap";

const ApiCard = (props) => {
  return (<Container>
    <Card className="mt-5" style={{alignItems:"center"}}>
        <Card.Title style={{fontSize:25,color:'blue'}}>
        {props.results.title}
        </Card.Title>
        <p>Date : {props.results.pubDate}</p>
    <Card.Body>
      <Card.Text>{props.results.content}
      </Card.Text>
    </Card.Body>
  </Card>
  </Container> )
}

export default ApiCard;