import { NavLink } from "react-router-dom";
import { customers } from "../../../data/customer";
import { cn } from "../../../lib/utils";

const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-58px)] max-w-xs flex-1 overflow-y-scroll border-r">
      {customers.map((customer) => {
        return (
          <NavLink
            key={customer.uuid}
            to={`/customer/${customer.id.toString()}`}
            className={({ isActive }) => cn(isActive ? "block bg-muted" : "")}
          >
            <div className="flex flex-col gap-2 border-b p-4">
              <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {customer.name}
              </p>
              <p className="text-sm text-muted-foreground">{customer.title}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
