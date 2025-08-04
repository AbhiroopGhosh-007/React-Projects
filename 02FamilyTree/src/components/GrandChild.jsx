
const GrandChild = (props) => {
  return (
    <div className='p-4 m-2 border border-gray-400 rounded bg-white text-center shadow'>
        <h1 className='text-lg font-bold'>Hello! My name is {props.name1} {props.surname1}</h1>
        <h1 className='text-lg font-bold'>Hello! My name is {props.name2} {props.surname2}</h1>
    </div>
  )
}

export default GrandChild;