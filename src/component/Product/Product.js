import React, { Fragment } from "react";
import ProductList from "./ProductList";
import "./Product.css";
const Product = () => {
  const productData = [
    {
      id: 1,
      name: "Aloe Vera",
      category: "Food crop",
      price: 1000,
      reviews: 5,
      image: "image7.jpg",
    },
    {
      id: 2,
      name: "Flower vase",
      category: "Fruit",
      price: 800,
      reviews: 4,
      image: "image6.jpg",
    },
    {
      id: 3,
      name: "Legumenous flower",
      category: "Fruit",
      price: 600,
      reviews: 4,
      image: "image8.jpg",
    },
    {
      id: 4,
      name: "grape",
      category: "Fruit",
      price: 600,
      reviews: 4,
      image: "image9.jpg",
    },
    {
      id: 5,
      name: "Strawberry",
      category: "Fruit",
      price: 600,
      reviews: 4,
      image: "image5.jpg",
    },
    {
      id: 6,
      name: "Banana",
      category: "Fruit",
      price: 600,
      reviews: 4,
      image: "image3.jpg",
    },
    {
      id: 7,
      name: "grape",
      category: "Fruit",
      price: 600,
      reviews: 4,
      image: "image2.jpg",
    },
    {
      id: 8,
      name: "Orange",
      category: "Fruit",
      price: 600,
      reviews: 4,
      image: "image1.jpg",
    },
    {
      id: 9,
      name: "Banana",
      category: "Fruit",
      price: 600,
      reviews: 4,
      image: "image5.jpg",
    },
    {
      id: 10,
      name: "onions",
      category: "Fruit",
      price: 600,
      reviews: 4,
      image: "image10.jpg",
    },
  ];
  const EquipData = [
    {
      id: 1,
      name: "NEPTUNE WATER PUMP SET (NPP 30)",
      category: "Equipement",
      price: 1000,
      reviews: 5,
      image: "image14.jpg",
    },
    {
      id: 2,
      name: "FlNEPTUNE HANDY FOGGING MACHINE",
      category: "Machine",
      price: 25800,
      reviews: 4,
      image: "image15.jpg",
    },
    {
      id: 3,
      name: "VINSPIRE HORIZONTAL CHAFF CUTTER",
      category: "machine",
      price: 600,
      reviews: 4,
      image: "image16.jpg",
    },
    {
      id: 4,
      name: "NEPTUNE BC-520W BRUSH CUTTER",
      category: "machine",
      price: 600,
      reviews: 4,
      image: "image17.jpg",
    },
    {
      id: 5,
      name: "WOLFGARTEN MULTI STAR BOW RAKE...",
      category: "machine",
      price: 600,
      reviews: 4,
      image: "image18.jpg",
    },
    {
      id: 6,
      name: "VINGLOBE VGT SUGERCANE CUTTING...",
      category: "machine",
      price: 600,
      reviews: 4,
      image: "image11.jpg",
    },
    {
      id: 7,
      name: "VINSPIRE HORIZONTAL CHAFF CUTTER",
      category: "machine",
      price: 600,
      reviews: 4,
      image: "image12.jpg",
    },
    {
      id: 8,
      name: "NEPTUNE BC-520W BRUSH CUTTER",
      category: "machine",
      price: 600,
      reviews: 4,
      image: "image13.jpg",
    },
    {
      id: 9,
      name: "WOLFGARTEN MULTI STAR BOW RAKE...",
      category: "machine",
      price: 600,
      reviews: 4,
      image: "image19.jpg",
    },
    {
      id: 10,
      name: "VINGLOBE VGT SUGERCANE CUTTING...",
      category: "machine",
      price: 600,
      reviews: 4,
      image: "image20.jpg",
    },
  ];
  return (
    <Fragment>
      <section className="product">
        <h2 className="heading">Fruits and vegetables</h2>
        <ProductList products={productData} />
        <a href="@" className="btn product_btn">
          view more
        </a>
      </section>
      <section className="product">
        <h2 className="heading">Farming Equipments</h2>
        <ProductList products={EquipData} />
        <a href="@" className="btn product_btn">
          view more
        </a>
      </section>
    </Fragment>
  );
};

export default Product;
