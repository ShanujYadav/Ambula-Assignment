import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ApiCard from './ApiCard';
const API_KEY = "pub_21219108bca5c978c2e3c14614477699bb018";

const API = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
        async function getData(){
        const res = await fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=en`)
        const response = await res.json()
        setData(response.results)
        console.log(data)
    }getData()
  },[])
    return (
        <Container className='my-5'>
            <div style={{justifyContent:'center',textAlign:'center'}}>
            <h1>News</h1>

            </div>
            {
                data.map((item, idx) => <ApiCard results={item} key={idx} />)
            }  
        </Container>

    )
}

export default API