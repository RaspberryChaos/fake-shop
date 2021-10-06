import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <Container>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Row xs={1} sm={2}>
          <Col>
            <div className="flexCenter">
              <img src={image} style={{ width: "80%" }} alt={title} />
            </div>
          </Col>
          <Col>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <h3>{category}</h3>
            <p>{description}</p>

            <Button size="lg">Add to Cart</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetails;
