import GrandChild from './GrandChild.jsx';

 const Child = (props) => {
  return (
    <div className='p-4 m-2 bg-blue-100 rounded'>
        <h1 className='text-lg font-bold'>Child Component</h1>
        <GrandChild name1="Rohan" surname1={props.surname1} name2="Bishwajeet" surname2={props.surname2}/>
    </div>
  )
}
export default Child;
