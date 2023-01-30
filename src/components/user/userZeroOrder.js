import searchIcon from '../../images/search.png'
import { Link } from "react-router-dom";
import '../../styles/userZeroOrderPage.css'


function UserZeroOrders () {
    return (
        <main className="userZeroOrders-container">
            <header className='userZeroOrders_header'>
                <p className='userZeroOrders_p'>Orders | 0</p>
                <div className='search_box'>
                    <img className='search_icon' src={searchIcon} alt='search-icon'></img>
                </div>
            </header>
            <div className='userZeroOrder_linkBox'>
                <p className='userZeroOrders_p_'>No Orders avaialble</p>
                <Link className="userZeroOrder_createLink" to="/user/create-order"> 
                    <p>Create</p>
                </Link>
            </div>
        </main>
    );
};

export default UserZeroOrders;

