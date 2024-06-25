import { NavLink } from "react-router-dom";
const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/about", text: "About" },
  { id: 3, url: "/products", text: "Products" },
  { id: 4, url: "/cart", text: "Cart" },
  { id: 5, url: "checkout", text: "Checkout" },
  { id: 6, url: "orders", text: "Orders" },
];
function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink to={url} className="capitalize">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
export default NavLinks;
