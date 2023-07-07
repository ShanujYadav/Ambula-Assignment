import React, { useRef, useState } from "react";
import { Container, Form, Button, } from 'react-bootstrap';

export default function Shopping() {
    const form = useRef();

    let [array, setArray] = useState([])
    let [inputdata, setInputdata] = useState({ title: "", desc: "" })
    let { title, desc } = inputdata;

    function data(e) {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value })
    }
    function addinputdata() {
        if (title === "" && desc === "") {
            alert("Enter Name and Roll no ")
        }
        else {
            setArray([...array, { title, desc }])
            // console.log(inputdata)
            setInputdata({ title: "", desc: "" })
        }
    }
    // deleting row 
    function deletedata(i) {
        console.log(i, "this index row want to be delete")
        let total = [...array]
        total.splice(i, 1)
        setArray(total)

    }

    return (
        <Container>
                        <div class="container mt-4">
            <h1 class="display-4 text-center" style={{ fontWeight: 500 }}>
                <span class="text-primary" >Shopping </span> Cart</h1>
            <Container className="mx-5">
                <Form ref={form} className="mt-5" style={{ width: '' }}>
                    <Form.Group className="mb-5" >
                        <Form.Control type="text" style={{ height: 50 }} placeholder="Enter Title" value={inputdata.title || ''} name='title' onChange={data} />
                    </Form.Group>
                    <Form.Group className="mb-5" >
                        <Form.Control type="text" style={{ height: 50 }} placeholder="Description" value={inputdata.desc || ''} name='desc' onChange={data} />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit" className="mb-5 form-control" style={{ height: 45 }} onClick={addinputdata}>
                            Add Item
                        </Button>
                    </div>
                </Form>
            </Container>
            <table class="table table-striped mt-5">
            <thead>
                        <tr>
                            <th>SrNo</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                <tbody>
                    {
                        array && array.map(
                            (item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.desc}</td>
                                        <td><Button variant='danger' onClick={() => deletedata(i)}>Delete</Button></td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
</div>
        </Container>
    )
}