import { useState } from "react";
import img from '../img/todolist.png';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";


const TodoList = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const onAdd = () => {
    const newTodoList = [...todoList]
    newTodoList.push(todo)
    setTodoList(newTodoList)
    setTodo('')
  }

  const onDelete = (text) => {
    setTodoList(todoList.filter((_, idx) => idx !== text))
  }
  return <>
    <Container style={{alignItems:"center",justifyContent:"center",textAlign:"center"}}>
      <div   >
        <img src={img} alt="#" className="m-5" style={{ width: 200, height: 200 }} />
        <h1 className="app-title" style={{ fontWeight: 'bold' }}>Todo list</h1>

        <input type="text"
          className="search-bar"
          placeholder="Add item here . . ."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          style={{ width: '50%', height: 40, borderRadius: 20 }}
        />

        <Button
          className="add-btn"
          variant="primary"
          onClick={onAdd}
          style={{ height: 40, marginBottom: 4 }}
        >
          Add
        </Button>
      </div>
      <ul className="list" style={{ listStyle: 'none' }} >
        {
          todoList.map((Element, index) =>
            <li className="item"
              style={{ fontSize: 20 }}
              key={index} >
              {Element}
              <Button className="delete-btn"
                style={{ marginInlineStart: 300, marginTop: 5 }}
                variant="danger"
                onClick={() => onDelete(index)}>
                X
              </Button>
            </li>)
        }
      </ul>
    </Container>
  </>

}
export default TodoList;
