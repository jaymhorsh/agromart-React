import React from "react";
import ProductItem from "./ProductItem";
import classes from './ProductList.module.css';
const ProductList = (props) => {
  return (
    <ul className={classes.box_container}>
        {props.products.map((product) => (
          <ProductItem
            key={product.id}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            totalReview={product.reviews}
          />
        ))}
    
    </ul>
  );
};

export default ProductList;
