import { Link } from 'react-router-dom';


const ShopPage = () =>{
    return (
    <div>
        <h1>Shop</h1>
        <div><Link to='/'>Back to Home</Link></div>
        <div><Link to='/user'>Log in to buy</Link></div>
    </div>
        
    )
}

export default ShopPage;