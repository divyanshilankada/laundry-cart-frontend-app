import searchIcon from '../../images/search.png'
import { Link } from "react-router-dom";
import '../../styles/userOrdersDisplay.css';
import DeleteMessage from '../popupMessages/deleteMessage';
import { useState } from 'react';
import axios from 'axios';


function UserOrdersDisplay (props) {

    const [confirmDelete, setConfirmDelete] = useState(false);
    const [orderId, setOrderId] = useState("");
    var header = {token: localStorage.getItem('token')};


    function handleDelete()
    {
        let id = orderId;
        console.log(id);

        axios.delete(`https://laundry-cart-backend-komp.onrender.com/orders/${id}`,{headers:header})
            .then((data) => {
                axios.get("https://laundry-cart-backend-komp.onrender.com/orders",{headers:header})
                .then((response) => {

                    console.log(response);
                    if(response.data.message)
                    {
                        props.setUserOrderInfo([...response.data.message]);
                    }
                    setOrderId("");
                    setConfirmDelete(false);
                }).catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }

    return (
        <main className="userOrders-container">
            <header className='userOrders_header'>
                <p className='userOrders_p'>Orders | {props.orders.length}</p>
                <Link className="userOrder_createLink" to="/user/create-order"> 
                    <p>Create</p>
                </Link>
                <div className='search_box'>
                    <img className='search_icon' src={searchIcon} alt='search-icon'></img>
                </div>
            </header>
            <div className='orders_display_container'>
                <div className='orders_display_header'>
                    <div className='order_display_name'>Order Id</div>
                    <div className='order_display_name'>Order Date & Time</div>
                    <div className='order_display_name'>Store Location</div>
                    <div className='order_display_name'>City</div>
                    <div className='order_display_name'>Store Phone</div>
                    <div className='order_display_name'>Total Items</div>
                    <div className='order_display_name'>Price</div>
                    <div className='order_display_name'></div>
                </div>

                <div>
                    {props.orders.length === 0 ? null : props.orders.map((order,i) => {

                        return (<div key={i} className={i%2===0 ? "order_display" : "order_display order_col_display"}>
                            <div className='order_detail'>{order.order_id}</div>
                            <div className='order_detail'>{order.order_date}</div>
                            <div className='order_detail'>{order.order_store_details === "9999999999" ? `J P Nagar` :`P J Nagar`}</div>
                            <div className='order_detail'>Bangalore</div>
                            <div className='order_detail'>{order.order_store_details}</div>
                            <div className='order_detail'>{Object.keys(order.order_product_type).length}</div>
                            <div className='order_detail'>{order.total_price}</div>
                            <div className='order_detail order_delete_colour' id={order._id} onClick={(e) => {setOrderId(e.target.id);setConfirmDelete(true)}}>Cancel Order</div>
                        </div>)
                    })}
                </div>
            </div>

            {confirmDelete === true ? <DeleteMessage setDelete={setConfirmDelete} delete={handleDelete}></DeleteMessage> : null}
        </main>
    );
};

export default UserOrdersDisplay;

