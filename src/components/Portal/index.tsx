import { FC } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  target: string;
  children?: React.ReactElement | React.ReactElement[];
}
const Portal: FC<PortalProps> = ({ target, children }) => {
  const domElement = document.getElementById(target);

  return domElement && ReactDOM.createPortal(children, domElement);
};

export default Portal;
