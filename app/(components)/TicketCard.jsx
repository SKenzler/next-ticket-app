import DeleteBlock from "./DeleteBlock";
import PriorityDsiplay from "./PriorityDsiplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-[#EDE9ED] hover:bg-[#DAD2DA] rounded-lg shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDsiplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h3 className="mb-1">Ticket Title</h3>
      <p className="text-sm whitespace-pre-wrap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, sit!
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p>08/12/25 10:42pm</p>
          <ProgressDisplay />
        </div>
        <div className="flex items-end ml-auto">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
