import './App.css';
import Navbar from './components/Navbar'
import React, { useState } from "react";
import {  TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

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
                      <CommonCard item={item} />
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
                      <CommonCard item={item} />
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
                      <CommonCard item={item} />
                    )
                  })}
                </div>
              </div>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>


  );
}

export default App;
