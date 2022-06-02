import './App.css';
import Navbar from './components/Navbar'
import React, { useState } from "react";
import { Progress, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import CommonCard from './components/CommonCard';

import classnames from 'classnames';

const carditems = [
  {

    "name": "Mixmax",
    "budget_name": "Software subscription",
    "owner_id": 1,
    "owner_name": "Rajesh",
    "spent": {
      "value": 300,
      "currency": "SGD"
    },
    "available_to_spend": {
      "value": 1000,
      "currency": "SGD"
    },
    "card_type": "burner",
    "expiry": "9 feb",
    "limit": 100,
    "currency": "SGD",
    "status": "active"


  },
  {
    "name": "Quickbooks",
    "budget_name": "Software subscription",
    "owner_id": 2,
    "owner_name": "Rajesh",
    "spent": {
      "value": 10,
      "currency": "SGD"
    },
    "available_to_spend": {
      "value": 1000,
      "currency": "SGD"
    },
    "card_type": "subscription",
    "expiry": "feb",
    "limit": 100,
    "currency": "SGD",
    "status": "active"

  },
  {
    "name": "pandadoc",
    "budget_name": "Software subscription",
    "owner_id": 2,
    "owner_name": "mayank",
    "spent": {
      "value": 0,
      "currency": "SGD"
    },
    "available_to_spend": {
      "value": 1000,
      "currency": "SGD"
    },
    "card_type": "subscription",
    "expiry": "Aug",
    "limit": 180,
    "currency": "SGD",
    "status": "active"

  },
  {
    "name": "Motion",
    "budget_name": "Software subscription",
    "owner_id": 1,
    "owner_name": "Rajith",
    "spent": {
      "value": 50,
      "currency": "SGD"
    },
    "available_to_spend": {
      "value": 1000,
      "currency": "SGD"
    },
    "card_type": "subscription",
    "expiry": "Aug",
    "limit": 5,
    "currency": "SGD",
    "status": "active"

  },
  {
    "name": "Xero",
    "budget_name": "Software subscription",
    "owner_id": 2,
    "owner_name": "Mayank",
    "spent": {
      "value": 150,
      "currency": "SGD"
    },
    "available_to_spend": {
      "value": 1000,
      "currency": "SGD"
    },
    "card_type": "burner",
    "expiry": "10 Aug",
    "limit": 5,
    "currency": "SGD",
    "status": "active"

  },
  {
    "name": "Mookambika",
    "budget_name": "Miscellaneous",
    "owner_id": 2,
    "owner_name": "Rajith",
    "spent": {
      "value": 50,
      "currency": "SGD"
    },
    "available_to_spend": {
      "value": 1000,
      "currency": "SGD"
    },
    "card_type": "subscription",
    "expiry": "Aug",
    "limit": 20,
    "currency": "SGD",
    "status": "active"

  }
]


const cardType = Object.keys(carditems);

console.log(cardType)

const App = () => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const [cardMenu, setCardMenu] = useState("");
  const [cardList, setCardList] = useState([])



  const OwnerCards = carditems.filter((item) => {
    return item.owner_id === 1;
  })

  console.log(OwnerCards)


  const filtersubcards = carditems.filter((item) => {
    return item.card_type === "subscription";

  })
  const filtercards = carditems.filter((item) => {
    return item.card_type === "burner";

  })

  console.log("filtercards",filtercards)

  console.log(carditems)

  



  return (
    <div>
      <Navbar />

      <div className='container-fluid'>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Yours
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              Blocked
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >
              <img className='card-type-icons' alt='subscription' src='https://cdn-icons-png.flaticon.com/512/2089/2089548.png' />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '5' })}
              onClick={() => { toggle('5'); }}
            >
              <img className='card-type-icons' alt='burner' src='https://i.imgur.com/6jA3kGI.png' />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col className="container mt-3">
                
                  <div className="row justify-content-evenly">
                  
                  {OwnerCards.map((item) => {
                    return (
                      
                      <CommonCard item={item} />
                      
                    )
                  })}
                
                  </div>
                
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <div className="container  mt-3">
                <div className="row justify-content-evenly">


                  {carditems.map((item) => {
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
                  })}
                </div>
              </div>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <div className="container  mt-3">
                <div className="row justify-content-evenly">


                  {filtersubcards.map((item) => {
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
                  })}
                </div>
              </div>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <div className="container  mt-3">
                <div className="row justify-content-evenly">


                  {filtercards.map((item) => {
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
                  })}
                </div>
              </div>
            </Row>
          </TabPane>
        </TabContent>
      </div>

      {/* {cardType.map((item) => {
        // returning dynamic items with arrow functions
        return (
          <span
            className="genre-button"
            style={{ cursor: "pointer" }}
            onClick={() => genreClickHandler(item)}
            key={item}
          >
            {item}
          </span>
        );
      })} */}


      {/* <div className='container'>
        <div className="row justify-content-evenly">
          <h1 className="text-center">Subscription Cards</h1>
          {
            filtersubcards.map((item) => {
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
                      <div className='card-expiry-deatils'> {item.card_type === "subscription" ? "limit" : "expires"} :  {item.limit}{item.currency} </div>
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
            })
          }
        </div>
      </div> */}

      {/* <div className='container'>
        <div className='row justify-content-evenly'>
          <h1 className="text-center">Burner Cards</h1>
          {
            filtercards.map((item) => {
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
                      <div className='card-expiry-deatils'> {item.card_type === "subscription" ? "limit" : "expires"} :  {item.limit}{item.currency} </div>
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
            })
          }
        </div>
      </div> */}


      {/* <h1 className='align-item-center text-center'>All Cards</h1> */}

      {/* <div className="container mt-3">
        <div className="row justify-content-evenly">
          {carditems.map((item) => {
            return (
              <div className='col-12 col-md-5 mt-4'>
                <div className="crad-container p-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">

                    <div className="card-head">
                      <div className="card-title">{item.name}</div>
                      <div className="card-owner">{item.owner_name} . {item.budget_name}</div>
                    </div>
                    <div className='card-type-icon'>
                      {item.card_type === "subscription" ? "♻️" : "✨"}
                    </div>
                  </div>

                  <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div className="card-type">{item.card_type}</div>
                    <div className='card-expiry-deatils'> {item.card_type === "subscription" ? "limit" : "expires"} :  {item.limit}{item.currency} </div>
                  </div>

                  <div>
                    <Progress multi>
                      <Progress bar value="50"></Progress>
                      <Progress bar color="success" value="50"></Progress>
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
          })}
        </div>
      </div> */}
    </div>


  );
}

export default App;
