import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";

import { theme } from "../../styles";

export function Toast() {
  return ReactDOM.createPortal(
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          fontFamily: theme.fonts,
          fontWeight: 700,
          color: theme.colors.text[700],
          zIndex: 99,
        },
      }}
    />,
    document.getElementById("root-toast")!
  );
}
