import React, { useState } from 'react';

function Cartdetails({cart}) {


    return (
        <div>
            {
                cart.map((cartItem , cartIndex) => {
return (
    <div>
{
    <div style={{display:"flex" , flexWrap:"wrap"}}>
    <img src={cartItem.image} width={45} style={{borderRadius:10 , width:300 , height:300 , marginBottom:50 , marginTop:40}}/>
    <div style={{marginTop:150}}>
    <span style={{fontSize:30 , fontWeight:500 , color:'black' ,padding:50 , marginBottom:50}}> {cartItem.name}</span>
    <span style={{fontSize:30 , fontWeight:500 , color:'black' ,padding:50 , marginBottom:50}}>price : {cartItem.price}</span>
    </div>
    </div>
}
<div style={{width:'100%'  , height:4 , backgroundColor:"black"}} ></div>
    </div>
                )
                
                })
            }
            
            <p style={{fontSize:40 , fontWeight:500 , color:'red'}}> Total Amount :
                {
                    cart.map(item => item.price).reduce((total , value) => 
                    total+value , 0)
                } rupees
            </p>

            
        </div>
    );
}

export default Cartdetails;