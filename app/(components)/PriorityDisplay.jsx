import { FaFire } from "react-icons/fa";
const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FaFire
        className={`pr-1 ${
          priority < 0 ? "text-primary-color" : "text-red-500"
        }`}
      />
      <FaFire
        className={`pr-1 ${
          priority < 1 ? "text-primary-color" : "text-red-500"
        }`}
      />
      <FaFire
        className={`pr-1 ${
          priority < 2 ? "text-primary-color" : "text-red-500"
        }`}
      />
      <FaFire
        className={`pr-1 ${
          priority < 3 ? "text-primary-color" : "text-red-500"
        }`}
      />
      <FaFire
        className={`pr-1 ${
          priority < 4 ? "text-primary-color" : "text-red-500"
        }`}
      />
    </div>
  );
};

export default PriorityDisplay;
