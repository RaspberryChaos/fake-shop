import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Card from "react-bootstrap/Card";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Card style={{ padding: "2rem" }} key={id}>
        <Link to={`/product/${id}`}>
          <Card.Img variant="top" src={image} alt={title} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{category}</Card.Text>
            <Card.Text>€{price}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
