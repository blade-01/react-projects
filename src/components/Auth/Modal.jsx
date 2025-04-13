import PropTypes from "prop-types";
import { Dialog } from "primereact/dialog";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { RiMovie2AiLine } from "react-icons/ri";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { FiLoader } from "react-icons/fi";
export default function AuthModal({ visible, setVisible }) {
  const [loading, setLoading] = useState(false);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const toast = useRef(null);
  async function handleGoogleSignIn() {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      setVisible(false);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: error.message
      });
    } finally {
      setLoading(false);
    }
  }

  const headerElement = (
    <div className="inline-flex items-center gap-2">
      <RiMovie2AiLine className="text-[32px] xl:text-[40px] text-caret" />
      <span className="font-bold white-space-nowrap">Sign In</span>
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} />
      <Dialog
        header={headerElement}
        visible={visible}
        className="w-[90%] md:w-1/2 lg:w-1/3"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="grid place-items-center ">
          <RiMovie2AiLine className="text-[32px] xl:text-[40px] text-caret" />
          <p className="text-sm text-white my-3">
            Sign in to your account to continue
          </p>
          <button
            className="border-none outline-none flex justify-center gap-2 items-center w-full sm:w-[70%] bg-white text-main-bg font-medium text-sm rounded-md px-4 py-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-wait"
            onClick={() => handleGoogleSignIn()}
            disabled={loading}
            aria-label="Sign in with Google"
          >
            {loading ? (
              <FiLoader size={"24px"} className="animate-spin" />
            ) : (
              <FaGoogle size={"24px"} />
            )}
            <span>Sign in with Google</span>
          </button>
        </div>
      </Dialog>
    </div>
  );
}

AuthModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired
};
