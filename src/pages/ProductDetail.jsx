import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { getProductDetail } from "../data/mockData";

const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();
  const [product, setProduct] = useState(); // eslint-disable-line no-unused-vars

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, [setProduct]);



  return (
    <ProductDetailStyled>
      <TitleSection>
        <Navigation NavigationName={"코멘토 쇼핑"}/>
      </TitleSection>

    </ProductDetailStyled>
  );
};



const ProductDetailStyled = styled.div``;

const TitleSection = styled.div`
width: 390px;
height: 66px;
`;



export default ProductDetail;