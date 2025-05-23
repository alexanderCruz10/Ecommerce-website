import React from "react";
import { Link } from "react-router";

const ProductCards = ({ GridList, product}) => {
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list" }`}>
    { product.map((product, i) => (
      <div className="col-lg-4 col-md-6 col-12" key={i}>
        <div className="product-item">
          <div className="product-thumb">
            <div className="pro-thumb">
              <img src={`${product.img}`} alt={`${product.img}`} />
            </div>
            <div className="product-action-link">
              <Link to={`/shop/${product.id}`}>
                <i className="icofont-eye"></i>
              </Link>
              <a href="#">
                <i className="icofont-heart"></i>
              </a>
              <Link to="/cart-page">
                <i className="icofont-cart-alt"></i>
              </Link>
            </div>
          </div>
          <div className="product-content">
            <h5>
              <Link to={`/shop/${product.id}`}>{product.name}</Link>
            </h5>
            <h6>${product.price}</h6>
          </div>
        </div>
        <div className="product-list-item">
          <div className="product-thumb">
            <div className="pro-thumb">
              <img src={`${product.img}`} alt={`${product.imgAlt}`} />
            </div>
            <div className="product-action-link">
              <a href="#">
                <i className="icofont-eye"></i>
              </a>
              <a href="#">
                <i className="icofont-heart"></i>
              </a>
              <a href="#">
                <i className="icofont-cart-alt"></i>
              </a>
            </div>
          </div>
          <div className="product-content">
          <Link to={`/shop/${product.id}`}>{product.name}</Link>
            <h6>${product.price}</h6>
            <p>{product.seller}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default ProductCards;
