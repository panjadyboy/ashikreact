import React from 'react';

function Header(props) {
    return (
        <div style={{display:'flex' , justifyContent:"space-between" , backgroundColor:'black' , padding:10}}>
              <div onClick={() => props.handleShow(false)} style={{fontSize:30 , fontWeight:500 ,color:'white'}}>For Sale !!</div>
              <div onClick={() => props.handleShow(true)} style={{fontSize:30 , fontWeight:500 ,color:'white'}}>Cart
                
              </div>
        </div>
    );
}

export default Header;