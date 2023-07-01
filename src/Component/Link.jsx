import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Link = ({ destination, content }) => {
  return (
    <NavLink className="link" to={destination}>
      {content}
    </NavLink>
  );
};

Link.propTypes = {
  destination: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Link;
