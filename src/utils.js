export const getTotalPrice = (cartProducts) => {
  const productPrices = cartProducts.map((product) => parseFloat(product.totalPriceForItem.substring(1)));
  let sum = 0;
  for(const price of productPrices){
    sum += price;
  }
  return `£${sum.toFixed(2)}`;
};
