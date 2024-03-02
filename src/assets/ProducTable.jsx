import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
export default function ProductTable({ products, filterText, inStockOnly }) {

console.log(products);
console.log(filterText);
console.log(inStockOnly);

return (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
{products.map((product) => {
  if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
    return;
  }
  if (inStockOnly && !product.stocked) {
    return;
  }
  return (
    <ProductRow
      product={product}
      key={product.name}
    />
  );

}
    </tbody>
  </table>
);
}

import PropTypes from "prop-types";

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
};



