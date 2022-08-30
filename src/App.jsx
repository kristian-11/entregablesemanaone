import { useState } from "react";
import quotes from "./assets/quotes.json";
import "./App.css";


function App() {
  console.log(quotes.length);

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const [index, setIndex] = useState(randomIndex)

  const cambioIndex = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setIndex(randomIndex)
  }

  console.log(quotes)

  const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#2C73D2']
  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColor]}`

  return (
    <div className="App">
      <div className="card" style={{color: colors[randomColor]}}>
        <h1>
        <i class="fa-solid fa-quote-left"></i>{" "}
          {quotes[index].quote}{" "}
          {quotes[index].author}{" "}
        </h1>
        <button onClick={cambioIndex} style={{color: colors[randomColor]}}>
        <i class="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
