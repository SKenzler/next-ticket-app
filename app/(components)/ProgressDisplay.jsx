const ProgressDisplay = () => {
  return (
    <div className="w-full h-2.5 rounded-full bg-secondary-color">
      <div
        className="h-2.5 rounded-full bg-primary-color"
        style={{ width: "50%" }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
