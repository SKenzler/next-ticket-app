import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  return (
    <div className="flex flex-col bg-primary-color hover:bg-[#d6d0d5] transition-colors duration-300 ease-in-out rounded-lg shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
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
