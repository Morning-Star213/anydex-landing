import { HoverBorderGradient } from "../../ui/hover-border-gradient";
import { Button } from "../../ui/moving-borders";

const GeneralButton = ({ content, className, size }) => {
  let ref = "";
  size = size ? size : "md";

  switch (size) {
    case "sm":
      ref = "px-4 py-2 text-sm";
      break;
    case "md":
      ref = "px-5 py-3 text-base";
      break;
    case "lg":
      ref = "px-6 py-4 text-lg";
      break;
    case "auto":
      ref = "px-5 py-3 text-base md:px-6 md:py-4 md:text-lg";
      break;
    default:
      break;
  }

  return (
    <button
      className={`text-theme bg-white hover:text-gray-200 hover:bg-gradient-to-r from-theme-light to-theme-dark font-medium rounded-full text-center ${ref} ${className}`}
    >
      {content}
    </button>
  );
};

export default GeneralButton;
