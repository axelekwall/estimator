import { Outlet } from "react-router-dom";

const Start = () => {
  return (
    <div className="flex flex-col w-screen justify-center items-center">
      <Outlet></Outlet>
    </div>
  );
};

export default Start;
