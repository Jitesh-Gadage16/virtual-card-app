import React from 'react'
import { Progress } from 'reactstrap';

function CommonCard({item}) {
  return (
    
        <div className='col-12 col-md-5 mt-4'>
                      <div className="crad-container p-3">
                        <div className="d-flex justify-content-between align-items-center mb-3">
    
                          <div className="card-head">
                            <div className="card-title">{item.name}</div>
                            <div className="card-owner">{item.owner_name} . {item.budget_name}</div>
                          </div>
                          <div className=''>
                            <img className='card-type-icon' alt="img" src={item.card_type === "subscription" ? "https://cdn-icons-png.flaticon.com/512/2089/2089548.png" : "https://i.imgur.com/6jA3kGI.png"} />
    
                          </div>
                        </div>
    
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                          <div className="card-type">{item.card_type}</div>
                          <div className='card-expiry-deatils'>{item.card_type === "subscription"?(item.expiry) :""} {item.card_type === "subscription" ? "limit" : "expires"} :{item.card_type === "burner"?(item.expiry) :""} {item.card_type === "subscription"?(item.limit) :""} {item.card_type === "subscription"?(item.currency) :""}  </div>
                        </div>
    
                        <div>
                          <Progress multi>
                            <Progress bar color="danger" value={item.spent.value}></Progress>
                            <Progress bar color="success" value={item.available_to_spend.value}></Progress>
                          </Progress>
                        </div>
    
                        <div className='card-expenditure d-flex justify-content-between'>
                          <div className='card-spends'><span className='spent-circ'></span>Spents</div>
                          <div>{item.spent.value}{item.spent.currency}</div>
                        </div>
    
                        <div className='card-expenditure d-flex justify-content-between'>
                          <div className='card-spends'><span className='avspent-circ'></span>Availabe Spents</div>
                          <div>{item.available_to_spend.value}{item.available_to_spend.currency}</div>
                        </div>
    
    
                      </div>
                    </div>
    
  )
}

export default CommonCard