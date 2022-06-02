import React from 'react'
import { Card, CardBody, CardTitle, CardText, Progress } from 'reactstrap';
import './App.css';


const CommonCard = ({ cardDeatils }) => {

 


  return (

   
    
    <Card>
      <CardBody>
        <CardTitle>{cardDeatils.name}</CardTitle>
        <div className='d-flex justify-content-around'>
          <div className='card-owners'>{cardDeatils.owner_name} . {cardDeatils.budget_name}</div>
          <div className='card-type-icon bg-danger'>✨</div>
        </div>
        <div className="card-expiry d-flex justify-content-around">
          <div className='card-type'>{cardDeatils.card_type}</div>
          <div className='expiry-month'>
            Expires :{cardDeatils.expiry}
          </div>
        </div>

        <Progress multi>
          <Progress animated bar value="50">Meh</Progress>
          <Progress animated bar color="success" value="50">Wow!</Progress>
        </Progress>

    
        <div className="spents d-flex justify-content-around">
            <div><span className="circ"></span>spent</div>
            <div>
            {cardDeatils.spent?.value}
            {cardDeatils.spent?.currency}
            </div>
           
          </div>

          <div className="spent-limit d-flex justify-content-around">
            <div><span className="circ"></span>Avilable spent</div>
            <div>
            {cardDeatils.available_to_spend?.value}
            {cardDeatils.available_to_spend?.currency}
            </div>
           
          </div>
      </CardBody>
    </Card>
  )
}

export default CommonCard