import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(5)

  function inc() {
    setLikes(likes + 1)
  }


  function dec() {
    setLikes(likes - 1)
  }
  
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}

export default App;
