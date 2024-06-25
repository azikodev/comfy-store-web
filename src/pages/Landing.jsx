import { FeturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const loader = async () => {
  const req = await customFetch(url);

  const products = req.data.data;

  return {products};
};
function Landing() {
  return (
    <>
      <Hero />
      <FeturedProducts/>
    </>
  );
}
export default Landing;
