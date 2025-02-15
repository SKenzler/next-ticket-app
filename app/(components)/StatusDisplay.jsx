const StatusDisplay = ({ status }) => {
  const getColour = (status) => {
    let colour = "bg-primary-color";
    switch (status.toLowerCase()) {
      case "not started":
        colour = "bg-green-500";
        return colour;
      case "in progress":
        colour = "bg-blue-500";
        return colour;

      case "done":
        colour = "bg-red-500";
        return colour;
      default:
        return colour;
    }
    console.log(status);
  };
  return (
    <span
      className={`"inline-block {$getColour(status)} text-slate-50 text-sm font-normal px-2 py-1 rounded-lg`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
