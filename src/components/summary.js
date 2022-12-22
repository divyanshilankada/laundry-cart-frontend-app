import '../styles/summary.css'
import React, { useState } from 'react';
import closeIcon from '../images/close.png';
import tickIcon from '../images/tick.png'
import axios from 'axios'

function Summary (props) {

    const [storeAddress, setStoreAddress] = useState({1:{"name":"J P Nagar", "address":"Near Phone booth, 10th road, Nagpur", "phone":"9999999999"},
                                                        2:{"name":"P J Nagar", "address":"Near NK Bank, 10th street, Kanpur", "phone":"8888888888"} });


    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);

    console.log(props.OrderDetails);
    function handleAddress(id)
    {
        if(id !== 0)
        {
            setAddress(storeAddress[id].address);
            setPhone(storeAddress[id].phone);
        }
        else
        {
            setAddress("");
            setPhone("");
        }

       
    }

    function handleCloseSummary()
    {
        props.onChange(false);
    }

    function handleSubmit()
    {

        if(address !== "")
        {
            let postObj = {"order_id":"22",
                        "user_id":"AA1", 
                        "order_address_id":"AA111",
                        "order_product_type":props.OrderDetails,
                        "order_store_details":phone,
                        "order_status":"progress" };

        

            axios.post('https://laundry-cart-backend-komp.onrender.com/orders',postObj)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });

            props.onSuccess(true);
            props.onChange(false);
        }
        
    }

    function handleTotalPrice()
    {
        let price = 0;
        console.log(totalPrice, "kkk");

        for(let key in props.OrderDetails)
        {
            price = price + parseInt(props.OrderDetails[key].finalPrice);
        }


        if(totalPrice === 0)
        {
            setTotalPrice(price);
            console.log(totalPrice);
        }

        return totalPrice;
    }

    console.log(props.OrderDetails);
    return (
        <div className="summary-container">
            <div className='left'></div>
            <div className='right'>
                <header className='summary_header'>
                    <h2 className='summary_header_h2'>Summary</h2>
                    <img className='summary_header_close' onClick={handleCloseSummary} src={closeIcon} alt='close'></img>
                </header>

                <div className='store_address_box'>
                    <select name="store_name" id="store_name" onChange={e => handleAddress(e.target.value)}>
                        <option id='0' value="0" onClick={e => handleAddress(e.target.id)}></option>
                        <option id='1' value="1" onClick={e => handleAddress(e.target.id)}>J P Nagar</option>
                        <option id='2' value="2" onClick={e => handleAddress(e.target.id)} >P J Nagar</option>
                    </select>

                    <div className='store_address'>
                        <h4 className='store'>Store Address</h4>
                        <p>{address === "" ? <>-</> : <>{address}</>}</p>
                    </div>

                    <div className='store_phone'>
                        <h4 className='store'>Phone</h4>
                        <p>{phone === "" ? <>-</> : <>{phone}</>}</p>
                    </div>
                </div>

                <div className='order_details_box'>
                    <p>Order Details</p>

                    <div className='orders_box'>
                        {Object.entries(props.OrderDetails).map(([key, value]) => 
                            <div className='order_deatils' key={key}>
                                <p>{value.product_name}</p>
                                <p>
                                    {value.washing === true ? <> Washing</> : <></>}
                                    {value.ironing === true ? <>{value.washing === true ? <>,</> : <></>} Ironing</> : <></>}
                                    {value.towel === true ? <>{value.washing === true || value.ironing === true ? <>,</> : <></>} Drying</> : <></>}
                                    {value.bleach === true ? <>{value.washing === true || value.ironing === true || value.towel === true ? <>,</> : <></>} Chemical-Bleaching</> : <></>}
                                </p>
                                <h4>{value.quantity} x {value.price} = <span className='order_total_price charge'>{value.finalPrice}</span></h4>
                            </div>
                        )}
                    </div>
                    <div className='charges'>
                        <p className='sub_total'>Sub total: <span className='charge'>{handleTotalPrice()}</span></p>
                        <p className='pickup_charges'>Pickup Charges: <span className='charge'>90</span></p>
                    </div>

                    <div className='total_price'>
                        <h3 className='total_price_p'>Total:  <span className='charge'>Rs{totalPrice+90}</span></h3>
                    </div>

                    <div className='address_boxx'>
                        <p>Address</p>
                        <div className='add_address_box'>
                            <div className='address_main_box'>
                                <div className='address_name'>
                                    <h4 className='address_h4'>Home</h4>
                                    <img className='address_img' src={tickIcon} alt='tick'></img>
                                </div>
                                <p className='address_p'>#223, 10th road, Jp Nagar, Bangalore</p>
                            </div>
                            <h5 className='add_new'>ADD NEW</h5>
                        </div>
                    </div>
                </div>

                <button className='confirm_button' onClick={handleSubmit}>Confirm</button>
            </div>
        </div>
    );
};

export default Summary;

