import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-primary-color p-4">
      <div className="flex justify-center items-center space-x-4">
        <Link href="/">
          <FaHome className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FaTicket className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-base text-accent-color font-bold">
          useremail.gmail.com
        </p>
      </div>
    </nav>
  );
};

export default Nav;
