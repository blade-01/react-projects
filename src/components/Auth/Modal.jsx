import PropTypes from "prop-types";
import { Dialog } from "primereact/dialog";

export default function AuthModal({ visible, setVisible }) {
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <p className="m-0">Lorem ipsum dolor sit amet...</p>
      </Dialog>
    </div>
  );
}

AuthModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired
};
