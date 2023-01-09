import './App.css';
import Header from './Header';
import React, {useState , useEffect} from 'react';
import ProductList from './ProductList';
import Cartdetails from './Cartdetails';

const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

function App() {
  const [cart , setCart] = useState([]);
  const [showCart , setShowCart] = useState(false);
  const [ products , setProducts] = useState([
    {
    
      name :' Amazon alexa ',
      price : 3000,
      image:'./images/1.jpg'
  },
  {
    
      name :' Amazon fire tv ',
      price : 2000,
      image:'./images/2.jpg'
  },
  {
      
      name :' Bose headphones ',
      price : 4000,
      image:'./images/3.jpg'
  },
  {
      
      name :'Redmi k10',
      price : 13000,
      image:'./images/4.jpg'
  },
  {
      
      name :'pTron Air pod',
      price : 3000,
      image:'./images/5.jpg'
  },
  {
    
    name :'DSLR camera',
    price : 10000,
    image:'./images/6.jpg'
},
{

  name :'Lenovo Laptop',
  price : 23000,
  image:'./images/7.jpg'
},
{

  name :'Realme C35',
  price : 19000,
  image:'./images/8.jpg'
},
{
  
  name :'IPhone 13',
  price : 33000,
  image:'./images/9.jpg'
},
{

  name :'Samsuang Tv',
  price : 20000,
  image:'./images/10.jpg'
},
  ] , getDatafromLS())


const addToCart =  (data) => {
console.log(data)
setCart([...cart ,{...data , quantity:1}])
}

const handleShow = (value) => {
setShowCart(value)
}
const [name, setName]=useState('');
  const [price, setPrice]=useState('');
  const [image, setImage]=useState('');

  
  const handleAddProductSubmit=(e)=>{
    e.preventDefault();
    
    let product={
      name,
      price,
      image
    }
    setProducts([...products,product]);
    setName('');
    setPrice('');
    setImage('');
  }




  useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(products));
  },[products])





  return (
    <div>
    <Header count={cart.length} handleShow={handleShow}></Header>
    {showCart ? <Cartdetails cart={cart}></Cartdetails> : <ProductList products={products} addToCart={addToCart}></ProductList>}
    
    <div style={{marginLeft:30 , fontSize:20 , fontWeight:'bold' }}>Add new products</div>
    
  
<div className='main'>

<div style={{backgroundColor:'black'}} >
  <form autoComplete="off" className='form-group'
  onSubmit={handleAddProductSubmit}>
    <label style={{fontSize:20  , margin:30 , fontWeight:'400' , color:'white'}}>Name :</label>
    <input type="text" className='form-control' required
    onChange={(e)=>setName(e.target.value)} value={name} style={{width:300 , height:30 ,borderRadius:10, borderBlockColor:'black' , margin:10 , marginLeft:43}}></input>
    <br></br>
    <label style={{fontSize:20 , color:'white' , margin:30 , fontWeight:'400'}}>Price :</label>
    <input type="text" className='form-control' required
    onChange={(e)=>setPrice(e.target.value)} value={price} style={{width:300 , height:30 ,borderRadius:10 , borderBlockColor:'black' , margin:10 , marginLeft:50}}></input>
    <br></br>
  
  <label style={{fontSize:20 , color:'white', margin:30 , fontWeight:'400'}}>Image url :</label>
    
        
  
    <input  type="url"  value={image} onChange={(e)=>setImage(e.target.value)} style={{width:300 ,borderRadius:10, height:30 , borderBlockColor:'black' , margin:10}} />
  <br></br>
  <div style={{display:'flex' , justifyContent:'center' , paddingBottom:30}}>
    <button type="submit" className='btn btn-success btn-md' style={{width:70 , height:40 , borderRadius:5 , backgroundColor:"red" , color:'black' }}>
      ADD
    </button>
    </div>
  </form>

</div>
</div>
</div>
);
}

export default App;