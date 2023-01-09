import React from 'react';

function ProductList({products , addToCart}) {
    return (
        <div style={{backgroundColor:"lightcyan" }}>
            {
                products.map((productItem , productIndex) => {
                    return (
                        <div >
                            <div style={{ display:'flex' , flexWrap:"wrap" }}>

                            
                                
                                <img src={productItem.image} width="100%" style={{width:400 , height:400 , borderRadius:10 , marginTop:20}}/>
                                <div style={{marginLeft:30}}>
                                
                                <p style={{fontSize:40 , fontWeight:600 , color:'black' , marginLeft:30}}>{productItem.name}</p>
                                <p style={{fontSize:40 , fontWeight:600 , color:'black' , marginLeft:30}}> Available</p>
                                 <p style={{fontSize:30 , fontWeight:500 ,marginLeft:30 , color:'black'}}>Rs {productItem.price}</p>
                                 <button onClick={() => addToCart(productItem)} style={{width:150 , height:50 , borderRadius:10 , marginLeft:30,fontSize:20 ,  backgroundColor:'black' , color:'white' , marginBottom:70}}>Add To Cart</button>
                                
                                </div>
                                </div>
                            <div style={{width:'100%' , height:3 , backgroundColor:'black' , margin:10 }}></div>
                            
                            </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;