import {Link} from 'react-router-dom';



const ToDoPage = () =>{
    return (
    <div> 
        <h1>To Do Page</h1>
        <div><Link to='/'>Go back to Home Page</Link></div>
    </div>
        
    )
}

export default ToDoPage;