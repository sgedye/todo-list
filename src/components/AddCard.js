import React, { useState } from 'react'

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue('')
  }
}

export default ({ onSubmit }) => {
// function AddCard(props) {

  const {resetValue, ...text} = useInputValue("")

  const addTodo = e => {
    e.preventDefault()
    onSubmit(text.value)
    resetValue()
  }
  return (
    <form id="addCard" onSubmit={addTodo}>
      <input {...text} />
    </form>
    // <form id="addCard" onSubmit={props.addTodo}>
    //   <div>
    //     <label>Todo:</label>
    //     <input id="newDesc" type="text" placeholder="Write your new todo" defaultValue="" />
    //   </div>
    //   <div>
    //     <p>Priority:</p>
    //     <div>
    //       <input id="high" type="radio" name="priority" value="high" />
    //       <label htmlFor="high">High</label>
    //     </div>
    //     <div>
    //       <input id="medium" type="radio" name="priority" value="medium" defaultChecked />
    //       <label htmlFor="medium">Medium</label>
    //     </div>
    //     <div>
    //       <input id="low" type="radio" name="priority" value="low" />
    //       <label htmlFor="low">Low</label>
    //     </div>
    //   </div>
    //   <div>
    //     <button onClick={props.addTodo}>Add Todo</button>
    //   </div>
    // </form>
  )
}

// export default AddCard
