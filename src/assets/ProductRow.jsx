export default function ProductRow({ product }) {
const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;
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
