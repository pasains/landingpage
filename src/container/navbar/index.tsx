import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="flex space-x-md text-md trasition font-nunito font-semibold">
      <NavLink to="/">
        <div className="transition duration-300 hover:scale-110 hover:opacity-75">Home</div>
      </NavLink>
      <NavLink to="/about">
        <div className="transition duration-300 hover:scale-110 hover:opacity-75">About</div>
      </NavLink>
      <NavLink to="/organization">
        <div className="transition duration-300 hover:scale-110 hover:opacity-75">Organization</div>
      </NavLink>
      <NavLink to="/galleries">
        <div className="transition duration-300 hover:scale-110 hover:opacity-75">Galleries</div>
      </NavLink>
      <NavLink to="/contactus">
        <div className="transition duration-300 hover:scale-110 hover:opacity-75">Contact Us</div>
      </NavLink>
    </nav>
  );
}
