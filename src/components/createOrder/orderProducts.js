import React, {  useState } from 'react';
import { Link } from "react-router-dom";
import Summary from '../summary/summary';
import SuccessfulMessage from '../popupMessages/successfulMessage';
import searchIcon from '../../images/search.png'
import '../../styles/orderProducts.css'
import washingIcon from '../../images/washing-machine.png'
import ironingIcon from '../../images/ironing.png'
import towelIcon from '../../images/towel.png'
import bleachIcon from '../../images/bleach.png'
import washingBlueIcon from '../../images/washing-machine-blue.png'
import ironingBlueIcon from '../../images/ironing-blue.png'
import towelBlueIcon from '../../images/towel-blue.png'
import bleachBlueIcon from '../../images/bleach-blue.png'
import productDetails from './products.json';




function OrderProducts () {

    const [quantity, setQuantity] = useState(new Array(7).fill(0));
    const [washing, setWashing] = useState(new Array(7).fill(false));
    const [ironing, setIroning] = useState(new Array(7).fill(false));
    const [towel, setTowel] = useState(new Array(7).fill(false));
    const [bleach, setBleach] = useState(new Array(7).fill(false));
    const [price, setPrice] = useState(new Array(7).fill(0));
    const [flag, setFlag] = useState(false);
    const [orderDetails, setOrderDetails] = useState({});
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [proceedToSumary, setProceedToSummary] = useState(false);


    function incrementQuantity(key,value)
    {
        //console.log(key, ":::::::::")
        let arr = quantity;
        arr[key-1] = value;

        setQuantity([...arr]);

        if(flag === false)
        {
            let temp = price;
            for(let i=0; i<productDetails.length; i++)
            {
                console.log(productDetails[i].product_price)
                temp[i] = productDetails[i].product_price;
            }

            setPrice([...temp]);
            setFlag(true);
            console.log(temp);
        }
        
        orderDetailsFunc(key);
    }

    function changeWashing(key)
    {
        let arr = washing;

        //console.log(quantity[key-1]);
        if(arr[key-1] === false && quantity[key-1] !== 0)
        {
            arr[key-1] = true;
        }
        else
        {
            arr[key-1] = false;
        }

        setWashing([...arr]);

        orderDetailsFunc(key);

    }

    function changeIroning(key)
    {
        let arr = ironing;
        if(arr[key-1] === false && quantity[key-1] !== 0)
        {
            arr[key-1] = true;
        }
        else
        {
            arr[key-1] = false;
        }
        setIroning([...arr]);

        orderDetailsFunc(key);

    }

    function changeTowel(key)
    {
        let arr = towel;
        if(arr[key-1] === false && quantity[key-1] !== 0)
        {
            arr[key-1] = true;
        }
        else
        {
            arr[key-1] = false;
        }
        setTowel([...arr]);

        orderDetailsFunc(key);

    }

    function changeBleach(key)
    {
        let arr = bleach;
        if(arr[key-1] === false && quantity[key-1] !== 0)
        {
            arr[key-1] = true;
        }
        else
        {
            arr[key-1] = false;
        }
        setBleach([...arr]);

        orderDetailsFunc(key);

    }

    function resetProduct(key)
    {
        let arr = quantity;
        arr[key-1] = 0;
        setQuantity([...arr]);


        if(washing[key-1] === true)
        {
            let temp = washing;
            temp[key-1] = false;
            setWashing([...temp]); 
        }

        if(ironing[key-1] === true)
        {
            let temp = ironing;
            temp[key-1] = false;
            setIroning([...temp]); 
        }

        if(towel[key-1] === true)
        {
            let temp = towel;
            temp[key-1] = false;
            setTowel([...temp]); 
        }

        if(bleach[key-1] === true)
        {
            let temp = bleach;
            temp[key-1] = false;
            setBleach([...temp]); 
        }

        deleteOrder(key);
    }

    function orderDetailsFunc(id)
    {
        //console.log(orderDetails[id]);

        if(quantity[id-1] !== 0 && (washing[id-1] === true || ironing[id-1] === true || towel[id-1] === true || bleach[id-1] === true))
        {
            if(orderDetails[id] === undefined)
            {
                const temp = orderDetails;

                temp[id] = {"quantity" : quantity[id-1], 
                                    "washing" : washing[id-1], 
                                    "ironing" : ironing[id-1],
                                    "towel" : towel[id-1],
                                    "bleach" : bleach[id-1],
                                    "price" : price[id-1],
                                    "finalPrice" : price[id-1] * quantity[id-1],
                                    "product_name" : productDetails[id-1].product_type
                            };

                setOrderDetails({...orderDetails, ...temp});
                //console.log(orderDetails, "kkkkk");
            }
            else
            {
                const temp = orderDetails;

                temp[id].quantity = quantity[id-1];
                temp[id].washing = washing[id-1];
                temp[id].ironing = ironing[id-1];
                temp[id].towel = towel[id-1];
                temp[id].bleach = bleach[id-1];
                temp[id].finalPrice = price[id-1] * quantity[id-1];

                setOrderDetails({...orderDetails, ...temp});
                console.log(orderDetails, "kkkkk");

            }
        }
        
    }

    function deleteOrder(id)
    {
        const temp = orderDetails;

        delete temp[id];

        setOrderDetails({...orderDetails, ...temp});

    }

    function handleSummaryChange(value)
    {
        setProceedToSummary(value);
    }

    function handleSuccessfulMessage(value)
    {
        setOrderSuccess(value);
    }

    return (
        <main className="orderProducts-container">
            <header className='orderProduct_header'>
                <p className='orderProduct_p'>Create Order</p>
                <div className='search_box'>
                    <img className='search_icon' src={searchIcon} alt='search-icon'></img>
                </div>
            </header>

            <div className='products_box'>
                <header className='products_header'>
                    <div className='products_name'>Product Type</div>
                    <div className='products_name'>Quantity</div>
                    <div className='products_name'>Wash Type</div>
                    <div className='products_name'>Price</div>
                </header>

                
                    {productDetails.map( (product, i) => 
                        <div className='product_details' key={product.product_id}>
                            <div className='product_type'>
                                <img className='product_img' src={product.image} alt='clothes'></img>
                                <div className='product_desc'>
                                    <h3 className='product_desc_h4'>{product.product_type}</h3>
                                    <p className='product_desc_p'>Lorem Ipsum is simply dummy text of the</p>
                                </div>
                            </div>
                            <div className='Quantity'>
                                <input id={product.product_id} type="text" className='quantity_value' name="quantity_value" placeholder="0" data-testid = 'quantity_value' value={quantity[i]} onChange={e => incrementQuantity(e.target.id, e.target.value)}/>
                            </div>
                            <div className='wash_type'>
                                <img id={product.product_id} className='washType_icon' src={washing[i] === false ? washingIcon : washingBlueIcon} alt='washing' onClick={e => changeWashing(e.target.id)}></img>
                                <img id={product.product_id} className='washType_icon' src={ironing[i] === false ? ironingIcon : ironingBlueIcon} alt='ironing' onClick={e => changeIroning(e.target.id)}></img>
                                <img id={product.product_id} className='washType_icon' src={towel[i] === false ? towelIcon : towelBlueIcon} alt='towel' onClick={e => changeTowel(e.target.id)}></img>
                                <img id={product.product_id} className='washType_icon' src={bleach[i] === false ? bleachIcon : bleachBlueIcon} alt='bleaching' onClick={e => changeBleach(e.target.id)}></img>
                            </div>
                            <div className='price'>
                                <h4 id={product.product_id} className='price_h4'>{quantity[i] !== 0 && (washing[i] === true || ironing[i] === true || towel[i] === true || bleach[i] === true)? <>{quantity[i]} x {price[i]} = <span id='price'>{quantity[i] * price[i]}</span> <button id={product.product_id} className='reset_button' onClick={e => resetProduct(e.target.id)}>Reset</button></> : <>-</>}</h4>
                            </div>
                        </div>
                    )}
                  
                <div className='order_navigate_page'>
                    <Link className="order_cancelLink nav" to="/user"> 
                        <p className='buttonNav'>Cancel</p>
                    </Link>
                    <button className='order_proceed nav' onClick={() => {Object.keys(orderDetails).length !== 0 && orderSuccess===false ? setProceedToSummary(true) : setProceedToSummary(false)}}>Proceed</button>
                    {Object.keys(orderDetails).length !== 0 && proceedToSumary === true? <Summary OrderDetails = {orderDetails} onChange={handleSummaryChange} onSuccess={handleSuccessfulMessage}></Summary> : orderSuccess === true ? <SuccessfulMessage></SuccessfulMessage> : <></>}
                </div> 
            </div>
        </main>
    );
};

export default OrderProducts;

