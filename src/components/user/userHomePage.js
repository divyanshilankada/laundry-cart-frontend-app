import UserHeader from "../header/userHeader";
import Footer from "../footer/footer";
import UserSideBar from "../user/userSideBar";
import UserZeroOrders from "./userZeroOrder";
import UserOrdersDisplay from "./userOrdersDisplay";
import '../../styles/userHomePage.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserHomePage () {

    var header = {token: localStorage.getItem('token')};
    const [userOrderInfo, setUserOrderInfo] = useState([]);
    const navigate = useNavigate();

    console.log(header);

    useEffect(() => {

        if(localStorage.getItem('token') === null)
        {
            navigate("/");
            return;
        }

        console.log("axios get orders")
        axios.get("https://laundry-cart-backend-komp.onrender.com/orders",{headers:header})
            .then((response) => {

                console.log(response);
                if(response.data.message)
                {
                    setUserOrderInfo([...response.data.message]);
                }
            }).catch((err) => console.log(err));
    },[]);

   
    return (
        <>
        { localStorage.getItem('token') !== null ? 
        <div className="user-home-container">
            <UserHeader />
            <div className="user-main-box">
                <UserSideBar></UserSideBar>
                {userOrderInfo.length===0? <UserZeroOrders></UserZeroOrders>:<UserOrdersDisplay orders={userOrderInfo} setUserOrderInfo={setUserOrderInfo}></UserOrdersDisplay>}
            </div>
            <Footer/>
        </div>
        : null}
        </>
    );
};

export default UserHomePage;

