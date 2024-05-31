import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="flex space-x-md text-md font-nunito font-semibold">
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <NavLink to="/about">
        <div>About</div>
      </NavLink>
      <NavLink to="/organization">
        <div>Organization</div>
      </NavLink>
      <NavLink to="/galleries">
        <div>Galleries</div>
      </NavLink>
      <NavLink to="/contactus">
        <div>Contact Us</div>
      </NavLink>
    </nav>
  );
}
