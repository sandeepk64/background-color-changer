import { useState, useEffect } from 'react'

function App() {
  const [color,setcolor] = useState("blue")
  const click = color =>{
    setcolor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])
  const buttonStyle = {
    padding: '10px 20px',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
  }
  return (
    <div className = "App m-5">
      <h3 style={{ textAlign: 'center' }}>Change the background color</h3>
      <div style={{ textAlign: 'center' }}>
        <button  className="outline-none px-4 py-1 rounded text-white shadow-lg"
            style={{ backgroundColor: "red" }} onClick={() => click("red")
          }>RED</button>
        <button  className="outline-none px-4 py-1 rounded text-white shadow-lg"
            style={{ backgroundColor: "yellow" }} onClick={
          () => click("yellow")
          }>YELLOW</button>
        <button  className="outline-none px-4 py-1 rounded text-white shadow-lg"
            style={{ backgroundColor: "green" }} onClick={
          () => click("green")
          }>GREEN</button>
        <button  className="outline-none px-4 py-1 rounded text-white shadow-lg"
            style={{ backgroundColor: "blue" }} onClick={
          () => click("blue")
          }>BLUE</button>
      </div>
      
    </div>
  )
}

export default App