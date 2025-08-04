import Card from "./Card.jsx"
import './App.css'

function App() {

  return (
    <div className="bg-black h-screen">
      <div className="bg-teal-500 text-white text-center p-4 text-3xl flex flex-col textweight-bold justify-center font-bold">
        <h1 >Greeting Card</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
    <Card username="Abhiroop" message="Welcome to this website" className='flex' />
    <Card username="Anjali" message="Best of luck for your journey" />
    <Card username="Rahul" message="Congratulations!! You cracked!" />
    <Card username="Ananya" message="Best wishes for your future" />
     <Card username="Rahul" message="Congratulations!! You cracked!" />
    <Card username="Ananya" message="Best wishes for your future" />
    </div>
    </div>
  )
}

export default App
