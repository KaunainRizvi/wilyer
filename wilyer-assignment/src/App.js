import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [orderHistory, setOrderHistory] = useState([
    { date: "Oct. 21, 2021", type: "Pro Annual" },
    { date: "Aug. 21, 2021", type: "Pro Portfolio" },
    { date: "July 21, 2021", type: "Sponsored Post" },
    { date: "Jun. 21, 2021", type: "Sponsored Post" },
  ]);

  const handleDownload = (type) => {
    alert(`Downloading receipt for ${type}`);
  };

  const handleRemovePaymentMethod = () => {
    alert("Payment method removed");
  };

  const handleCancelSubscription = () => {
    alert("Subscription cancelled");
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="profile">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQF65sGMw0P0Hg/profile-displayphoto-shrink_400_400/0/1699693564447?e=1723680000&v=beta&t=rY16zYhWM-x38GcgAhDGVuzje_lG7_BHU8gXFswX6iA"
            alt="Profile"
          />
          <div className="profile-name">Kaunain Rizvi</div>
        </div>
        <nav className="menu">
          <ul>
            <li>General</li>
            <li>Password</li>
            <li>Invitations</li>
            <li className="active">Billing</li>
            <li>Apps</li>
          </ul>
        </nav>
        <button className="logout-button">Log out</button>
      </aside>
      <main className="main-content">
        <div className="billing-header">
          <h1>Billing</h1>
          <p>Manage billing information and view receipts</p>
        </div>
        <div className="order-history">
          <h2>Order History</h2>
          <ul>
            {orderHistory.map((order, index) => (
              <li key={index} className="order-item">
                <span>{order.date}</span>
                <span>{order.type}</span>
                <button onClick={() => handleDownload(order.type)}>
                  Download
                </button>
              </li>
            ))}
          </ul>
          <a href="#" className="load-more">
            Load more
          </a>
        </div>
        <div className="payment-method">
          <h2>Payment Method</h2>
          <div className="payment-details">
            <img src="visa-logo-url" alt="Visa" />
            <span>Visa ending in 2255</span>
            <button onClick={handleRemovePaymentMethod}>Remove</button>
          </div>
        </div>
        <div className="subscription">
          <h2>Your plan</h2>
          <div className="subscription-details">
            <span>Pro Annual</span>
            <span>Renews on Nov. 2021</span>
            <button
              className="cancel-subscription"
              onClick={handleCancelSubscription}
            >
              Cancel subscription
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
