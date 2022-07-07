import styled from "styled-components";

const ProductCard = ({ name, description, thumbnail }) => {
  return (
    <div>
      <img height="204" width = "341" top ="3" src={thumbnail} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
    </div>
  );
};

const ProductName = styled.div`
height: 26px;
width: 341px;
font-weight: 700;
font-size: 20px;
line-height: 26px;
letter-spacing: -0.01em;
`;
const ProductDescription = styled.div`
height: 42px;
width: 323px;
font-weight: 400;
font-size: 16px;
line-height: 21px;
text-align: left;
letter-spacing: -0.01em;
`;

export default ProductCard;