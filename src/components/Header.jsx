import PropTypes from "prop-types";

function Header({ title }) {
  return (
    <header>
      <div className=" header">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </div>
    </header>
  );
}

// Deprecated
// Header.defaultProps = {
//   title: "Welcome back"
// };

Header.default = {
  title: "Welcome back"
};

// Not necessary
Header.propTypes = {
  title: PropTypes.string
};

export default Header;
