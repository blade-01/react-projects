import PropTypes from "prop-types";
import { InfinitySpin } from "react-loader-spinner";

export default function Loader({ height }) {
  return (
    <div className={`grid place-items-center ${height}`}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#f22727"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}

Loader.propTypes = {
  height: PropTypes.string
};
