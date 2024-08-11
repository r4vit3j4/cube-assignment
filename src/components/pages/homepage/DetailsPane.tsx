import { Outlet } from "react-router-dom";

const DetailsPane = () => {
  return (
    <div className="flex-1">
      <Outlet />
    </div>
  );
};

export default DetailsPane;
