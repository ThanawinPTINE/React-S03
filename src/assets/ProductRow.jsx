export default function ProductRow({ product }) {
const name = product.stocked ? product.name : product.name + " (out of stock)";
console.log("ProductRow", name);
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }

import PropTypes from "prop-types";
ProductRow.propTypes = {
    product: PropTypes.object.isRequired,
    };
