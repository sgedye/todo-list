import React, {useState, useEffect} from 'react';
import AddCard from './components/AddCard';
import Board from './components/Board';
import Card from './components/Card';

function App() {
  
  const [todos, setTodos] = useState([])

  // const addTodo = (e) => {
  //   e.preventDefault()
  //   console.log(e)
  //   console.log('adding todo.')
  //   setTodos([...todos, "hi there"])
  // }
  // const addTodo = (e) => {
  //   e.preventDefault()
  //   const description = document.getElementById("newDesc").value
  //   if (description !== "") {
  //     console.log('hi')
  //     const priority = document.querySelector('input[name="priority"]:checked').value
      
  //     setTodos({id: '12312313', priority: priority, children: description})
  //     // const newTodo = document.createElement("Card")
  //     // newTodo.id = String(new Date())
  //     // newTodo.className = "card"
  //     // newTodo.draggable = true
  //     // newTodo.priority = priority
  //     // newTodo.textContent = description
  //     // console.log(newTodo)
  //     // document.getElementById("uncompleted-todos").appendChild(newTodo)
  //   } else {
  //     alert("Please enter a description of your new todo.")
  //   }
  // }
  
  // useEffect(() => {
  //   console.log(todos)
  //   setTodos(...todos, 'Hello')
    // const newTodoCard = React.createElement(
    //   "div",
    //   {
    //     id: to.id,
    //     priority: newTodo.priority
    //   },
    //   newTodo.children
    // )
  // })
  // console.log(todos)


    // const newTodoCard = document.createElement('Card')
    // newTodoCard.id = newTodo.id
    // newTodoCard.priority = newTodo.priority
    // newTodoCard.children = newTodo.children
    // const uncompleted = document.getElementById('uncompleted-todos')
    // console.log(uncompleted)
    // uncompleted.appendChild(newTodoCard)
  // })
  
  
  // const draggableCards = [1,1,1,1]
  return (
    <div className="App">
      <h1 style={{"textAlign": "center"}}>Todo List</h1>
      <AddCard onSubmit={text => setTodos([{ text }, ...todos])} />
      
{/* This is destructuring... the text, but we want the TODO object (need to make it in AddCard), then pull out the id, desc, priority, etc. */}

      <main className="flexbox">
        <Board id="uncompleted-todos" className="board">
          {todos.map(({ text }, i) => (
            <Card key={text} id={text}>{text}</Card>
          ))}
        </Board>
        <Board id="completed-todos" className="board"></Board>
      </main>
    </div>
  );
}

export default App;
