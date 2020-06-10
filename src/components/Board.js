import React from 'react'

function Board(props) {
  const drop = e => {
    e.preventDefault()
    const cardId = e.dataTransfer.getData('card_id')
    const card = document.getElementById(cardId)
    card.parentElement.id === 'completed-todos'
      ? card.draggable = false
      : e.target.appendChild(card)
    console.log(card, card.parentElement.id)
  }
  const dragOver = e => e.preventDefault()

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      { props.children }
    </div>
  )
}

export default Board
