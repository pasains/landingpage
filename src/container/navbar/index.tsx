import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="flex space-x-md text-md font-nunito font-semibold">
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <NavLink  to="/about">
        <div>About</div>
      </NavLink>
      <NavLink  to="/kepengurusan">
        <div>Organization</div>
      </NavLink>
      <NavLink  to="/inventaris">
        <div>Galleries</div>
      </NavLink>
      <NavLink  to="/inventaris">
        <div>Contact Us</div>
      </NavLink>
    </nav>
  );
}
