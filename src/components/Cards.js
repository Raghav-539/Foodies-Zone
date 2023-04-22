import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData';
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

function Cards() {

    const [data, setData] = useState(Cardsdata);

    // reducer
    const dispatch = useDispatch();
    const send = (e)=> {
        dispatch(ADD(e))
    }


  return (
    <div className='container mt-3'>

        <h2 className='text-center'> Foodie's Zone </h2>
        <div className='row d-flex justify-content-center align-items-center '>
        {
            // rendering images from card details 
            data.map((element,id )=>{
                return(
                    <>
                    <Card style={{ width: '22rem', border:"none" }} className='mx-2 mt-4 card_style'>
                        <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className='mt-3' />
                        <Card.Body>
                            <Card.Title> <i> {element.rname} </i> </Card.Title>
                            <Card.Text> 
                                <strong> Price : </strong> ₹{element.price}
                                <br/>
                                <strong> Address : </strong> {element.address}
                                <br/>
                                <strong> Rating : </strong> {element.rating} ★
                            </Card.Text>
                            <div className='button_div d-flex justify-content-center'> </div>
                            <Button variant="primary" className='col-lg-12' onClick={()=> send(element)}> Add to cart </Button>
                        </Card.Body>
                    </Card>
                    </>
                )
            })
        }
        
        </div>
    </div>
  )
}

export default Cards