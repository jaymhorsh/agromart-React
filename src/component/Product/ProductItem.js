import React from "react";
import classes from "./ProductItem.module.css"; // Import CSS module
const ProductItem = ({ image, name, category, price, totalReview }) => {
  return (
    <li className={classes.box}>
      <div className={classes.image_container}>
        <img
          src={require(`../../assets/img/${image}`)}
          alt={`product ${image}`}
        />
      </div>
      <div className={classes.image_content}>
        <div className={classes.image_product}>
          <h3 className={classes["product-name"]}>{name}</h3>
          <p className=''>{category}</p>
        </div>
        <div className={classes.price}>
          <h3>&#8358; {price}</h3>
          <div className={classes.stars}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span className={classes.star_span}>{` (${totalReview}) `}</span>
          </div>
        </div>
        <div className={classes.image_button}>
          <button className={`${classes.image_btn} btn `}>More Details</button>
          <button className={classes.image_carte}>
            <i className={`fa fa-cart-plus ${classes.image_cart}`}></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
