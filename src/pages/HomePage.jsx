import { Link } from 'react-router-dom';


const HomePage = () =>{
    return (
    <div>
        <h1>Home Page</h1>
        <div><Link to='/user'>User</Link></div>
        <div><Link to='/todo'>To Do Form</Link></div>
        <div><Link to='/shop'>Let's do some shopping</Link></div>
    </div>
        
    )
}

export default HomePage;