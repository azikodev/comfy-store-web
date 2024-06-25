import axios from "axios";
const productsURL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productsURL,
});

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format((price / 100).toFixed(2));

  return dollarAmount;
};

export const generatedAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
