import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CheckoutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa"); // Initial active tab

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // order confirmation and redirect to home page
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
    alert("Your order placed successfully!");
    localStorage.removeItem("cart");
    navigate(from, { replace: true });
  };

  return (
    <div className="modalCard">
      <Button variant="primary" onClick={handleShow} className="py-2">
        Proceed to Checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tab mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                    id="visa-tab" data-toggle="tab" href="#visa" role="tab"
                    aria-controls="visa" aria-selected={activeTab === "visa"}
                    onClick={() => handleTabChange("visa")}>
                      <img src="https://i.imgur.com/sB4jftM.png" width="80" />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                      id="paypal-tab" data-toggle="tab" href="#paypal" role="tab"
                      aria-controls="paypal" aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}>
                      <img src="https://i.imgur.com/yK7EDD1.png" width="80" />
                    </a>
                  </li>
                </ul>

                {/*content*/}
                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                   id="visa" role="tabpanel" aria-labelledby="visa-tab">
                    {/* Visa tab content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit card</h5>
                      </div>
                    </div>
                    <div className="form mt-3">
                      <div className="inputbox">
                        <input type="text" name="name" className="form-control"
                          required="required"/>
                        <span>Cardholder Name</span>
                      </div>
                      <div className="inputbox">
                        <input type="text" name="name" min="1" max="999"
                        className="form-control" required="required"/>
                        <span>Card Number</span> <i className="fa fa-eye"></i>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="inputbox">
                            <input type="text" name="name" min="1" max="999"
                            className="form-control" required="required"/>
                            <span>Expiration Date</span>
                        </div>
                        <div className="inputbox">
                            <input type="text" name="name" min="1" max="999"
                            className="form-control" required="required"/>
                            <span>CVV</span>
                        </div>
                      </div>
                      <div className="px-5 pay">
                        <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>
                         Add card
                        </button>
                     </div>
                    </div>
                  </div>

                  {/* paypal content */}
                  <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                    id="paypal" role="tabpanel" aria-labelledby="paypal-tab">
                        {/* Paypal tab content */}
                        <div className="mx-4 mt-4">
                            <div className="text-center">
                                <h5>Paypal Account Info</h5>
                            </div>
                        </div>
                        <div className="form mt-3">
                            <div className="inputbox">
                                <input type="text" name="name"className="form-control"
                                required="required"/>
                                <span>Enter your email</span>
                            </div>
                            <div className="inputbox">
                                <input type="text" name="name" min="1" max="999"
                                className="form-control" required="required"/>
                                <span>Your Name</span> 
                            </div>
                            <div className="d-flex flex-row">
                                <div className="inputbox">
                                    <input type="text" name="name" min="1" max="999"
                                    className="form-control" required="required"/>
                                    <span>Extra Info</span>
                                </div>
                                <div className="inputbox">
                                    <input type="text" name="name" min="1" max="999"
                                    className="form-control" required="required"/>
                                    <span></span>
                                </div>
                            </div>
                            <div className="pay px-5">
                                <button className="btn btn-primary btn-block" onClick={handleOrderConfirm}>
                                    Add paypal
                                </button>
                             </div>
                        </div>
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
