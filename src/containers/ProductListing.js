import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../redux/actions/productActions";
import Row from "react-bootstrap/Row";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row xs={1} sm={2} md={4}>
      <ProductComponent />
    </Row>
  );
};

export default ProductListing;
