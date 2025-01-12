const ProgressDisplay = () => {
  return (
    <div className="w-full h-2.5 rounded-full bg-secondary-color mt-1">
      <div
        className="h-2.5 rounded-full bg-accent-color"
        style={{ width: "50%" }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
