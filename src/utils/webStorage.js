const BASKET = "BASKET";

// 장바구니에 상품 추가
export const addBasket = (product) => {
  let basketItems = getBasketItems();

  // 동일 상품이 있는 경우 추가하지 않음
  const isSameProduct = !!basketItems.find((item) => item.id === product.id);
  if (!isSameProduct) {
    basketItems.push(product);

    // ✅ 설명: webStorage는 key-value 구조로 문자열만 저장할 수 있습니다.
    localStorage.setItem(BASKET, JSON.stringify(basketItems));
  }
};

// 장바구니에서 동일한 id를 가진 상품 제거
export const removeBasketItem = (productId) => {
  let basketItems = getBasketItems();
  basketItems = basketItems.filter((item) => item.id !== productId);

  // 장바구니 데이터를 제거하고, 다시 만들어서 추가
  localStorage.removeItem(BASKET);
  localStorage.setItem(BASKET, JSON.stringify(basketItems));
};

// 장바구니 상품 리스트 가져오기
export const getBasketItems = () => {
  const basketItems = localStorage.getItem(BASKET);
  return basketItems ? JSON.parse(basketItems) : [];
};
