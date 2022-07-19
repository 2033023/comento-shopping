import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import BasketItem from "../components/BasketItem";
import * as webStorage from "../utils/webStorage";

const Basket = () => {
  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);
  const [pricesum, setpricesum] = useState(0);

  // Basket이 렌더링 될때, 한번만 실행되는 로직
  useEffect(() => {
    const items = webStorage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
    setpricesum(items.setBasketItemCount);
  }, []);

  // [장바구니 상품 갯수]가 바뀌면, 실행되는 로직
  useEffect(() => {
    const items = webStorage.getBasketItems();
    setBasketItems(items);
  }, [basketItemCount]);

  useEffect(() => {
    const items = webStorage.getBasketItems();
    setBasketItems(items);
  }, [pricesum]);

  const onClickRemoveButton = (productId) => {
    webStorage.removeBasketItem(productId);
    setBasketItemCount(basketItems.length - 1);
  };

  return (
    <BasketStyled>
      <Navigation name="장바구니" hasBack={true} />

      {basketItems &&
        basketItems.map((product) => (
          <BasketItem
            key={product.id}
            id={product.id}
            thumbnail={product.thumbnail}
            name={product.name}
            price={product.price}
            onRemoveItem={() => onClickRemoveButton(product.id)}
          />
        ))}

      <div>상품 {basketItemCount}개 </div>
      <div>배송비 0원 </div>
      <div>총 주문금액 {pricesum}원 </div>

      <AddBasketButton onClick={() => window.confirm("주문되었습니다.")}>
        주문하기
      </AddBasketButton>
    </BasketStyled>
  );
};

const BasketStyled = styled.div``;

const AddBasketButton = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-width: 390px;
  height: 70px;
  background: #24dbaf;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

export default Basket;
