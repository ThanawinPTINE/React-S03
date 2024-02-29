import Contact from "./assets/Contact";
import Counter from "./assets/Counter";
import Hello from "./assets/Hello";

function App() {
  console.log('App component');
  const helloData = [
    {name: "Anirach", message: "Good morning"},
    {name: "Hulk", message: "Good afternoon"},
    {name: "Thor", message: "Good evening"}
  ]
  return (  
    <div>
      <Counter />
      {helloData.map((data, index) => (
        <Hello key = {index} name = {data.name} message = {data.message}/>
      ))}

      <Contact phone = "1234567890" email = " Anirach@gmail.com"/>  
    </div>
  )
}

export default App
