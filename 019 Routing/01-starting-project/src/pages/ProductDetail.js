import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h2>Product Details!</h2>
      <p>{params.productId}</p>
      <Link to={".."} relative="path">
        Back
      </Link>
    </>
  );
}
