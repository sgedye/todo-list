import React from 'react';
import Board from './components/Board';
import Card from './components/Card';

function App() {
  const draggableCards = [true, false, true, true, false]
  return (
    <div className="App">
       <h1 style={{"textAlign": "center"}}>Todo List in React</h1>
       <main className="flexbox">
          <Board id="board_1" className="board">
          {draggableCards.map((element,index) => {
            const classes = element ? 'card' : 'card disabled'
            return (
              <Card 
                key={index}
                id={`card_1-${index+1}`}
                className={classes}
                draggable={element}
              >
                Card {index+1}
              </Card>
            )}
          )}
          </Board>
          <Board id="board_2" className="board">
            <Card id="card_1" className="card" draggable="true">Card One</Card>
            <Card id="card_2" className="card disabled" draggable="false">Card Two</Card>
            <Card id="card_3" className="card" draggable="true">Card Three</Card>
            <Card id="card_4" className="card" draggable="true">Card Four</Card>
          </Board>
       </main>
    </div>
  );
}

export default App;
