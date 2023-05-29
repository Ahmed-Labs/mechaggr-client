import React, { ReactNode, useState, useEffect } from "react";
import ReactDOM from "react-dom";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const Modal: React.FC<Props> = ({ isOpen, children }) => {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // making sure the component is mounted, if not dont show modal
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted || !isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="absolute inset-0 z-50 bg-[#13161b7c] ">{children}</div>,
    document.body
  );
};

export default Modal;
