import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formatedDate = date.toLocaleString("en-AU", options);
    return formatedDate;
  };
  return (
    <div className="flex flex-col bg-primary-color hover:bg-[#d6d0d5] transition-colors duration-300 ease-in-out rounded-lg shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h3 className="mb-1">{ticket.title}</h3>
      <p className="text-sm whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p>{formatTimestamp(ticket.createdAt)}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="flex items-end ml-auto">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
