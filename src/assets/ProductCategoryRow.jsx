export default function ProductCategoryRow({ category }) {
    console.log("ProductCategoryRow", category);
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

import PropTypes from "prop-types";
ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
};
