import { Link } from "react-router-dom";

export default function Products() {
  const PRODUCTS = [
    { id: "p1", title: "Products 1" },
    { id: "p2", title: "Products 2" },
    { id: "p3", title: "Products 3" },
  ];

  return (
    <>
      <h1>My products page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
