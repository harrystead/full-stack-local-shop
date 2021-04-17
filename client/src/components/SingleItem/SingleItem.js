import React, { useContext, useRef } from "react";
import { useParams } from "react-router";
import { ItemsContext } from "../../contexts/ItemsContext";
import { Form, Button, Alert } from "react-bootstrap";

export default function SingleItem({}) {
  const { id } = useParams();
  const cardInfo = useContext(ItemsContext);
  const singleItem = cardInfo.filter((item) => item._id === id);
  const bidRef = useRef();

  const addBasket = () => {
    localStorage.setItem(singleItem[0]._id, JSON.stringify(singleItem));
  };

  const bidClick = (e) => {
    e.preventDefault();
    console.log(bidRef.current.value);
  };

  return (
    <div className="container">
      {singleItem &&
        singleItem.map((item) => (
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                      <img src={item.selectedPic} />
                    </div>
                  </div>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{item.name}</h3>
                  <p className="product-description">{item.description}</p>
                  <div className="bidding-inputß">
                    <h4>Bid on This Item</h4>
                    <div>
                      <Form onSubmit={bidClick} encType="multipart/form-data">
                        <Form.Control type="Input" ref={bidRef} required />
                        <Button type="submit">Submit Bid</Button>
                      </Form>
                    </div>
                  </div>
                  <h4 className="price">
                    starting price: <span>$ 299</span>
                  </h4>
                  <h4 className="price">
                    current bid: <span>$</span>
                  </h4>
                  <div className="action">
                    <button
                      onClick={addBasket}
                      className="add-to-cart btn-default"
                      type="button"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
