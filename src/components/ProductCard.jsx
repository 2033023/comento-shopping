import styled from "styled-components";

const ProductCard = ({ name, description, thumbnail, onClick }) => {
  return (
    <ProductCardStyled onClick={onClick}>
       <ProductThumbnail style={{ backgroundImage: `url(${thumbnail})` }} />
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      </ProductCardStyled>
  );
};


const ProductCardStyled = styled.div`
  padding-bottom: 40px;
`;


const ProductThumbnail = styled.div`
  width: 341px;
  height: 204px;
  background-size: cover;
  background-position: center;
`;

const ProductName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.01em;
  padding-bottom: 12px;
`;

const ProductDescription = styled.div`
 font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #000000;
`;

export default ProductCard;