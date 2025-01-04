import PropTypes from "prop-types";

export default function Header({ title }) {
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

Header.default = {
  title: "Howdy 👋🏼, welcome back!"
};

// Not necessary
Header.propTypes = {
  title: PropTypes.string
};
