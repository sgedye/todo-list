import React from 'react'

function Card(props) {
  const dragStart = e => e.dataTransfer.setData('card_id', e.target.id)
  const dragOver = e => e.stopPropagation() // Not sure this is needed.

  return (
    <div
      id={props.id}
      className="card"
      draggable={true}
      // priority={props.priority}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      { props.children }
    </div>
  )
}

export default Card