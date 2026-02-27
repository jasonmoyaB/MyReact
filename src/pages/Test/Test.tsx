import { products } from "../../components/constants";
import Counters from "./Counters";

export const Test = () => {
  return (
    <div className="container mt-4">
      <h1>
        Just an example <span className="badge text-bg-secondary">New</span>
      </h1>

      <h2 className="mt-4">Test de React</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ margin: "10px" }}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      <Counters />
    </div>
  );
};
