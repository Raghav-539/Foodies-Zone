import React,{useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import Menu from '@mui/material/Menu';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT,ADD,REMOVE } from "../redux/actions/action";
import { useNavigate } from 'react-router-dom';


function Header() {

  const [price, setPrice] = useState(0);

  const getdata =  useSelector((state)=> state.cartreducer.carts);     /// add to cart numbering and to extract data from redux store

  // to go to home toute after deleting
  const history = useNavigate();

  // to remove items    
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) =>{
    dispatch(DLT(id))
    history("/");

  }

  // add data - increase quantity
  const send = (e)=>{
    dispatch(ADD(e));
  }

  // remove one - decrement quantity
  const remove = (item)=>{
    dispatch(REMOVE(item))
  }

  const total = ()=>{
    let price = 0;
    getdata.map((ele,k)=>{
      price = ele.price *ele.qnty + price
    });
    setPrice(price);
  };

  // to implement side chnages
  useEffect(()=>{
    total();
  },[total])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3"> Foodie's Zone </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-2"> Home </NavLink>
            <NavLink to="/about" className="text-decoration-none text-light mx-2"> About Us </NavLink>
            <NavLink to="/contact" className="text-decoration-none text-light mx-2"> Contact Us </NavLink>
          </Nav>

          <i class="fa-solid fa-magnifying-glass text-light" style={{fontSize : 20,margin:10,cursor:"pointer"}}></i>

          <DropdownButton  variant="dark" title=<i class="fa-solid fa-user  text-light" style={{fontSize : 20,margin:10}}></i>>
            <Dropdown.Item href="/login"> Login </Dropdown.Item>
            <Dropdown.Item href="/register"> Register </Dropdown.Item>
          </DropdownButton>

          <Badge badgeContent={getdata.length} color="primary" id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
            <i class="fa-solid fa-cart-shopping text-light" style={{fontSize : 20,marginLeft:10, marginRight:10 ,cursor:"pointer"}}></i>
          </Badge>

          <i class="fa-solid fa-bars text-light" style={{fontSize : 20,margin:10,cursor:"pointer"}}></i>

        </Container>

        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button'}}>
        
        {/* cart data display */}
        {
          getdata.length ?
          <div className="card_details" style={{width:"24rem", padding:10}}>
            <Table>
              <thead>
                <tr>
                  <th> Photo </th>
                  <th> Restuarant Name </th>
                </tr>
              </thead>
              <tbody>
                {
                  getdata.map((e)=>{
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose} >  <img src={e.imgdata} style={{width: "8rem", height:"8rem"}} alt="food_img"/> </NavLink>
                          </td>
                          <td>
                            <p> {e.rname} </p>
                            <p> Price : ₹{e.price} </p>
                            <p> Quantity : {e.qnty} </p> 

                            {/* increment counter and decrement counter */}
                            <div className='mt-2 d-flex justify-content-between align-items-center' style={{width:70, cursor:"pointer", background:"#ddd", color:"#111"}}>
                              <span style={{fontSize:20, marginLeft:5}} onClick={e.qnty <=1 ? ()=>dlt(e.id) : ()=>remove(e)}>-</span>
                              <span style={{fontSize:20}}>{e.qnty}</span>
                              <span style={{fontSize:20, marginRight:5}} onClick={()=>send(e)}>+</span>
                            </div>

                            <p  style={{color:"red", cursor: "poniter" , fontSize:20}} onClick={()=>dlt(e.id)} > <i className="fas fa-trash smalltrash"></i> </p>
                          </td>
                          <td className="mt-5" style={{color:"red", cursor: "poniter" , fontSize:20}} onClick={()=>dlt(e.id)}>
                            <i className="fas fa-trash largetrash"></i>
                          </td>
                          
                        </tr>
                      </>
                    )
                  })
                }
                <p className="text-center mt-2"> Total : ₹{price} </p>
              </tbody>
            </Table>
          </div>:

          <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem", padding:10, position:"relative"}}>
          <i className='fas fa-close smallclose' onClick={handleClose} style={{position:"absolute", top:2, right:20, fontSize:23, cursor:"pointer"}}></i>
          <p style={{fontSize:22}}>Your carts is empty</p>
          </div>
        }

        
        
        </Menu>
      </Navbar>
    </>
  );
}

export default Header;
