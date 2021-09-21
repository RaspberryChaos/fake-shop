import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

import Row from "react-bootstrap/Row";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error", error);
      });
    dispatch(setProducts(response.data));
  };

  fetchProducts();

  return (
    <Row xs={1} sm={2} md={4}>
      <ProductComponent />
    </Row>
  );
};

export default ProductListing;
