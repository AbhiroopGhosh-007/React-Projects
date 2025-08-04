import Child from './Child.jsx';
const Parent=()=>{
    return(
    <div className='p-4 m-4 bg-green-100 rounded shadow'>
        <h1 className='text-lg font-bold'>Parent Component</h1>
        <Child surname1="Sharma" surname2="Ghosh"/>
        
    </div>
    )
}
export default Parent;